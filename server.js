const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();

// تفعيل CORS لجميع الطلبات
app.use(cors({ origin: "*" }));
app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);

// تهيئة Socket.IO مع تفعيل CORS والوسائط المقبولة
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  },
  transports: ['polling', 'websocket']
});

const MESSAGES_FILE = path.join(__dirname, 'messages.json');

function loadMessages() {
  try {
    if (fs.existsSync(MESSAGES_FILE)) {
      return JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf8'));
    }
  } catch (e) {
    console.error("خطأ في قراءة الملف:", e);
  }
  return [];
}

function saveMessages(msgs) {
  try {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(msgs, null, 2));
  } catch (e) {
    console.error("خطأ في حفظ الملف:", e);
  }
}

let onlineUsers = [];
let messages = loadMessages();

io.on('connection', (socket) => {
  socket.emit('oldMessages', messages);

  socket.on('join', (username) => {
    if (!username) return;

    onlineUsers = onlineUsers.filter(u => u.id !== socket.id);
    const firstChar = username.trim() ? username.trim()[0].toUpperCase() : 'U';
    const user = { id: socket.id, name: username, avatar: firstChar };
    
    onlineUsers.push(user);
    socket.username = username;
    io.emit('onlineUsers', onlineUsers);

    const msg = { sender: 'النظام', text: `${username} انضم`, time: getTime(), system: true };
    messages.push(msg);
    saveMessages(messages);
    socket.broadcast.emit('message', msg);
  });

  socket.on('chatMessage', (data) => {
    if (!data || !data.text) return;
    const msg = { sender: data.sender || socket.username || 'مجهول', text: data.text, time: getTime() };
    messages.push(msg);
    saveMessages(messages);
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    if (socket.username) {
      onlineUsers = onlineUsers.filter(u => u.id !== socket.id);
      io.emit('onlineUsers', onlineUsers);
      const msg = { sender: 'النظام', text: `${socket.username} غادر`, time: getTime(), system: true };
      messages.push(msg);
      saveMessages(messages);
      io.emit('message', msg);
    }
  });
});

function getTime() {
  return new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`السيرفر شغال على المنفذ ${PORT}`);
});

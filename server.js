const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

const MESSAGES_FILE = path.join(__dirname, 'messages.json');

function loadMessages() {
  try {
    if (fs.existsSync(MESSAGES_FILE)) {
      return JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf8'));
    }
  } catch (e) {}
  return [];
}

function saveMessages(msgs) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(msgs, null, 2));
}

let onlineUsers = [];
let messages = loadMessages();

io.on('connection', (socket) => {
  socket.emit('oldMessages', messages);

  socket.on('join', (username) => {
    onlineUsers = onlineUsers.filter(u => u.id !== socket.id);
    const user = { id: socket.id, name: username, avatar: username[0].toUpperCase() };
    onlineUsers.push(user);
    socket.username = username;
    io.emit('onlineUsers', onlineUsers);

    const msg = { sender: 'النظام', text: `${username} انضم`, time: getTime(), system: true };
    messages.push(msg);
    saveMessages(messages);
    socket.broadcast.emit('message', msg);
  });

  socket.on('chatMessage', (data) => {
    const msg = { sender: data.sender, text: data.text, time: getTime() };
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

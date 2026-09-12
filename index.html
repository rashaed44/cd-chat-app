<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>دردشة الموقع - أونلاين</title>
    <script src="/socket.io/socket.io.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
        }

        /* شاشة تسجيل الدخول */
        #login-screen {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(15px);
            border-radius: 20px;
            padding: 45px 40px;
            width: 100%;
            max-width: 420px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        #login-screen h1 {
            text-align: center;
            margin-bottom: 8px;
            font-size: 28px;
            background: linear-gradient(to right, #00d2ff, #3a7bd5);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        #login-screen p {
            text-align: center;
            color: #aaa;
            margin-bottom: 35px;
            font-size: 14px;
        }

        .form-group {
            margin-bottom: 22px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: #ccc;
        }

        .form-group input {
            width: 100%;
            padding: 14px 18px;
            border: none;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            font-size: 16px;
            outline: none;
            transition: 0.3s;
        }

        .form-group input:focus {
            background: rgba(255, 255, 255, 0.18);
            box-shadow: 0 0 0 3px rgba(0, 210, 255, 0.3);
        }

        #login-btn {
            width: 100%;
            padding: 15px;
            border: none;
            border-radius: 12px;
            background: linear-gradient(to right, #00d2ff, #3a7bd5);
            color: white;
            font-size: 17px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
            margin-top: 10px;
        }

        #login-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0, 210, 255, 0.3);
        }

        /* شاشة الدردشة */
        #chat-screen {
            display: none;
            width: 100%;
            max-width: 1100px;
            height: 90vh;
            background: rgba(20, 20, 35, 0.9);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.08);
            flex-direction: row;
        }

        /* الواجهة الجانبية */
        #online-sidebar {
            width: 280px;
            background: rgba(0, 0, 0, 0.3);
            border-left: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            flex-direction: column;
        }

        .sidebar-header {
            padding: 18px 20px;
            background: rgba(0, 0, 0, 0.25);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            user-select: none;
            transition: 0.2s;
        }

        .sidebar-header:hover {
            background: rgba(0, 210, 255, 0.1);
        }

        .sidebar-header h3 {
            font-size: 15px;
            color: #00d2ff;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .sidebar-header .arrow {
            font-size: 12px;
            transition: transform 0.3s;
        }

        .sidebar-header.active .arrow {
            transform: rotate(180deg);
        }

        #online-count {
            background: #00d2ff;
            color: #000;
            font-size: 12px;
            font-weight: bold;
            padding: 3px 10px;
            border-radius: 20px;
        }

        #online-list {
            flex: 1;
            overflow-y: auto;
            padding: 12px;
            display: none;
        }

        #online-list.show {
            display: block;
        }

        .online-user {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 14px;
            border-radius: 12px;
            margin-bottom: 6px;
            transition: 0.2s;
            background: rgba(255, 255, 255, 0.04);
        }

        .online-user:hover {
            background: rgba(255, 255, 255, 0.08);
        }

        .online-user .number {
            width: 28px;
            height: 28px;
            background: rgba(0, 210, 255, 0.2);
            color: #00d2ff;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            font-weight: bold;
        }

        .online-user .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(45deg, #00d2ff, #3a7bd5);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 16px;
            position: relative;
        }

        .online-user .status-dot {
            position: absolute;
            bottom: 2px;
            left: 2px;
            width: 12px;
            height: 12px;
            background: #00ff88;
            border-radius: 50%;
            border: 2px solid #1a1a2e;
        }

        .online-user .info {
            flex: 1;
        }

        .online-user .name {
            font-size: 14px;
            font-weight: 500;
        }

        .online-user .status {
            font-size: 11px;
            color: #00ff88;
            margin-top: 2px;
        }

        .online-user.me {
            background: rgba(0, 210, 255, 0.15);
            border: 1px solid rgba(0, 210, 255, 0.3);
        }

        /* منطقة الدردشة */
        #chat-area {
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        #chat-header {
            padding: 18px 25px;
            background: rgba(0, 0, 0, 0.25);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        #chat-header h2 {
            font-size: 18px;
            color: #00d2ff;
        }

        #logout-btn {
            background: rgba(255, 70, 70, 0.2);
            color: #ff6b6b;
            border: 1px solid rgba(255, 70, 70, 0.4);
            padding: 8px 16px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 13px;
            transition: 0.2s;
        }

        #logout-btn:hover {
            background: rgba(255, 70, 70, 0.35);
        }

        #messages {
            flex: 1;
            overflow-y: auto;
            padding: 25px;
            display: flex;
            flex-direction: column;
            gap: 18px;
        }

        .message {
            max-width: 70%;
            padding: 12px 18px;
            border-radius: 18px;
            position: relative;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .message.other {
            background: rgba(255, 255, 255, 0.1);
            align-self: flex-start;
            border-bottom-right-radius: 4px;
        }

        .message.me {
            background: linear-gradient(to right, #00d2ff, #3a7bd5);
            align-self: flex-end;
            border-bottom-left-radius: 4px;
        }

        .message.system {
            background: rgba(255, 193, 7, 0.15);
            align-self: center;
            border: 1px solid rgba(255, 193, 7, 0.3);
            max-width: 90%;
            text-align: center;
            font-size: 13px;
        }

        .message .sender {
            font-size: 12px;
            font-weight: bold;
            margin-bottom: 4px;
            opacity: 0.85;
        }

        .message .text {
            font-size: 15px;
            line-height: 1.4;
        }

        .message .time {
            font-size: 11px;
            opacity: 0.6;
            margin-top: 6px;
            text-align: left;
        }

        .message.me .time {
            text-align: right;
        }

        #input-area {
            padding: 18px 25px;
            background: rgba(0, 0, 0, 0.25);
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            gap: 12px;
        }

        #message-input {
            flex: 1;
            padding: 14px 20px;
            border: none;
            border-radius: 30px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            font-size: 15px;
            outline: none;
        }

        #message-input:focus {
            background: rgba(255, 255, 255, 0.15);
        }

        #send-btn {
            width: 55px;
            height: 55px;
            border: none;
            border-radius: 50%;
            background: linear-gradient(to right, #00d2ff, #3a7bd5);
            color: white;
            font-size: 20px;
            cursor: pointer;
            transition: 0.2s;
        }

        #send-btn:hover {
            transform: scale(1.08);
        }

        .empty-messages {
            text-align: center;
            color: #888;
            margin-top: 80px;
            font-size: 15px;
        }

        @media (max-width: 768px) {
            #chat-screen {
                flex-direction: column;
                height: 100vh;
                border-radius: 0;
            }
            #online-sidebar {
                width: 100%;
                height: auto;
                max-height: 220px;
                border-left: none;
                border-bottom: 1px solid rgba(255,255,255,0.08);
            }
        }
    </style>
</head>
<body>

    <!-- شاشة تسجيل الدخول -->
    <div id="login-screen">
        <h1>دردشة الموقع</h1>
        <p>أدخل اسمك للانضمام إلى المحادثة الأونلاين</p>
        
        <div class="form-group">
            <label>اسم المستخدم</label>
            <input type="text" id="username" placeholder="أدخل اسمك هنا" maxlength="20" autocomplete="off">
        </div>
        
        <button id="login-btn">دخول إلى الدردشة</button>
    </div>

    <!-- شاشة الدردشة -->
    <div id="chat-screen">
        <div id="online-sidebar">
            <div class="sidebar-header" id="members-header">
                <h3>
                    <span class="arrow">▼</span>
                    قسم الأعضاء المتصلين
                </h3>
                <span id="online-count">0</span>
            </div>
            <div id="online-list"></div>
        </div>

        <div id="chat-area">
            <div id="chat-header">
                <h2>غرفة الدردشة العامة</h2>
                <button id="logout-btn">خروج</button>
            </div>
            
            <div id="messages"></div>
            
            <div id="input-area">
                <input type="text" id="message-input" placeholder="اكتب رسالتك هنا..." autocomplete="off">
                <button id="send-btn">➤</button>
            </div>
        </div>
    </div>

    <script>
        const socket = io();

        let currentUser = null;

        const loginScreen = document.getElementById('login-screen');
        const chatScreen = document.getElementById('chat-screen');
        const usernameInput = document.getElementById('username');
        const loginBtn = document.getElementById('login-btn');
        const logoutBtn = document.getElementById('logout-btn');
        const messagesDiv = document.getElementById('messages');
        const messageInput = document.getElementById('message-input');
        const sendBtn = document.getElementById('send-btn');
        const onlineList = document.getElementById('online-list');
        const onlineCount = document.getElementById('online-count');
        const membersHeader = document.getElementById('members-header');

        // فتح/إغلاق قسم الأعضاء
        membersHeader.addEventListener('click', () => {
            onlineList.classList.toggle('show');
            membersHeader.classList.toggle('active');
        });

        // تسجيل الدخول
        loginBtn.addEventListener('click', login);
        usernameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') login();
        });

        function login() {
            const name = usernameInput.value.trim();
            if (!name || name.length < 2) {
                alert('من فضلك أدخل اسم مستخدم صحيح (حرفين على الأقل)');
                return;
            }

            currentUser = name;
            socket.emit('join', name);

            loginScreen.style.display = 'none';
            chatScreen.style.display = 'flex';
            messageInput.focus();

            // فتح قائمة الأعضاء
            onlineList.classList.add('show');
            membersHeader.classList.add('active');
        }

        // استقبال قائمة الأعضاء المتصلين
        socket.on('onlineUsers', (users) => {
            renderOnlineUsers(users);
        });

        // استقبال الرسائل
        socket.on('message', (msg) => {
            addMessage(msg);
        });

        // عرض الأعضاء (قائمة متسلسلة)
        function renderOnlineUsers(users) {
            onlineList.innerHTML = '';
            onlineCount.textContent = users.length;

            if (users.length === 0) {
                onlineList.innerHTML = '<div style="text-align:center;color:#777;padding:20px;font-size:13px;">لا يوجد أعضاء متصلين</div>';
                return;
            }

            users.forEach((user, index) => {
                const isMe = user.name === currentUser;
                const el = document.createElement('div');
                el.className = `online-user ${isMe ? 'me' : ''}`;
                
                el.innerHTML = `
                    <div class="number">${index + 1}</div>
                    <div class="avatar">
                        ${user.avatar}
                        <div class="status-dot"></div>
                    </div>
                    <div class="info">
                        <div class="name">\( {user.name} \){isMe ? ' (أنت)' : ''}</div>
                        <div class="status">متصل الآن</div>
                    </div>
                `;
                onlineList.appendChild(el);
            });
        }

        // إضافة رسالة
        function addMessage(msg) {
            const isMe = msg.sender === currentUser;
            const isSystem = msg.system;

            const div = document.createElement('div');
            div.className = `message ${isSystem ? 'system' : (isMe ? 'me' : 'other')}`;

            if (isSystem) {
                div.innerHTML = `
                    <div class="text">${escapeHtml(msg.text)}</div>
                    <div class="time">${msg.time}</div>
                `;
            } else {
                div.innerHTML = `
                    <div class="sender">${isMe ? 'أنت' : msg.sender}</div>
                    <div class="text">${escapeHtml(msg.text)}</div>
                    <div class="time">${msg.time}</div>
                `;
            }

            // إزالة رسالة "لا توجد رسائل"
            const empty = messagesDiv.querySelector('.empty-messages');
            if (empty) empty.remove();

            messagesDiv.appendChild(div);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }

        // إرسال رسالة
        function sendMessage() {
            const text = messageInput.value.trim();
            if (!text || !currentUser) return;

            socket.emit('chatMessage', {
                sender: currentUser,
                text: text
            });

            messageInput.value = '';
        }

        sendBtn.addEventListener('click', sendMessage);
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        // خروج
        logoutBtn.addEventListener('click', () => {
            if (confirm('هل تريد الخروج من الدردشة؟')) {
                location.reload();
            }
        });

        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
    </script>
</body>
</html>
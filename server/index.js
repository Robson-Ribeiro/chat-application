const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
io = socketio(server);

io.on('connection', (socket) => {

    socket.on('join', ({ name, room }, callback) => {
        
    });



    socket.on('disconnect', () => {

    });
});

app.use(router);

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});





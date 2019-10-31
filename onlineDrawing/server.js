const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
let server = app.listen(port);

app.use(express.static('public'));

console.log("socket running");

let socket = require('socket.io');
let io = socket(server);
io.sockets.on('connection', (socket) => {
    console.log(`new connection ' ${socket.id}`);
    socket.on('mouse', (data) => {
        socket.broadcast.emit('mouse', data);
        console.log(data);
    });
});

/*
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
let server = app.listen(port);

app.use(express.static('public'));

console.log(`socket running at ${port}`);

let socket = require('socket.io');
let io = socket(server);
io.sockets.on('connection', (socket) => {
    console.log(`new connection ' ${socket.id}`);
    socket.on('mouse', (data) => {
        socket.broadcast.emit('mouse', data);
        console.log(data);
    });
});
*/
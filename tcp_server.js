'use strict';

const net = require('net');
const port = 3000;

const server = net.createServer(socket => {
    socket.setEncoding('utf8');

    socket.on('close', () => {
        console.log('Closing connection');
    });

    socket.on('data', chunk => {
        console.log(chunk);

        // Acknowledge that we received the data
        socket.write('Got it');
        socket.pipe(socket);
    });
});

server.on('listening', () => {
    console.log('Listening at port ' + port);
});

server.on('connection', socket => {
    console.log('Connected to ' + socket.remoteAddress);
});

server.listen(port, '127.0.0.1');

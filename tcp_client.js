'use strict';

const net = require('net');
const client = new net.Socket();

client.connect(3000, '127.0.0.1', () => {
    console.log('Connected');
    client.write('Can you hear me now?');
});

client.on('data', data => {
    console.log('Recieved: ' + data);
    client.end();
});

client.on('close', () => {
    console.log('Connection closed');
});

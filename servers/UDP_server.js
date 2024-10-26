const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
    console.log(`error:\n${err.stack}`);
    server.close();
});

server.on('message', (msg, rinfo) => {
    console.log(`got a message from ${rinfo.address}:${rinfo.port}: ${msg}`)
});

server.on('listening', () => {
    const address = server.address();
    console.log(`listening ${address.address}:${address.port}`);
});

server.bind(8082);
const commandDelays = require('./commandDelays');
const dgram = require('dgram');
// const wait = require('waait'); 


const PORT = 8889;
const HOST = '192.168.10.1';

const server = dgram.createSocket('udp4');
server.bind(PORT);

server.on('message', message => {
    console.log(`${message}`);
});

function handleError(err){
    err ? console.log("Error", err): null;
}

const commands = ['command', 'battery?', 'takeoff','land'];

let i = 0;

server.send('command',0,7, PORT, HOST,handleError);
server.send('battery?',0,8, PORT, HOST,handleError);


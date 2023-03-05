const express = require('express');

const cookieParser = require('cookie-parser');
const debug = require('debug')('rocketchat-app');
const logger = require('morgan');
const http = require('http');
require('dotenv').config();

const indexRouter = require('./controllers/indexController');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const clients = new Set();
const userNames = new Set();
app.use('/api/v1', indexRouter);

app.set('port', process.env.PORT);
const server = http.createServer(app);

const WebSocket = require('ws');
const serverW = new WebSocket.Server({ port: 5200 });

server.listen(process.env.PORT);
server.on('error', (error)=>{

});
function broadcast(message) {
    const json = JSON.stringify(message);
    console.log('Broadcasting: ' + json);
    clients.forEach((client) => {
        console.log('xxxxBroadcasting: ' + json);
        client.send(json);
    });
}
serverW.on('connection', (socket) => {
    console.log('Client connected' );
    clients.add(socket); // Add the client to the list of connected clients
    // Send the list of connected clients to all clients
    const clientList = Array.from(clients).map((client) => {
        return client.user || 'Anonymous';
    });
    
  //  broadcast({ type: 'userList', data: clientList });
    
    socket.on('message', (data) => {
        data = JSON.parse(data);
        console.log(`Received message: ${data}`);
      
        console.log(`Received message: ${data.data}`);
        userNames.add(data.data);
        console.log(`Received message userNames : ` ,Array.from(userNames));
        // Echo the message back to the client
       // socket.send(data);
        broadcast({ type: 'userList', data: Array.from(userNames )});
       
    });
    
    socket.on('close', () => {
        console.log('Client disconnected');
        
        // Remove the client from the list of connected clients
        clients.delete(socket);
        
        // Send the updated list of connected clients to all clients
        const clientList = Array.from(clients).map((client) => {
            return client.user || 'Anonymous';
        });
        broadcast({ type: 'userList', data: clientList });
    });
    
    
    
    
    
});

let connectionSet = [];
// io.listen(process.env.WS_PORT);

server.on('listening', ()=>{
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
});
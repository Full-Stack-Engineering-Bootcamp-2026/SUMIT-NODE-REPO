import requestHandler from './route.js';
import http from 'http';

// const http = require('http');

const server = http.createServer(requestHandler);

server.listen(3000,()=>{
    console.log("server running on port 3000")
})
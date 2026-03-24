import requestHandler from './route.js';
import http from 'http';

// const http = require('http');

const server = http.createServer(requestHandler);

server.listen(3000,()=>{
    console.log(`server is listening on 3000`,)
});

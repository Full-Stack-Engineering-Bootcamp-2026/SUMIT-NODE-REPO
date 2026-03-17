const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(` <h1>Name: Sumit Haverikar</h1>
<p>Today's Date: ${new Date().toLocaleString()}</p>`);
});

server.listen(3100, () => {
    console.log(`Server is running on http://localhost:${3100}`);
});
import fs from 'fs';

const requestHandler = ((req, res) => {
    const url = req.url;
    console.log(url);

    const method = req.method;
    if (url === '/' && method === 'GET') {
        res.write('<html>');
        res.write('<head><title>Enter name and message</title></head>');
        res.write('<body><form action="/submit" method ="POST" >')
        res.write(' <input type="text" name="name" placeholder="name">');
        res.write('  <input type="text" name="message" placeholder="message">')
        res.write('<button type="submit" >submit</button>')
        res.write('</form')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (url === '/submit' && method === 'POST') {
        let body = [];

        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const params = new URLSearchParams(parsedBody);

            const name = params.get('name');
            const message = params.get('message');

            console.log(name, message);

            fs.writeFileSync('log.txt', `Name: ${name}, Message: ${message}`);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });

    }

});

export default requestHandler;
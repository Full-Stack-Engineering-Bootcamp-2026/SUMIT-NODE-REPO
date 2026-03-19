const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);

    // home (GET req )
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Home Page</h1> <a href = '/about'> About</a> <br> <a href =`/time`>Time</a>");
    }


    // about 
    else if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About</h1><p>Sumit Haverikar </p>")
    }
    //rediredct
    else if (req.url === "/redirect") {
        res.writeHead(302, { Location: "/" });
        res.end();
    }

    //home (post request )
    else if (req.url === "/" && req.method === "POST") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Home page</h1> <a href = '/about'>About</a>");
    }

    // TIME - GET (JSON)
    else if (req.url === "/time" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            time: new Date().toLocaleString()
        }));
    }

    // 404 
    else {
        res.writeHead(404, { "content-Type": "text/html" });
        res.end("<h1> 404  Page Not Found </h1>")
    }
});

server.listen(3000, () => {
    console.log(`server running on http://localhost:${3000}`);
})
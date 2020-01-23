const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome to the beginning!</title><head>');
        res.write('<body><h1><center>Subscribe to be part of the Node.JS revolution!</center><h1></body>');
        res.write('<body><center><form action="/creat-users" method="POST">Username: <input type="text" name="Username"><br><input type="submit" value="Subscribe"></form></center></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Becoming a User!</title><head>');
        res.write('<body><h1><center><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></center><h1></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/creat-users'){
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message)   
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});
server.listen(3000);
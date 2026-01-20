const http = require('http');
const fs = require('fs');

const PORT = 8000;

const server = http.createServer((req, res) => {
    let filepath = '';

    switch (req.url) {
        case "/":
            filepath = './index.html';
            break;
        case "/about":
            filepath = './about.html';
            break;
        case "/product":
            filepath = './product.html';
            break;
        default:
            filepath = './notFound.html';
    }

    fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end("Server Error");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

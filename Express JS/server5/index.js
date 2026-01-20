const express = require("express");

const ports = [3001, 3002, 3003, 3004, 3005];
const servers = {};

for (let i = 0; i < ports.length; i++) {
    const app = express();
    const port = ports[i];

    app.get("/", (req, res) => {
        res.send(`Server running on port ${port}`);
    });

    app.get("/stop", (req, res) => {
        res.send(`Server on port ${port} stopped`);
        servers[port].close(() => {
            console.log(`Server on port ${port} closed`);
        });
    });

    const server = app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });

    servers[port] = server;
}

console.log("Servers running on ports 3001 to 3005");

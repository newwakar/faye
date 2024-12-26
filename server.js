// server.js
const express = require('express');
const http = require('http');
const Faye = require('faye');

const app = express();
const server = http.createServer(app);
const bayeux = new Faye.NodeAdapter({ mount: '/faye', timeout: 45 });

bayeux.attach(server);

app.get('/', (req, res) => {
    res.send('Faye server is running!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

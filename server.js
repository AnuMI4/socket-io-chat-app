const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: {origin: "*" }});
const path = require('path');
const port = 3000;

server.listen(port, () => {
    console.log(`Server started at port ${port}`);
});

app.use('/styles', express.static('styles'));
app.use('/scripts', express.static('scripts'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

io.on('connection', (socket) => {
    socket.on('message', (data) => {
        io.emit('message', data);
    });
});

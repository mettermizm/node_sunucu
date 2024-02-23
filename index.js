const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
// IP adresinizi burada belirtin
const wss = new WebSocket.Server({ server, host: '192.168.0.119', port: 4000 });

app.get('/', (req, res) => {
    res.send('Merhaba, Express.js ile basit bir web sitesine hoş geldiniz!');
});

wss.on('connection', (ws) => {
    console.log('Yeni bir WebSocket bağlantısı kuruldu.');

    ws.on('message', (message) => {
        console.log('Alınan mesaj: %s', message);
        ws.send(`Gelen mesajı aldım: ${message}`);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Sunucu ${PORT} numaralı portta çalışıyor.`);
});

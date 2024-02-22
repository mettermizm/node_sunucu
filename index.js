// index.js

// Express modülünü projemize ekliyoruz
const express = require('express');

// Express uygulamasını oluşturuyoruz
const app = express();

// Ana sayfa için bir route tanımlıyoruz
app.get('/', (req, res) => {
    res.send('Merhaba, Express.js ile basit bir web sitesine hoş geldiniz!');
});

// Sunucuyu belirli bir portta başlatıyoruz
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} numaralı portta çalışıyor.`);
});

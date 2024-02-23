const WebSocket = require('ws');

// Sunucunuzun IP adresi ve portunu buraya girin
const ws = new WebSocket('ws://192.168.0.119:3000');

// Bağlantı kurulduğunda
ws.on('open', function open() {
  console.log('Bağlantı başarılı.');

  // Sunucuya bir mesaj gönder
  ws.send('Merhaba, WebSocket sunucusu!');
});

// Mesaj alındığında
ws.on('message', function incoming(data) {
  console.log('Sunucudan mesaj alındı:', data);
});

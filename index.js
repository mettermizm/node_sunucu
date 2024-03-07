const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// Hakkında sayfası
app.get('/about', (req, res) => {
  res.send('Hakkında sayfası');
});

const json = {
  "mesaj": {
    "baslik" : "Hoşgeldiniz",
    "content" : "Bugün nasılsınız"
  }
};

// istek sayfası
app.get('/istek', (req, res) => {
  res.json(json);
});

const PORT = process.env.PORT || 5000;
const IP_ADDRESS = '192.168.0.119'; // IP adresi
app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server is running on http://${IP_ADDRESS}:${PORT}`);
});




// // index.js

// const express = require('express');
// const app = express();
// const port = 3000;

// // Ana sayfa
// app.get('/', (req, res) => {
//   res.send('Ana sayfa - Merhaba Dünya!');
// });

// // Hakkında sayfası
// app.get('/about', (req, res) => {
//   res.send('Hakkında sayfası');
// });

// // İletişim sayfası
// app.get('/contact', (req, res) => {
//   res.send('İletişim sayfası');
// });

// // Sunucuyu başlatma
// app.listen(port, () => {
//   console.log(`Sunucu http://localhost:${port} üzerinde çalışıyor`);
// });




// const puppeteer = require('puppeteer');

// (async () => {
//   // Tarayıcıyı başlat ve boş bir sayfa aç
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // WhatsApp Web'e git
//   await page.goto('https://web.whatsapp.com');

//   // Sohbet listesinden belirli bir sohbete gidin (örneğin, bir kişi veya grup sohbeti)
//   // Not: Bu adımı manuel olarak gerçekleştirmeniz gerekebilir
//   // await page.click('belirli bir sohbetin CSS seçicisi'); // Burada belirli bir sohbetin CSS seçicisini eklemeniz gerekecek

//   // Mesaj gönderme alanını bulun ve mesajı gönderin
//   const messageInputSelector = '.selectable-text';
//   await page.waitForSelector(messageInputSelector);
//   await page.type(messageInputSelector, 'Merhaba, bu bir test mesajıdır. Mehmet Fidan bu mesajı yazılım ile göndermiştir ile gönderilmiştir.');
//   await page.keyboard.press('Enter');

//   await browser.close();
// })();



// //https://media.fadb6-1.fna.whatsapp.net/mms/image/tLb9zjZ60fQchK5sgncsoQP2YlVxlH2R-8MAKMy3dBs=?token=tLb9zjZ60fQchK5sgncsoQP2YlVxlH2R-8MAKMy3dBs%3D&d_md=L3YvdDYyLjMxMTExLTI0LzM3ODA4ODc0OV85MTczNTQ5ODk3OTc2NTlfNzI4OTU3NjE0ODcxMTk5NTgxX24uZW5j&auth=Ac30fARM-H8I0Ai6VZlvjh0bTKp1PwRej-2URrA9J7z2Xg

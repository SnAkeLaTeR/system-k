const mineflayer = require('mineflayer');
const http = require('http');

// 1. HTTP server pro spokojenost Renderu (otevře port)
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('SystemBot24_7 is running!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`HTTP server bezi na portu ${PORT}`);
});

// 2. Logika Minecraft bota s automatickým opakováním připojení
function createBot() {
  console.log('Pripojuji bota k Aternosu...');
  
  const bot = mineflayer.createBot({
    host: 'lilium.aternos.me',
    port: 34731,
    username: 'SystemBot24_7',
    version: false
  });

  bot.on('login', () => {
    console.log('Bot SystemBot24_7 je uspesne prihlasen na serveru!');
  });

  bot.on('error', (err) => {
    console.log('Chyba bota:', err.message);
  });

  bot.on('end', () => {
    console.log('Bot byl odpojen. Zkousim znovu za 10 sekund...');
    setTimeout(createBot, 10000);
  });
}

createBot();

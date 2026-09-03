const mineflayer = require('mineflayer');
const http = require('http');

// 1. HTTP Server pro Render (aby služba nespadla)
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('SystemBot24_7 is running!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`HTTP server bezi na portu ${PORT}`);
});

// 2. Samotný Minecraft bot
function createBot() {
  console.log('Pripojuji bota k Aternosu...');

  const bot = mineflayer.createBot({
    host: 'pleco.aternos.host',
    port: 34731,
    username: 'SystemBot24_7',
    auth: 'offline',
    version: false
  });

  bot.on('login', () => {
    console.log('>>> Bot SystemBot24_7 se UŠPĚŠNĚ PRIHLASIL na server! <<<');
  });

  bot.on('error', (err) => {
    console.log('Chyba bota:', err.message);
  });

  bot.on('end', () => {
    console.log('Bot odpojen. Zkousim znova za 10 sekund...');
    setTimeout(createBot, 10000);
  });
}

createBot();

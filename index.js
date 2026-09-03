const mineflayer = require('mineflayer');
const http = require('http');

// 1. HTTP server pro Render (udrží službu aktivní)
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('SystemBot24_7 is running!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`HTTP server bezi na portu ${PORT}`);
});

// 2. Připojení bota přes dynamickou IP
function createBot() {
  console.log('Pripojuji bota k Aternosu pres dynamickou IP...');

  const bot = mineflayer.createBot({
    host: 'pleco.aternos.host',
    port: 34731,
    username: 'SystemBot24_7',
    auth: 'offline',
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

createBot();

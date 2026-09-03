const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'lilium.aternos.me',
    port: 34731,
    username: 'SystemBot24_7',
    version: false
  });

  bot.on('spawn', () => {
    console.log('Bot SystemBot24_7 je uspešne na serveru!');
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);
  });

  bot.on('end', () => {
    console.log('Bot odpojen, zkousim se znovu pripojit...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => console.log('Chyba:', err));
}

createBot();

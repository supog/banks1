const Discord = require('discord.js');
const bot = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (messag.content === 'ping') {
        message.reply('pong');
    }
});


bot.login('NDgzNDk0MDk1NTM3NTY5ODAz.DmZIuQ.IqlKkLJh3bXGbjd_m1N3ZoXAWDc');

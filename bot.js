const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
    console.log("I am ready!");
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});


client.login(token).catch(err => console.log(err));

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTM5OTI1ODk2MzgwMDIyNzg0.XMYC5A.DyZPqXY-WHelxOkURlx_RlTSBhI');

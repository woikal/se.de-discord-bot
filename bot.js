const discord = require('discord.js');
const protocol = require('http');
const { prefix, token } = require('./config.json');

const client = new discord.Client();

client.once('ready', () => {
    console.log('Bot ready!');
})

client.on('message', msg => {
    getCommand(msg);
})

client.login(token);

function getCommand(msg) {
    if (!msg.content.startsWith(prefix)) return;

    let cmd = msg.content.substr(1).split(' ');
    if (cmd.lenght > 0) {
        switch (cmd[0]) {
            case 'help': msg.channel.send('This Bot won\'t help you.. not a tiny little bit. At all!');
                break;
            default: msg.channel.send('Unknown command!');
                break;
        }
    }
}
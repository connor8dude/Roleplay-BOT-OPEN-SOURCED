//If you are looking to just take the code, go ahead.
//However, the code will not work like this. I made it, so you have to actually code it to work. I am not going to spoonfeed you.
//I do not give support.

//Varables
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, ActivityType, GatewayIntentBits, ThreadChannel } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ 
  intents: [GatewayIntentBits.Guilds],
  allowedMentions: { parse: ["everyone"] }
});
//Main
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
}

//Client Login
client.login(token);

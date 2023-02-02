//UKRRP Management - 2022


const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('credits')
        .setDescription('Credits, for everyone who has coded the bot.'),
    async execute(interaction) { 
         const embed = new EmbedBuilder()
            .setTitle('Bot Credits')
            .setDescription(`\n\n\n\n\n\n`)
  
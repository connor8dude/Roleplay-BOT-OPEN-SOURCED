//UKRRP Management - 2022


const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('crashed')
        .setDescription('Management will use this command, if the server crashes.'),
    async execute(interaction) { 
         const embed = new EmbedBuilder()
            .setTitle('Server Crashed!')
            .setDescription(`\n\n\n\n\n\n`)
            .addFields(

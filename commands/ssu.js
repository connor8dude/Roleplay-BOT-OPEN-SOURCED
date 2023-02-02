

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ssd')
        .setDescription('When we require a SSD, run this!'),
    async execute(interaction) { 
         const embed = new EmbedBuilder()
            .setTitle('Server Shut Down!')
            .setDescription(`\n\n\n\n\n\n`)
            .addFields(
            
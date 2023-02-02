//UKRRP Management - 2022


const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('low')
        .setDescription('.'),
    async execute(interaction) { 
         const embed = new EmbedBuilder()
            .setTitle('Server Low!')
            .setDescription(`\n\n\n\n\n\n`)
            .addFields(
     
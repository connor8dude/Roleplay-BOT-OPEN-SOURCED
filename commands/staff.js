//UKRRP Management - 2o22


const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('staff')
        .setDescription('Run this command, if you require more staff!'),
    async execute(interaction) { 
         const embed = new EmbedBuilder()
            .setTitle('Staff Request!')
            .setDescription(`\n\n\n\n\n\n`)
            .addFields(
     
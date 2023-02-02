//UKRRP Management - 2022

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ssuvote')
        .setDescription('Run this command, if you want to vote for a SSU!'),
    async execute(interaction) { 
         const embed = new EmbedBuilder()
            .setTitle('Vote for a Session')
            .setDescription(`\n\n\n\n\n\n`)
            .addFields(

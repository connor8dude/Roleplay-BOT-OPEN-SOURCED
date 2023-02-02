const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ssd')
        .setDescription('When we require a SSD, run this!'),
    async execute(interaction) { 
        if (!interaction.member.roles.cache.some(role => role.name === '➦Bot Perms')) return;
         const embed = new EmbedBuilder()
            .setTitle('Server Shut Down!')
            .setDescription(`\n\n\n\n\n\n`)
            .addFields(

                
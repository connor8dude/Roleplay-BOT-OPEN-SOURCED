const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Replies with whatever you want to make me say.')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The text you\'d like me to say.')
                .setRequired(true)),
    async execute(interaction) {

        return interaction.reply(text);
    }
};


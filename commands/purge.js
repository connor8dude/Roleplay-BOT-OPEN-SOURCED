//UKRRP Management - 2022



const {SlashCommandBuilder, CommandInteraction, PermissionFlagsBits, EmbedBuilder, discordSort} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("purge")
    .setDescription("You can purge 99 messages or more!")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .addIntegerOption(option =>
        option.setName('amount')
        .setDescription('Amount of messages you want to purge')
        .setMinValue(1)
        .setMaxValue(200)
        .setRequired(true)
        )
    .addUserOption(option =>
        option.setName('target')
        .setDescription('Choose a selected member, to purge there messages.')
        .setRequired(false)
        ),

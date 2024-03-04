const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("poll")
    .setDescription('Erstellt eine Umfrage'),
}
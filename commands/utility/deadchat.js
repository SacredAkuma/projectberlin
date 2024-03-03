const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('deadchat')
    .setDescription('Ping die Deadchat Rolle'),

    async execute(interaction){
            interaction.reply("Pong")
    }
}
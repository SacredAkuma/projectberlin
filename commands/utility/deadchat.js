const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('deadchat')
    .setDescription('Ping die Deadchat Rolle')

    .setDMPermission(false),

    async execute(interaction){
            interaction.reply('Reply with <@23ß59026325>')
    }
}
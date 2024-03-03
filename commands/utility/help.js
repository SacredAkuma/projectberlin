const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Schickt eine Übersicht der Funktionen'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Bedienungsanleitung')
            .setDescription('Project: Berlin Anleitung')
            .setColor([173, 29, 29])
            .setFooter({text: 'Project: Sarcadia x Project: Berlin ©️ 2024'});

            await interaction.reply({
                embeds: [embed],
                ephemeral: true
            })
    }
}
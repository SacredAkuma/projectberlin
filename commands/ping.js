const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with "Pong"'),

    async execute(interaction) {
            const embed = new EmbedBuilder()
            .setTitle('Ping')
            .setDescription(`Pong`);

            await interaction.reply({
                embeds:[embed]
            })

    }
}
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'guildMemberAdd',
    async execute(member) {
        const welcomeRole = await member.guild.roles.cache.find(role => role.id === '1208086742591340584');
        await member.roles.add(welcomeRole);
        const welcomeRole2 = await member.guild.roles.cache.find(role => role.id === '1208086765404164138');
        await member.roles.add(welcomeRole2);

        const welcomeChannel = await member.guild.channels.cache.find(channel => channel.id === '851458323214630978');
        const embed = new EmbedBuilder()
            .setColor([173, 29, 29])
            .setFooter({text: 'Project: Sarcadia x Project: Berlin ©️ 2024'})
            .setDescription(`${member.user} ist gerade dem Server beigetreten`)
            .setAuthor({name: `${member.user}`, /*iconURL: `attachment://${member.avatar}`*/});
            await welcomeChannel.fetch();
        welcomeChannel.send({
            embeds: [embed],
        });
    }
}
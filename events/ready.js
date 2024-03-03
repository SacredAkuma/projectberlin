module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`Der Bot ${client.user.tag} ist nun online`);
    }
}
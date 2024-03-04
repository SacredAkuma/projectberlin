const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Guild = sequelize.define('guild', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    welcomeChannelId: {
        type: Sequelize.STRING,
        allowedNull: true
    },
    welcomeRoleId: {
        type: Sequelize.STRING,
        allowedNull: true
    }
});

module.exports = Guild;
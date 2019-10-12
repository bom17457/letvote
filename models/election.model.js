const Sequelize = require('sequelize')
const db = require('./')
const elections = db.define('election', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    topic: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    displaytext: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'เลือก'
    },
    start_register_datetime: {
        type: Sequelize.DATE,
        allowNull: false,                      
    },
    end_register_datetime: {
        type: Sequelize.DATE,
        allowNull: false
    },
    start_vote_datetime: {
        type: Sequelize.DATE,
        allowNull: false
    },
    end_vote_datetime: {
        type: Sequelize.DATE,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    create_datetime: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    user_id:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = elections
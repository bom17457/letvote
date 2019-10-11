const Sequelize = require('sequelize')
const db = require('./')

const users = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    fname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    create_datetime: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = users
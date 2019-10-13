const Sequelize = require('sequelize')
const config = require('../config.json')
const db = new Sequelize(config.db.database, config.db.username, config.db.password, {
    dialect: 'mysql',
    host: config.db.host,
    timezone: config.db.timezone,
    define: {
        timestamps: false,
        freezeTableName: true
    },
    query: {
        raw: true
    },
    logging: console.log
})

db.authenticate()
    .then(function () {
        console.log('Connection has been success')
    })
    .catch(function () {
        console.log('connection fail')
    })
    .finally(function () {
        //db.close()
    })

module.exports = db
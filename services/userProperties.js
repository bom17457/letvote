let users = require('../models/user.model')
let Sequelize = require('sequelize')
let Op = Sequelize.Op
module.exports = {
    properties: async function (id) {
        let userdetail = await users.findAll({ where: { id: id } })
        if (userdetail.length == 0) throw 'not found'
        return userdetail[0]
    },
    searchUser: async function (id, fullname) {
        let userdetail = await users.findAll(
            {
                where: {
                    [Op.or]: [Sequelize.where(Sequelize.fn("concat", Sequelize.col("fname"), " ", Sequelize.col("lname")), {
                        [Op.like]: `%${fullname}%`
                    }), 
                    { 
                        id: id 
                    }]
                }
            })
        
        if (userdetail.length == 0) throw 'not found'

        return userdetail
    }
}
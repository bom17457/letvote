let db = require('../models')
let Op = db.Sequelize.Op
module.exports = {
    properties: async function (id) {
        let userdetail = await db.users.findOne({ where: { id: id } })        
        if (userdetail == null) throw 'not found'        
        return userdetail
    },
    searchUser: async function (id, fullname) {
        let userdetail = await db.users.findAll(
            {
                where: {
                    [Op.or]: [db.Sequelize.fn("concat", db.Sequelize.col("fname"), " ", db.Sequelize.col("lname"), {
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
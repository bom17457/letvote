const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports.hash = async function (paintextPWD) {
    let salt = await bcrypt.genSalt(saltRounds)
    let hash = await bcrypt.hash(paintextPWD, salt)
    return hash
}


module.exports.matchPassword = async function (paintextPWD, hash) {
    return await bcrypt.compare(paintextPWD, hash)
}
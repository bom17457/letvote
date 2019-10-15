module.exports = function (roles) {
    return function (req, res, next) {
        const { role } = req.authInfo
        if (roles.includes(role)) {
            next()
        } else {
            return res.sendStatus(401)
        }
    }
}
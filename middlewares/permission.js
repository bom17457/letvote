this.roles = []

function auth(req, res, next){
    const {role} = req.authInfo    
    if(this.roles.includes(role)){        
        next()
    }else{
        return res.sendStatus(401)
    }
}


module.exports = function(roles){
    this.roles = roles
    return auth
}
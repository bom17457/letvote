let db = require('./db')

module.exports.login = function(token, id){
    insert(token, 'login', id)
}

module.exports.logout = function(){
    insert(token, 'logout', id)
}

module.exports.lastAction = function(token){
    
}

function insert(token, status, id){    
    let sql = `INSERT INTO login (token, status, student_id) values ('${token}', '${status}', '${id}')`
    db.query(sql)
}
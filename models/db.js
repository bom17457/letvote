var mysql = require('mysql')

var connection = mysql.createConnection({
    host: '18.136.212.248',
    user: 'root',
    password: 'abcd1234',
    database: 'letvote'
})

connection.connect();

module.exports.query = function (query) {
    return new Promise(function (resolve, reject) {
        connection.query(query, function(error, results, fields){
            if(error) reject(error, error.code)
            resolve(results, fields)
        })
    })
}

module.exports.connection = connection
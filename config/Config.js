const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1n1sayap',
    database: 'dbapi'
})

con.connect((err) => {
    if(err) throw err
    console.log('Database Connected');
})

module.exports = con
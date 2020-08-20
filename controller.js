'use strict'

const response = require('./res')
const connection = require('./config/Config')

// Default index
exports.index = function (req, res) {
    response.ok('Rest Api Mysql-Express', res)
}

// Get All User
exports.userAll = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (err, rows, fields) {
        if (err) {
            connection.log(err)
        } else {
            response.ok(rows, res)
        }
    })
}

// Get One User
exports.userOne = async function (req, res) {
    let id = req.params.id
    await connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa=?', [id], function (err, rows, fields) {
        if (err) {
            connection.log(err)
        } else {
            response.ok(rows, res)
        }
    })
}

// Post add User
exports.addUser = async function(req, res){
    let {nim, nama, jurusan} = req.body
    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) values(?,?,?)', [nim, nama, jurusan], function(err, rows, fields){
        if(err){
            connection.log(err)
        }else {
            response.ok('Succes add User', res)
        }
    })
}
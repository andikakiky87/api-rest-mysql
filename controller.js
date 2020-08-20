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
exports.userOne = function (req, res) {
    let id = req.params.id
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa=?', [id], function (err, rows, fields) {
        if (err) {
            connection.log(err)
        } else {
            response.ok(rows, res)
        }
    })
}

// Post add User
exports.addUser = function(req, res){
    let {nim, nama, jurusan} = req.body

    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) values(?,?,?)', [nim, nama, jurusan], function(err, rows, fields){
        if(err){
            connection.log(err)
        }else {
            response.ok('Succes add User', res)
        }
    })
}

// Update user
exports.updateUser = function(req, res) {
    let id = req.body.id_mahasiswa
    let {nim, nama, jurusan} = req.body
    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim,nama,jurusan,id], function(err, rows, fields) {
        if(err) {
            connection.log(err)
        }else {
            response.ok('User updated', res)
        }
    })
}

// Delete User
exports.userDelete = function(req, res) {
    let id = req.params.id
    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?', [id], function(err, rows, fields) {
        if(err){
            connection.log(err)
        }else {
            response.ok('User deleted', res)
        }
    })
}
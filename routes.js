'use strict'

module.exports = function(app){
    const jsonku = require('./controller')
    app.route('/')
        .get(jsonku.index)
    app.route('/users')
        .get(jsonku.userAll)
    app.route('/users/:id')
        .get(jsonku.userOne)
    app.route('/users/add')
        .post(jsonku.addUser)
}
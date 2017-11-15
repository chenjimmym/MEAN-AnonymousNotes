var mongoose = require('mongoose');
var Note = mongoose.model('Note');

var process = require('../controllers/process.js');

module.exports = function(app){
    app.get('/show', function(req,res){
        process.show(req, res);
    })

    app.get('/add/:message', function(req, res){
        process.addNote(req, res);
    })
}
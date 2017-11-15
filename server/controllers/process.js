var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    show: function(req, res){
        Note.find({}, function (err, notes){
            console.log(notes);
            res.json(notes);
        })
    },
    addNote: function(req, res) {
        console.log(req.params.message);
        var note = new Note({message: req.params.message});
        note.save(function(err){
            if (err){
                console.log(err);
            } else {
                console.log('Note Added');
                res.redirect('/');
            }
        })
    }
}
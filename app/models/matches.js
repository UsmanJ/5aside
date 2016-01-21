var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Match = new Schema({
    date: String,
    time: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('matches', Match);

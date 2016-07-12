var mongoose = require('mongoose');

var lastUpdated = new mongoose.Schema({
   username:String,
   InsertedDate:Array,
   Time:String
});

mongoose.model('latestupdated',lastUpdated);
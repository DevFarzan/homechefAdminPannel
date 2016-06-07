// config/database.js

module.exports = {
// looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
    'localDB' : 'mongodb://localhost/homechef' ,
    'EvenNodeDB': 'mongodb://944745cb5bb672158048fa69ca95586e:944745cb5bb672158048fa69ca95586e@eu-1.evennode.com:27017/944745cb5bb672158048fa69ca95586e'

};
/*module.exports = {
 // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
 /!*'localDB' : 'mongodb://localhost/homechef' ,*!/
 'EvenNodeDB': 'mongodb://Farzan:admin@ds043012.mongolab.com:43012/chatappdb'

 }*/
/*
 var mongoose = require('mongoose');
 mongoose.connect('mongodb://Farzan:admin@ds043012.mongolab.com:43012/chatappdb');

 var db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function callback () {
 console.log("db connected")
 });*/

//mongodb://kaylaw1113:lanishia1@ds229465.mlab.com:29465/testdatabase

var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var connectionstring = "mongodb://kaylaw1113:lanishia1@ds229465.mlab.com:29465/testdatabase";

mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.Promise = global.Promise;


var studentSchema = new mongoose.Schema({
    buffID: String,
    firstName: String,
    lastName: String
});


var Student = mongoose.model('Student', studentSchema);
router.get('/add-random-student', function(req, res, next){
    
    var rand = new Student(
        { 
            buffID: '0123456',
            firstName: 'Random',
            lastName: 'Student'
        }
    );
    rand.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('The student is saved to the db');
      }
    });
});
    



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/greeting', function(req, res, next){
    res.send("Hello, I greet you!");
});


module.exports = router;

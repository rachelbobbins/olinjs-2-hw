
/*
 * GET home page.
 */
var mongoose = require('mongoose');
var Cat = mongoose.model('Cat');

exports.index = function(req, res){
  var message = req.flash('info');
  var error = req.flash('error')


  var cats = Cat.find(function(err, cats){
    if(err) {
      console.log(err);
    }
    console.log(cats);
    res.render('index', { title: 'Express', 
      message: message, error: error, cats: cats });    
  });
  
};
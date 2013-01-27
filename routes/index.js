
/*
 * GET home page.
 */
var mongoose = require('mongoose');
var Cat = mongoose.model('Cat');

exports.index = function(req, res){
  var message = req.flash('info')[0];
  var error = req.flash('error')[0];
  var warning = req.flash('warning')[0];

  var cats = Cat.find(function(err, cats){
    if(err) {
      console.log(err);
    }
    res.render('index', { title: 'All cats, unsorted', 
      message: message, error: error, warning: warning,
      cats: cats });    
  });
  
};
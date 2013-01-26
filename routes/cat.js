var mongoose = require('mongoose');
var Cat = mongoose.model('Cat');


var names = new Array('Abe', 'Bob', 'Cleo', 'Dave', 'Eun Kim', 'Fabio');
var colors = new Array(
  new Array('brown', 'black', 'white'),
  new Array('beige'),
  new Array('gray, green') 
)

exports.by_age = function(req, res){
  Cat.find().sort('age').exec(function(err, cats){
     res.render('cats/by_age', {cats: cats});
  });
}

exports.with_color = function(req, res){
  var color = req.params.color;
  Cat.find({colors: { $in: [color]}}).sort('age').exec(function(err, cats){
    res.render('cats/with_color', {cats: cats, color: color});
  });
}

exports.create = function(req, res){
  function random_choice(array) {
    var len = array.length;
    return array[Math.floor(Math.random() * len)];
  }

  new Cat({
    name: random_choice(names),
    age: Math.floor(Math.random() * 15),
    colors: random_choice(colors)
  }).save(function(err, cat, count){
    if (err) {
      console.log("couldn't save new cat");
    } else{
      console.log("Created a cat", cat);
      msg = "Created " + cat.name + ", age " + cat.age;
      req.flash('info', msg);
      res.redirect('/');
    }
  });
  
}
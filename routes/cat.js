var mongoose = require('mongoose');
var Cat = mongoose.model('Cat');

exports.list = function(req, res){
  Cat.find(function(err, cats){
    if(err) {
      console.log(err);
    }
    
    res.render('cats/list', {cats: cats});
  });
  
}

var names = new Array('Abe', 'Bob', 'Cleo', 'Dave', 'Eun Kim', 'Fabio');
var colors = new Array(
  new Array('brown', 'black', 'white'),
  new Array('beige'),
  new Array('gray, green') 
)

exports.by_age = function(req, res){
  Cat.find(function(err, cats){
    if (err){
      console.log(err);
    }

    cats.sort(function(c1, c2) {
      return c1.age - c2.age;
    });

    res.render('cats/list', {cats: cats});
  })
}

exports.create = function(req, res){
  function random_choice(array) {
    var len = array.length;
    var ans = array[Math.floor(Math.random() * len)];
    console.log(ans)
    return ans;
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
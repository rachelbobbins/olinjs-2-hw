var mongoose = require('mongoose');
var Cat = mongoose.model('Cat');

// exports.list = function(req, res){
//   res.send("respond with a resource");
// }

var names = new Array('Abe', 'Bob', 'Cleo', 'Dave', 'Eun Kim', 'Fabio');
var colors = new Array(
  new Array('brown', 'black', 'white'),
  new Array('beige'),
  new Array('gray, green') 
)



exports.create = function(req, res){
  function random_choice(array) {
    var len = array.length;
    var ans = array[Math.floor(Math.random() * len)];
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
      console.log("here", cat);
      msg = "Created " + cat.name + ", age " + cat.age;
      req.flash('info', msg);
      res.redirect('/');
    }
  });
  
}
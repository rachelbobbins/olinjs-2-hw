var mongoose = require('mongoose');

var catSchema = mongoose.Schema({
  name: String,
  colors: Array,
  age: Number
});

mongoose.model('Cat', catSchema);
mongoose.connect(process.env.MONGOLAB_URI || 'localhost');

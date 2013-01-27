var mongoose = require('mongoose');

var catSchema = mongoose.Schema({
  name: String,
  colors: [String],
  age: Number,
  created: {type: Date, default: Date.now}

});


mongoose.model('Cat', catSchema);
mongoose.connect(process.env.MONGOLAB_URI || 'localhost');

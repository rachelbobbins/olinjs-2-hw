
/*
 * GET home page.
 */

exports.index = function(req, res){
  var message = req.flash('info');
  res.render('index', { title: 'Express', message: message });
};
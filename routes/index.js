
/*
 * GET home page.
 */

exports.index = function(req, res){
  var message = req.flash('info');
  var error = req.flash('error')
  res.render('index', { title: 'Express', message: message, error: error });
};
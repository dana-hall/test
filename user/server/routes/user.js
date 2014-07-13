var express = require('express');

exports.routes = function (app) {
	  User  = require('../../server/models/user');

// Set routing prefix for api calls
var router = express.Router();
app.use('/user', router);

// ---- Routing with router -----------------------
//-------------------- USER --------------------
router.route('/create')
  .post(function(req, res){
  User.CreateDoc(req, function(err, success) {
	console.log("/create");
    if(err) throw err;
    else res.send(success);
  });
});

router.route('/read')
    .get( function(req, res) { 
	User.RetrieveAll(function(err, success) {
		console.log("/read");
		if(err) throw err;
		else res.send(success);
	});
});

router.route('/read/:id')
  .get(function(req, res) { 
  User.RetrieveById(req.params.id, function(err, success) {
	  console.log("/read/"+req.params.id);
    if(err) throw err;
    else res.send(success);
  });
});

router.route('/update')
  .post(function(req, res) {
  User.UpdateDoc(req, function(err, success) {
	  console.log("/update/"+req.params.id);
    if(err) throw err;
    else res.send(success);
  });
});

router.route('/delete')
  .post(function(req, res) { 
  User.DeleteDoc(req.body.id, function(err, success) {
	  console.log("/delete/"+req.params.id);
    if(err) throw err;
    else res.send(success);
  });
});

//router.get('/', function(req, res) { 
//  User.RetrieveAll(function(err, success) {
//    if(err) throw err;
//    else res.json({message: 'Welcome to our Router API'});
//  });
//});
};

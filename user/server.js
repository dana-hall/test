//server.js
var application_root = __dirname,
  express = require('express');

var app = express();

// Check for passed in port argument
port = process.argv[2] || 8090;

// Use the body-parser package in our application
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Loads index.html
app.use("/", //the URL throught which you want to access to you static content
	    express.static(__dirname) //where your static content is located in your filesystem
	);

// Database connection
var db = require('./config/db');
db.connect();

// Routing for REST Api
var router = require('./server/routes/user');
router.routes(app);

//======================= START SERVER ======================
app.listen(port); //the port you want to use
console.log('server is listening on port ' + port + '...');


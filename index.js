/**
 * Main file 
 * 
 * References:
 *      https://expressjs.com/en/4x/api.html
 * Git Helpok
 *      http://gitref.org/remotes/#fetch
 *      https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config
 */
var express = require('express')
var bodyParser = require('body-parser')

// Setup the Router
// For each resource follow the pattern for registring the resource API
// ADD NEW RESOURCE API UNDER THIS
var router = express.Router();
require('./api/v1/resource')(router);

// Create the express app
app = express();
// Setup the body parser
//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());//{type: '*/*'}));

// Setup the app to use the router
app.use(router);

// Start the listener
app.listen(3000);
console.log('Listening on 3000')




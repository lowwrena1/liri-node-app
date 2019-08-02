require("dotenv").config();
//allows reading for the keys file
var keys = require("./keys.js");
//access to spotify
var spotify = require('node-spotify-api');
var spotify = new spotify(keys.spotify);
// bands in town request
var moment = require('moment');
//axio stuff
var axios = require('axios');
//chalk intergration
var chalk = require ('chalk');
//concert-this command
//- spotify-this-song command
//- movie-this command
//- do-what-it-says command
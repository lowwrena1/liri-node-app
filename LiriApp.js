require("dotenv").config();
//allows reading for the keys file
var keys = require("./keys.js");
//access to spotify
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
//call function
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
// bands in town request
//var moment = require('moment');
//axio stuff
//var axios = require('axios');
//chalk intergration
//var chalk = require ('chalk');
//- concert-this command
 /*
function bandsInTown () {
    axios.get(querlyURL)
    .then(function(Res){
        console.log() //
        console.log() //name of venue
        console.log()// venue location
        console.log() //date of event (mm/dd/yyyy)
    })
} 
*/
//- spotify-this-song command


//- movie-this command


//- do-what-it-says command
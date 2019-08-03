require("dotenv").config();
//getting info from the keys.js file
var keys = require("./keys.js");

var fs=require ("fs");
//spotify info 
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var command = process.argv[2]; // in the number 2 spot on the terminal
var search = process.argv[3]; // in the number 3 spot on the terminal

//commands needed spotify-this song, movie-this, concert-this, do-what-this-says.
switch(command) {
    case "spotify-this-song":
        spotifySong();
        break;
    case "movie-this":
        movieURL = "http://www.omdbapi.com/?apikey=trilogy&t="+search+"&plot=short";
        movieThis();
        break;
    case "concert-this":
        concertURL = "https://rest.bandsintown.com/artists/"+search+"/events?app_id=codingbootcamp";
        concertThis();
        break;
    case "do-what-it-says":
        fs.readFile("random.txt", "utf8", (err, data) => {
            if(err) {
                console.log(err);
                return;
            };

            console.log(data);
            var dataRecord = data.split(",");
            search = dataRecord[1];

            switch (dataRecord[0]) {
                case "spotify-this-song":
                spotifySong();
                break;
            case "movie-this":
                movieURL = "http://www.omdbapi.com/?apikey=trilogy&t="+search+"&plot=short";
                movieThis();
                break;
            case "concert-this":
                concertURL = "https://rest.bandsintown.com/artists/"+search+"/events?app_id=codingbootcamp";
                concertThis();
                break;
                case "do-what-it-says": //no need for a function to be added because it's pulling from a file not a url
                        fs.readFile("random.txt", "utf8", (err, data) => {
                            if(err) {
                                console.log(err);
                                return;
            };
        });
        break;
};
        
});
    
};
//spotify call function
function spotifySong() {
spotify.search({ type: 'track', query: search, limit: 1}, function (err, results){
    if(err){
        console.log("error:" +err);
        return;
    }
    console.log(results);

});
};
 //movie info
function movieThis() {
    axios.get(movieURL).then(function(response) {
        console.log("\nMovie Title: " + response.data.Title);
        console.log("Year Released: " + response.data.Year);
        console.log("IMDB rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
        console.log("Country/Countries Shot In: " + response.data.Country);
        console.log("Languages: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.datad.Actors);
    });
};

//venue info
function concertThis() {
    axios.get(concertURL).then(function(response) {
        console.log("\nBand Playing: " + search);
        console.log("Venue Name: " + response.data[0].venue.name);
        console.log("Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
        console.log("Date: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
    });

};

     
 
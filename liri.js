require('dotenv').config();

var axios = require('axios');
var keys = require('./keys.js');

//var nodeArgs = process.argv;
var spotify = new Spotify(keys.spotify);
var bandsintown = new BandsInTown(keys.bandsInTown);
var omdb = new oMDB(keys.oMDB);

var cmdOne = process.argv[2];
var cmdTwo = process.argv[3];

if (cmdOne == concert-this) {
    //run Bands in Town
} else if (cmdOne == spotify-this-song) {
    //run spotify api
} else if (cmdOne == move-this) {
    //run OMDB
}

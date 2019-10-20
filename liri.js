//Set up node require modules & global variables 
require('dotenv').config();
var axios = require('Axios');
var moment = require('moment');
var keys = require('./keys.js');
var fs = require('fs');

//Set API keys to variables
var Spotify = require('node-spotify-api');
var bitKey = keys.bandsInTown;
var omdb = keys.omdb;

//New Spotify variable to pass secrets to Spotify API
//Returns a valid API key
var spotify = new Spotify(keys.spotify);


var cmdOne = process.argv[2];
var cmdTwo = process.argv[3];

if (cmdOne == concert-this) {
    //run Bands in Town
} else if (cmdOne == spotify-this-song) {
    //run spotify api
} else if (cmdOne == move-this) {
    //run OMDB
} 

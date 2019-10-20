//Set up node require modules & global variables 
require('dotenv').config();
var axios = require('axios');
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

//Take in command line arguments
function userInput() {
    var searchType = process.argv[2]
    var searchTerm = process.argv.slice(3).join('');
    whichSearch(searchType, searchTerm);
}

//Switch function to determine which API to search
function whichSearch(searchType, searchTerm) {
    switch (searchType) {
        case 'concert-this': {
            searchBIT(searchTerm);
        }
            break;
        case 'spotify-this-song': {
            searchSpotify(searchTerm);
        }
            break;
        case 'movie-this': {
            searchOMDB(searchTerm);
        }
            break;
        case 'do-what-it-says': {
            searchRandom(searchTerm);
        }
            break;
        default: {
            console.log('Please make a valid request');
        }
    }
}

//Functions for individual API searches

//Bands in Town Search
function searchBIT(searchTerm) {
    axios.get("https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=" + bitKey)

        .then(function(response) {
            response = response.data;

            for (var i = 0; i < response.length; i++) {
                console.log('Venue: ' + response[i].venue.name);
                console.log('Location: ' + response[i].venue.city);
                
                var dateFormat = moment(response[i].datetime, 'YYYY-MM-DD').format('MM/DD/YYYY');
                console.log('Date: ' + dateFormat);

                console.log('\x1b[35m','++++++++++++++++++++++++++++++++');
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}
//Spotify Search
// function searchSpotify(searchTerm)
// //OMDB Search
// function searchOMDB(searchTerm)
// //Random.txt Search
// function searchRandom(searchTerm)

userInput();
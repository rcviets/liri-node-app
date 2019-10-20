require('dotenv').config();

var axios = require('axios');
var keys = require('./keys.js');

var nodeArgs = process.argv;
var spotify = new Spotify(keys.spotify);
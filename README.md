# liri-node-app

## Project Goals

1. Creat a node application that takes in arguments and does something with them.

2. Use the following API's

    - Spotify API (spotify-this-song)
    - OMDB API (movie-this)
    - Bands In Town API (concert-this)

3. Search the listed API's and return the data to the console

4. Be as clean as possible with your code

## Command Line Usage

node liri.js spotify-this-song *Song Name*

![Image of Spotify](spotifyThis.PNG)

node liri.js concert-this *Band Name*

![Image of Bands In Town](concertThis.PNG)

node liri.js movie-this *Movie Name*

![Image of OMDB](movieThis.PNG)

node liri.js do-what-it-says (reads the random.txt file)

![Image of Read Text File](readTXT.PNG)

## .env File Setup

![Image of .env File](envFile.PNG)

SPOTIFY_ID=insert spotify id here

SPOTIFY_SECRET=insert spotify secret here

OMDB_KEY=insert omdb API key here

BIT_KEY=insert bands in town API key here
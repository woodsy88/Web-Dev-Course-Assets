var playlist = new Playlist();


//Create new Song objects
var hereComesTheSun = new Song("here comes the sun", "beatles", "2.34");
var walkingOnSunshine = new Song("walking on sunshine","The Beatles", "2:33");
var FartsMagee = new Song("farts on farts","AW","3:00");
var bouncebaby = new Song("Bounce Bounce", "Beyonce", "2:56");
var rideordie = new Song("Ride or Die", "Bad Boyz", "3:00");                         

//Add song objects to playlist
playlist.add(hereComesTheSun);

playlist.add(walkingOnSunshine);


playlist.add(FartsMagee);

playlist.add(bouncebaby);
playlist.add(rideordie);

//puts html on the page

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);





// use Javascript to select buttons on the page
var playButton = document.getElementById('play');

playButton.onclick = function(){
    
      playlist.play();
      playlist.renderInElement(playlistElement);

}

var nextButton = document.getElementById("next");

nextButton.onclick = function(){
    
        playlist.next();
        playlist.renderInElement(playlistElement);

}
    
var stopButton =  document.getElementById("stop");

stopButton.onclick = function(){
    
        playlist.stop();
        playlist.renderInElement(playlistElement);
}
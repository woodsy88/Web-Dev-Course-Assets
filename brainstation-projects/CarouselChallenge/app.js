var app = angular.module('carousel', []);

function CarouselCtrl() {
  this.images = [
    'http://imgur.com/9itd49u.png',
    'http://imgur.com/n19BXfZ.png',
    'http://imgur.com/VBwQmzA.png',
    'http://imgur.com/nawDxVv.png'
  ];

  this.image_counter = 0;

  this.next_btn = true;
  this.prev_btn = false;
  
}

/*TODO #1: register CarouselCtrl as a controller*/

app.controller("CarouselCtrl", CarouselCtrl);

/*TODO #4: clicking next should show the next image*/
CarouselCtrl.prototype.next = function() {
  
this.prev_btn = true;
this.image_counter++;

if(this.image_counter >= this.images.length-1){

	this.next_btn = false;
};


}

/*TODO #4: clicking previous should show the previous image*/
CarouselCtrl.prototype.previous = function() {
  
  this.next_btn = true;
  this.image_counter--;

//stops it from going backwards if the image is at the index of 0
  if(this.image_counter == 0) {

  	this.prev_btn = false;
  }


}


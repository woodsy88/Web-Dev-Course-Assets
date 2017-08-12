/*TODO #1: Add a dependency on the router module*/
var app = angular.module('coderMdb', ['ngRoute']);

app.config(function($routeProvider) {
  /*
  TODO #2:
  Configure the router to:
    -load movieList.html and use the MovieListCtrl when the url is '/home'
    -load movieDetails.html and use the MovieDetailsCtrl when the url is '/movie/:movieId'
  For any other url redirect the user to the home page.
  */


  $routeProvider
  .when('/home', {
  templateUrl: 'movieList.html',
  controller:  'MovieListCtrl'


  })

  .when('/movie/:movieId', {
  	templateUrl: 'movieDetails.html',
  	controller: 'MovieDetailsCtrl'


  })

  .otherwise ({
  	redirectTo: '/home'
  })

});
var app = angular.module('coderMdb', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/movieList.html',
      controller: 'MovieListCtrl as ctrl'
    })
    .when('/movie/:movieId', {
      templateUrl: 'partials/movieDetails.html',
      controller: 'MovieDetailsCtrl as ctrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
function MovieDetailsCtrl($routeParams, movieService) {
  this.movie = movieService.getMovie($routeParams.movieId);
}

angular.module('coderMdb').controller('MovieDetailsCtrl', MovieDetailsCtrl);
function MovieListCtrl(movieService, $location) {
  this.$location = $location;
  this.movies = movieService.getMovies();
  
  this.sortOptions = [
    {label: 'Title', sortField: 'Title', reverse: false},
    {label: 'Rating', sortField: "imdbRating", reverse: true}
  ]
  this.selectedSortOption = this.sortOptions[0];
  
  this.curPage = 0;
  this.moviesPerPage = 4;
}

MovieListCtrl.prototype.goToMovie = function(movie) {
  this.$location.path('movie/' + movie.imdbID);
}

MovieListCtrl.prototype.getNumPages = function() {
  return Math.ceil(this.movies.length/4);
}

angular.module('coderMdb').controller('MovieListCtrl', MovieListCtrl);
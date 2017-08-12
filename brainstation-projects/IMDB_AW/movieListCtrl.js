app.controller('MovieListCtrl', MovieListCtrl);

function MovieListCtrl() {
  /*TODO #3: Load all of the movies from the movieService*/
  
  this.sortOptions = [
    {label: 'Title', sortField: 'Title', reverse: false},
    {label: 'Rating', sortField: "imdbRating", reverse: true}
  ]
  
  this.curPage = 0;
  this.moviesPerPage = 4;
}
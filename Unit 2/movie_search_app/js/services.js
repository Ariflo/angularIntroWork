movieApp.service('moviesService', function() {

        var movieList = [];
        var addMovies = function(newObj) {
            movieList.push(newObj);
        };

        var resetList = function(){
            movieList =[];
        }

        var getMovies = function(){

            return movieList;
        };

        return {
          addMovies: addMovies,
          getMovies: getMovies,
          resetList: resetList
        };
});
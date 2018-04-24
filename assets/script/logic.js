// http://www.omdbapi.com/?apikey=10756EB3& http://www.omdbapi.com/?i=tt3896198&apikey=10756eb3


$(document).ready(function(){

  $("#submit").click(function() {
      $("#title").empty();
      $("#poster").empty();
      var movie = $("#term").val();
      $( "#buttons" ).removeClass( "hidden" )

      console.log(movie);

var URL = "http://www.omdbapi.com/?t=" + movie + "&detail=full&apikey=10756EB3";


var movies = [];

$.get(URL, function(response){
  console.log(response);
  $("#title").append('<h1>'+ response.Title +'</h1>')
$("#poster").append('<img src="' + response.Poster + '" alt="'+ response.Title +'" class="poster">')
$('#btn0').click(function() {
  $("#directorModalBody").empty();
  $("#directorModalBody").append('<h4><span class="subject">Directed by: </span>'+ response.Director +'</h4><h4><span class="subject">Written By: </span>'+ response.Writer +'</h4><h4><span class="subject">Starring: </span>'+ response.Actors +'</h4>');
        });
$('#btn1').click(function() {
          $("#plotModalBody").empty();
          $("#plotModalBody").append('<h4>'+ response.Plot + '</h4>');
                });
$('#btn2').click(function() {
          $("#ratingModalBody").empty();
          $("#ratingModalBody").append('<h4><span class="subject">IMDB: </span>'+ response.Ratings[0].Value + '</h4> <h4><span class="subject">Rotten Tomatoes: </span>'+ response.Ratings[1].Value + '</h4><h4><span class="subject">Metacritic: </span>'+ response.Ratings[2].Value + '</h4>');
                        });
$('#btn3').click(function() {
          $("#detailsModalBody").empty();
          $("#detailsModalBody").append('<h4><span class="subject">Rating: </span>' + response.Rated + '</h4> <h4><span class="subject">Runtime: </span>' + response.Runtime + '</h4> <h4><span class="subject">Studio: </span>' + response.Production + '</h4> <h4><span class="subject">Release Year: </span>' + response.Runtime + '</h4> <h4><span class="subject">Genre: </span>' + response.Genre + '</h4>');
                        });
      });

    });

});

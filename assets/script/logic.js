// http://www.omdbapi.com/?apikey=10756EB3&

$(document).ready(function(){

var movie = "batman";

var URL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=dc6zaTOxFJmzC&limit=10";


var movies = [];
$.get(URL, function(response){
  console.log(response);

$("#append").append('<img class="gif" src="' + response.data[0].images.original.url + '" alt=" + response.data[0].title + ">')
$('.btn0').click(function() {

alert(response.data[0].title);


        });


    });

});

// http://www.omdbapi.com/?apikey=10756EB3&

$(document).ready(function(){

var movie = "batman";

var URL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=dc6zaTOxFJmzC&limit=10";
var random = Math.random() * 9 + 1;
random = Math.floor(random);

var movies = [];
$.get(URL, function(response){
  console.log(response);

$("#append").append("<img src=" + response.data[random].images.original.url + " alt=" + response.data[0].title + ">")
$("#append").append("<h1>This gif is rated: " + response.data[random].rating + " </h1>")

});





});

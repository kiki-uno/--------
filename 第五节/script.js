function showTopic(){
 var x = document.getElementById("demo");
 x.style.fontSize = "25px";
 x.style.color = "red";
}

var movie = {
 title: "Captain Marvel",
 time: "2pm"
};
alert(movie.title);
movie.status = "unavailable";
console.log(movie);

var fruits = [ ];
for (i=1; i< 10 ; i++){
fruits[i] = prompt("Enter fruit");
}
alert("fruits contains " + fruits);

var movie2 = ["Avengers", "Captain Marvel", "Black Panther", "Spiderman"];
movie2.forEach(function(movie){
 alert(movie);
});

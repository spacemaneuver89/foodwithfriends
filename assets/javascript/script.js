//Initialize Firebase
var config = {
	apiKey: "AIzaSyB4BUUROtzg6jXYdIBiKqPnq5SlZhHQG7c",
	authDomain: "group-project-cf528.firebaseapp.com",
	databaseURL: "https://group-project-cf528.firebaseio.com",
	projectId: "group-project-cf528",
	storageBucket: "group-project-cf528.appspot.com",
	messagingSenderId: "6868547527"
};
firebase.initializeApp(config);

//We then set out a variable that will hold our databse and console logged a snapshat to test that we were connected
var dbRef = firebase.database().ref('/');
dbRef.on('value', snapshot => {
	console.log(snapshot.val());
});


//Here we set out the function that is the main thing that our side does
function searchFilmGenre() {
	//when you click on the search button. . .
	$("#findFilmBtn").on("click", function (event) {
		//prevent the page from reloading when you click the search button
		event.preventDefault();
		//get the value of the input in the search bar and put it in a variable
		var film = $("#filmInput").val();
		// get the film api going, and set out a variable for it
		var filmQuery = "https://www.omdbapi.com/?t=" + film + "&y=&plot=short&apikey=d1e460fb";
		console.log(filmQuery);
		//get the ajax call for the film api
		$.ajax({
			url: filmQuery,
			method: "GET"
		}).then(function (response) {
			//console lof the response to check
			console.log(response);

			//the next few lines of code take the genre from the api call and turn in into an array. We then ggrab the first item in the array
			var genreString = response.Genre;
			var genreArray = genreString.split(", ");
			console.log(genreArray);
			var firstGenreInArray = genreArray[0];
			console.log(firstGenreInArray);

			// From the api call, I also grabbed the film title, poster, and plot
			var filmTitle = response.Title;
			var poster = response.Poster;
			var movieGenre = firstGenreInArray;
			var plot = response.Plot;
			console.log(filmTitle, poster, movieGenre);

			// I then put this info into a jQuery html 
			$("#filmCard").html('<img class="card-img-top" src=' + poster + "alt='Card image cap' id='filmImage'> <div class='card-body'> <h5 class='card-title' id='filmTitle'> " + filmTitle + "</h5> <p class = 'card-text' id = 'filmText'>" + movieGenre + "</p> <p>" + plot + "</p>");

			// in this section, we went into the firebase databse, and we searched for the genre and then found the associated food that goes with the genre
			dbRef.orderByChild("genre").once("value").then(res => {
				console.log(res.val()["genre"][movieGenre]);
				var getFood = res.val()["genre"][movieGenre]

				// then I initiated the process to make the apil call for the food recipes
				var recipeQuery = "https://api.edamam.com/search?q=" + getFood + "&app_id=12348d3a&app_key=6579ebfed3d6935657e6dccc1c8514bc&from=0&to=3"
				console.log(recipeQuery);
				$.ajax({
					url: recipeQuery,
					method: "GET"
				}).then(function (response2) {
					console.log(response2);

					// I then grabbed different variables from that api call - poster, title, soruce of recipe, and a link to the recipe
					var recipePoster = response2.hits[1].recipe.image;
					var foodTitle = response2.hits[1].recipe.label;
					var recipeSource = response2.hits[1].recipe.source;
					var recipeLink = response2.hits[1].recipe.shareAs;
					console.log(recipePoster);

					// then we put it on the page
					$("#foodCard").html('<img class="card-img-top" src=' + recipePoster + ' alt="Card image cap" id="foodImage"> <div class="card-body"> <h5 class="card-title" id="foodTitle">' + foodTitle + '</h5> <p class = card-text id = "foodText"> Source: ' + recipeSource + '</p> <ul class = "list-group list-group-flush"> <a href = '+ recipeLink + 'class = "card-link" id = "foodLink" target = "_blank"> Go to Recipe </a>');
					

				})

			})


		})
	})
};

//lastly, I made sure to call the function that I made
searchFilmGenre();








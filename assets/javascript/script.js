var config = {
	apiKey: "AIzaSyB4BUUROtzg6jXYdIBiKqPnq5SlZhHQG7c",
	authDomain: "group-project-cf528.firebaseapp.com",
	databaseURL: "https://group-project-cf528.firebaseio.com",
	projectId: "group-project-cf528",
	storageBucket: "group-project-cf528.appspot.com",
	messagingSenderId: "6868547527"
};
firebase.initializeApp(config);

var dbRef = firebase.database().ref('/');
dbRef.on('value', snapshot => {
	console.log(snapshot.val());
});



function searchFilmGenre() {

	$("#findFilmBtn").on("click", function (event) {
		event.preventDefault();
		var film = $("#filmInput").val();
		var filmQuery = "https://www.omdbapi.com/?t=" + film + "&y=&plot=short&apikey=d1e460fb";
		console.log(filmQuery);
		$.ajax({
			url: filmQuery,
			method: "GET"
		}).then(function (response) {
			console.log(response);

			var genreString = response.Genre;
			var genreArray = genreString.split(", ");
			console.log(genreArray);
			var firstGenreInArray = genreArray[0];
			console.log(firstGenreInArray);

			var filmTitle = response.Title;
			var poster = response.Poster;
			var movieGenre = firstGenreInArray;
			var plot = response.Plot;
			console.log(filmTitle, poster, movieGenre);

			$("#filmCard").html('<img class="card-img-top" src=' + poster + "alt='Card image cap' id='filmImage'> <div class='card-body'> <h5 class='card-title' id='filmTitle'> " + filmTitle + "</h5> <p class = 'card-text' id = 'filmText'>" + movieGenre + "</p> <p>" + plot + "</p>");


			dbRef.orderByChild("genre").once("value").then(res => {
				console.log(res.val()["genre"][movieGenre]);
				var getFood = res.val()["genre"][movieGenre]

				var recipeQuery = "https://api.edamam.com/search?q=" + getFood + "&app_id=12348d3a&app_key=6579ebfed3d6935657e6dccc1c8514bc&from=0&to=3"
				console.log(recipeQuery);
				$.ajax({
					url: recipeQuery,
					method: "GET"
				}).then(function (response2) {
					console.log(response2);

					var recipePoster = response2.hits[1].recipe.image;
					var foodTitle = response2.hits[1].recipe.label;
					var recipeSource = response2.hits[1].recipe.source;
					var recipeLink = response2.hits[1].recipe.shareAs;
					console.log(recipePoster);

					// getting it on the page
					$("#foodCard").html('<img class="card-img-top" src=' + recipePoster + ' alt="Card image cap" id="foodImage"> <div class="card-body"> <h5 class="card-title" id="foodTitle">' + foodTitle + '</h5> <p class = card-text id = "foodText"> Source: ' + recipeSource + '</p> <ul class = "list-group list-group-flush"> <a href = '+ recipeLink + 'class = "card-link" id = "foodLink" target = "_blank"> Go to Recipe </a>');
					

				})

			})


		})
	})
};


searchFilmGenre();








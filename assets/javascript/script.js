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

// function searchFilm() {
// }



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

					var recipePoster = response2.hits[0].recipe.image;
					console.log(recipePoster);

					// getting it on the page
					

				})


			// $("#filmCard").html('<img class="card-img-top" src=' + poster + "alt='Card image cap' id='filmImage'> <div class='card-body'> <h5 class='card-title' id='filmTitle'> " + filmTitle + "</h5> <p class = 'card-text' id = 'filmText'>" + genre + "</p> <p>" + plot + "</p>");

			for (i = 0; i < 3; i ++) {
				var filmCard = $("<div class='card' style='width:25rem'>"); 

				var imgURL = response.hits.recipe.image;
				var cardImg = $("<img>").attr("src", imgURL);
				
				var cardTitle = response.hits.recipe.label;
				var displayTitle = $("<p class='card-title'>").text(cardTitle);
				
				var cardText = response.hits.recipe.source;
				var displayText = $("<p class='card-text'>").text(cardText); 

				var cardLink = response.hits.recipe.url;
				var displayLink = $("<p class='btn btn-danger'>").text(cardLink); 

				filmCard.prepend(cardImg); 
				filmCard.append(displayTitle);
				filmCard.append(displayText);
				filmCard.append(displayLink);
			
				$(".filmBio").prepend(filmCard);
			}

			for (i = 0; i < 3; i ++) {
				var filmCard = $("<div class='card' style='width:25rem'>"); 

				var imgURL = response.Poster;
				var cardImg = $("<img>").attr("src", imgURL);
				
				var cardTitle = response.hits.recipe.label;
				var displayTitle = $("<p class='card-title'>").text(cardTitle);
				
				var cardText = response.hits.recipe.source;
				var displayText = $("<p class='card-text'>").text(cardText); 

				var cardLink = response.hits.recipe.url;
				var displayLink = $("<p class='btn btn-danger'>").text(cardLink); 

				filmCard.prepend(cardImg); 
				filmCard.append(displayTitle);
				filmCard.append(displayText);
				filmCard.append(displayLink);
			
				$(".filmBio").prepend(filmCard);
			}


		})
	})
};

// $('.dropdown-menu').dropdown('toggle');

searchFilmGenre();

// findRecipesByFoodType();

// searchRecipes();

// function findRecipesByFoodType() {


	$('#findFoodBtn').on('click', function () {
		event.preventDefault();
		var test = $("#selectNumber").val();
		console.log(test);
		console.log(myobject);
		console.log("button works");
		console.log(myobject.Value1);
		console.log(select.options.text);

	});
}

function searchRecipes() {
	$("#findRecipeBtn").on("click", function () {
		event.preventDefault();
		var recipe = $("#recipeInput").val();
		console.log(recipe);
		var recipeQuery = "https://api.edamam.com/search?q=" + recipe + "&app_id=12348d3a&app_key=6579ebfed3d6935657e6dccc1c8514bc&from=0&to=3"
		console.log(recipeQuery);
		$.ajax({
			url: recipeQuery,
			method: "GET"
		}).then(function (response2) {
			console.log(response2);

			var recipePoster = response2.hits[0].recipe.image;
			console.log(recipePoster);

			$("#foodBio").html('<img class="card-img-top" src=' + recipePoster + "alt='Card image cap' id='foodImage'> <div class='card-body'> <h5 class='card-title' id='foodTitle'> " + x + "</h5> <p class = 'card-text' id = 'foodText'>" + y + "</p>");


// 		})
// 	})
// }





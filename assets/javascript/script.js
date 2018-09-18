// // Initialize Firebase
// var config = {
// 	apiKey: "AIzaSyB4BUUROtzg6jXYdIBiKqPnq5SlZhHQG7c",
// 	authDomain: "group-project-cf528.firebaseapp.com",
// 	databaseURL: "https://group-project-cf528.firebaseio.com",
// 	projectId: "group-project-cf528",
// 	storageBucket: "group-project-cf528.appspot.com",
// 	messagingSenderId: "6868547527"
// };
// firebase.initializeApp(config);

// var mainDataBase = firebase.database();

var myobject = {
	Value1: 'Food Category',
	Value2: 'Appetizers & Snacks',
	Value3: 'Asian',
	Value4: 'BBQ',
	Value5: 'Beef',
	Value6: 'Breads',
	Value7: 'Breakfast & Brunch',
	Value8: 'Cakes',
	Value9: 'Chicken',
	Value10: 'Dessert',
	Valu11: 'Diabetic',
	Value12: 'Dinner',
	Value13: 'Drinks',
	Value14: 'Gluten Free',
	Value15: 'Healthy',
	Value16: 'Indian',
	Value17: 'Low Calorie',
	Value18: 'Low Fat',
	Value19: 'Mexican',
	Value20: 'Pasta',
	Value21: 'Pork',
	Value22: 'Quick & Easy',
	Value23: 'Salads',
	Value24: 'Salmon',
	Value25: 'Smoothies',
	Value26: 'Soup, Stew, Chili',
	Value27: 'Southern',
	Value28: 'Vegan',
	Value29: 'Vegetarian'
};
//food cat 
var select = document.getElementById("example-select");
for (index in myobject) {
	select.options[select.options.length] = new Option(myobject[index], index);
}


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
			
			var filmTitle=response.Title;
			var poster=response.Poster;
			var genre=firstGenreInArray;
			console.log(filmTitle, poster, genre);

			$(".filmbio").append(filmTitle + poster);
		})
	})
};

searchFilmGenre();


// function findRecipesByFoodType() {
// 	$("#").on("click", function (event) {
// 		event.preventDefault();
// 	//working ecample of a search: https://api.edamam.com/search?q=chicken&app_id=12348d3a&app_key=6579ebfed3d6935657e6dccc1c8514bc&from=0&to=3&calories=591-722&health=alcohol-free
// 	var test = "https://api.edamam.com/search?q=chicken&app_id=12348d3a&app_key=6579ebfed3d6935657e6dccc1c8514bc&from=0&to=3&calories=591-722&health=alcohol-free"
// 	console.log(test);
// }



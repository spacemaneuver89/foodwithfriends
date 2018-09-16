var myobject = {
	Value1 : 'Food Category',
	Value2 : 'Appetizers & Snacks',
	Value3 : 'Asian',
	Value4 : 'BBQ',
	Value5 : 'Beef',
	Value6 : 'Breads',
	Value7 : 'Breakfast & Brunch',
	Value8 : 'Cakes',
	Value9 : 'Chicken',
	Value10 : 'Dessert',
	Valu11 : 'Diabetic',
	Value12 : 'Dinner',
	Value13 : 'Drinks',
	Value14 : 'Gluten Free',
	Value15 : 'Healthy',
	Value16 : 'Indian',
	Value17 : 'Low Calorie',
	Value18 : 'Low Fat',
	Value19 : 'Mexican',
	Value20 : 'Pasta',
	Value21 : 'Pork',
	Value22 : 'Quick & Easy',
	Value23 : 'Salads',
	Value24 : 'Salmon',
	Value25 : 'Smoothies',
	Value26 : 'Soup, Stew, Chili',
	Value27 : 'Southern',
	Value28 : 'Vegan',
	Value29 : 'Vegetarian',
};

var select = document.getElementById("example-select");
for(index in myobject) {
	select.options[select.options.length] = new Option(myobject[index], index);
}

function searchFilm() {
	$("#findFilmBtn").on("click", function () {
		event.preventDefault();
		var film = $("#filmInput").val();
		var filmQuery = "https://www.omdbapi.com/?t=" + film + "&y=&plot=short&apikey=d1e460fb";

		$.ajax({
			url: filmQuery,
			method: "GET"
		}).then(function (response) {
			console.log(response);
		})
	})
}
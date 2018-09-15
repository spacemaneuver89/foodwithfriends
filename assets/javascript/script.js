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
// console.log("Is our script file working?")

// load the airtable library, call it "Airtable"
// let = var but more modern
let Airtable = require("airtable")
// console.log(Airtable);

// use airtable library, connect to our base using API key
let base = new Airtable({ apiKey: "key36DMlmYm8Ica1w" }).base(
  "app9KVIIXz2W9yVTK"
);

// get out collection base, select all the records
// specify functions that will receive the data
base("art").select({}).eachPage(gotPageOfArt, gotAllArt);

// an empty array to hold our data
// const = var
var art = [];

// call back function that receives our data
function gotPageOfArt(records, fetchNextPage) {
	console.log("gotPageOfArt()");
	// add the records from this page to our array
	art.push(...records);
	// request more pages
	fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllArt(err) {
	console.log("gotAllArt()");

	// report an error, you'd want to do something better than this in production
	if (err) {
		console.log("error loading art");
		console.error(err);
		return;
	}

	// call functions to log and show the art
	consoleLogArt();
	showArt();
}

// just loop thru the art and console.log them
function consoleLogArt() {
	console.log("consoleLogArt()");
	art.forEach((art) => {
		console.log("Art:", art);
	});
}

// look thru airtable data, create elements
function showArt() {
	console.log("showArt()");
	art.forEach((art) => {
		
		// var artTitle = document.createElement("h1");
		// artTitle.innerText = art.fields.title;
		// document.body.append(artTitle);

		// var artArtist = document.createElement("h3");
		// artArtist.innerText = art.fields.artist;
		// document.body.append(artArtist);

		// var artImage = document.createElement("img");
		// artImage.src = art.fields.image[0].url;
		// document.body.append(artImage);

		// creating a new div container
		// this is where the art info will go
		var artContainer = document.createElement("div");
		artContainer.classList.add("art-container");
		document.querySelector(".container").append(artContainer);

		// add titles to container
		var artTitle = document.createElement("h1");
		artTitle.classList.add("art-title");
		artTitle.innerText = art.fields.title;
		artContainer.append(artTitle);

		// add artists to container
		var artArtist = document.createElement("h2");
		artArtist.classList.add("art-artist");
		artArtist.innerText = art.fields.artist;
		artContainer.append(artArtist);

		// add medium to container
		var artYear = document.createElement("p");
		artYear.classList.add("art-year");
		artYear.innerText = art.fields.year;
		artContainer.append(artYear);

		// add image to container
		var artImage = document.createElement("img");
		artImage.classList.add("art-image");
		artImage.src = art.fields.image[0].url;
		artContainer.append(artImage);

		// add event listener
		// on click, img and medium appear and disappear
		artContainer.addEventListener("click", function(event){
			artYear.classList.toggle("active")
			artContainer.style.background = "silver";
			artImage.classList.toggle("active")
			artContainer.style.background = "silver";
		})

		// get medium field from airtable
		// loop thru the array and add each medium as a class to the art container
		var artMedium = art.fields.medium;
		artMedium.forEach(function(medium){
			artContainer.classList.add(medium)
		})

		// add event listener to our filter
		// to add an active class to our art
		var filterSculpture = document.querySelector('.sculpture')
		filterSculpture.addEventListener("click", function(){
			
			if (artContainer.classList.contains("sculpture")){
				artContainer.style.background = "#DDA0DD";
			} else {
				artContainer.style.background = "lightgray";
			}
		})

		var filterPainting = document.querySelector('.painting')
				filterPainting.addEventListener("click", function(){
					
					if (artContainer.classList.contains("painting")){
						artContainer.style.background = "#DDA0DD";
					} else {
						artContainer.style.background = "lightgray";
					}
				})

		var filterMixedMedia = document.querySelector('.mixed-media')
		filterMixedMedia.addEventListener("click", function(){
			
			if (artContainer.classList.contains("mixed_media")){
				artContainer.style.background = "#DDA0DD";
			} else {
				artContainer.style.background = "lightgray";
			}
		})

		var filterTextile = document.querySelector('.textile')
				filterTextile.addEventListener("click", function(){
					
					if (artContainer.classList.contains("textile")){
						artContainer.style.background = "#DDA0DD";
					} else {
						artContainer.style.background = "lightgray";
					}
				})

		var filterDrawing = document.querySelector('.drawing')
				filterDrawing.addEventListener("click", function(){
					
					if (artContainer.classList.contains("drawing")){
						artContainer.style.background = "#DDA0DD";
					} else {
						artContainer.style.background = "lightgray";
					}
				})

		var filterPhotography = document.querySelector('.photography')
		filterPhotography.addEventListener("click", function(){
			
			if (artContainer.classList.contains("photography")){
				artContainer.style.background = "#DDA0DD";
			} else {
				artContainer.style.background = "lightgray";
			}
		})

		var filterPrint = document.querySelector('.print')
				filterPrint.addEventListener("click", function(){
					
					if (artContainer.classList.contains("print")){
						artContainer.style.background = "#DDA0DD";
					} else {
						artContainer.style.background = "lightgray";
					}
				})

		var filterFilm = document.querySelector('.film')
		filterFilm.addEventListener("click", function(){
			
			if (artContainer.classList.contains("film")){
				artContainer.style.background = "#DDA0DD";
			} else {
				artContainer.style.background = "lightgray";
			}
		})

		var filterReset = document.querySelector('.js-reset')
		filterReset.addEventListener("click", function(){
			artContainer.style.background = "lightgray";
			})

	})
}

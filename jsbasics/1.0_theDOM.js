//alert("Hey Hey Hey!!!");

var hobbiesList = document.getElementById("hobby-list");
console.log(hobbiesList);

var hobbiesList = document.getElementsByClassName("coding");
console.log(hobbiesList[0].innerHTML); //array
console.log(hobbiesList[1].innerHTML);



function favoriteSong(){
	document.getElementById("favorite music").innerHTML = "Freebird!!!"
}

favoriteSong();

function favoriteSong(){
	document.getElementById("favorite music").innerHTML = "Street with No Name"
}

favoriteSong();

function favoriteSong(){
	document.getElementById("worst music").innerHTML = "Screaming for You"
}

favoriteSong();
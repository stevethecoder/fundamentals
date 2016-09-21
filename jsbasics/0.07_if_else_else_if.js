var bankAccount = 50;
var appleWatch = 400;
var appleWatchGold = 10000

if (bankAccount > appleWatch){
	console.log("buy me a watch")
} else if (bankAccount < appleWatchGold){
	console.log("buy me a great watch")
}

var personAge = 35;

if (personAge >= 21){
	console.log("Congratulations! You can vote.")
} else if (personAge <= 21){
	console.log("Sorry! You're too young to vote.")
}

//challenge create a var and assign it a value
//next create and if, else if, else to evaluate if
//the number is divisable by 2 or 3 and console.log that it is

var numberOne =7;

if ((numberOne % 2 === 0) && (numberOne % 3 === 0)) {
	console.log ("number is divisable by 2 and 3")
} else if ((numberOne % 2 == 0)){
	console.log ("number is divisable by 2")
} else if ((numberOne % 3 == 0)) {
	console.log ("number is divisable by 3")
} else {
	console.log ("number is not divisable by 2 or 3")
}

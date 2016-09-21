//Declaration
function helloWorld(){
	console.log("Hello World")
}

//Call
helloWorld();

function printMyName(){
	console.log("Steven Richards")
}

//Call
printMyName();

//Declaration #2
var name = function(){
	console.log("Steven Richards")
}

//Call
name();

function addNumbers (){
	var x = 10;
	var y = 10;
	console.log(x+y)
}

addNumbers();

function multiplyNumbers (){
	var x = 10;
	var y = 10;
	console.log(x*y)
}

multiplyNumbers();

//Parameters & Arguments

function printNumber (x){
	console.log("The number you entered was: " +x)
}

printNumber(6)



function bankPinNumber (a){
	var pin = 1234567;

	if (a != pin) { 
		console.log ("Number incorrect. Please try again.");
	} else {
		console.log ("Number accepted.");
	}
}
bankPinNumber(1234567);

function numAdd(a,b){
	return a+b;
}

console.log(numAdd(1,2));
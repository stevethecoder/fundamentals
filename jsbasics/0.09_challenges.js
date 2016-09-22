/*BRONZE: 
	Write a function with two strings as arguments.
	The function should concatentate the string.*/
/*-----------------------------------------------------------
SILVER:
	Write a function that will help me easily 
	calculate monthly bills.*/


/*-----------------------------------------------------------
GOLD:
Write a function that helps me calculate the cost of my buying 100 sodas
 at $.99 each(or whatever and however many I feel like buying)
Figure in the tax there, too. The tax is 7 percent in Indiana.
Return a message that says something like this:
"100 Cokes will cost you $105.93."
*/

/*function myCost(b){
	var a=0.99;
	var b=a*1.07;
	var c=100;
	return b*c;
}*/

//Bronze
function ageID (a){
	if (a <= 21) {
		console.log("Sorry you can only drink at home.")
	}
	if (a >=21) {
		console.log("You're in luck...it's almost 5:00!")
	}
}

ageID(22);

function combineWords(wordOne, wordTwo) {
	// body...
	return wordOne + wordTwo
};
console.log(combineWords("Diet " , "Coke"))
//Silver

function monthlyBills(rent, phone, electric){
	return rent + phone + electric;
}

console.log(monthlyBills(50,100,250))

//Their solution

function monthlyBills(rent, phone, electric){
	var totalBills = rent + phone + electric;
	return rent + phone + electric;
}

console.log("Bills: $", monthlyBills(50,100,250))

//Gold
function myCost(coke, tax, quantity){
	return coke * tax * quantity;
}

console.log("100 Cokes will cost you $" +myCost (0.99, 1.07, 100));

//Their solution

function myCost(coke, tax, quantity) {

	var totalTax = (quantity * coke * tax);
	var totalPrice = quantity * coke + tax;
	return quantity + " " + coke + "will cost you $" + totalPrice


	// body...
}
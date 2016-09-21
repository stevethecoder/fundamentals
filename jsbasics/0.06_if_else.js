var elevatorUp = true;
var elevatorDown = false;
var elevatorBroke = false;
var elevatorStop = false;

if (elevatorUp === true){
	console.log("Going up");
} else {
	console.log("The elevator is either broken or going down.")
}

if (elevatorDown === true){
	console.log("Going down");
} else {
	console.log("The elevator is going up or out of service.")
}

if (elevatorBroke === true){
	console.log("Elevator out of service.");
} else {
	console.log("Please step inside. The elevator is moving.")
}

if (elevatorStop === true){
	console.log("Please standby. The elevator is stopped.")
} else {
	console.log("You're moving.")
}

if (elevatorUp || elevatorDown){
	console.log("Elevator is moving")
} else {
	console.log("You're not moving.")
}

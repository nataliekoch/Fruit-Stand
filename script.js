//Set variables to fruit objects. And create an array of all fruits.
var apples = {
	name: 'apples',
	price: 5.00,
	id: 101
};

var oranges = {
	name: 'oranges',
	price: 5.00,
	id: 102
};

var bananas = {
	name: 'bananas',
	price: 5.00,
	id: 103
};

var pears = {
	name: 'pears',
	price: 5.00,
	id: 104
}

var fruitArray = [apples, oranges, bananas, pears];

//Create arrays to use for calcluating average price paid. 
var applePrices = [];
var orangePrices = [];
var bananaPrices = [];
var pearPrices = [];

var totalCash = 100;


//function that runs when page is loaded.  Pulls functions in from below. 
$(document).ready(function(){
	priceTicker();

	//Started working on button code here: 
	// $('.buy-button').on('click', function(){
	// 	var test = $(this).data()
		//Use the data tag to match with the object id to get current price. 
		//Push that price to the correct array. 
		//Utilize array to calculate average price (add all and divide by array.length).

});

//function to create random number - provided to us.
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
} 

//function to change the whole number to a decimal number (convert to cents).
function toCents(){
	var change = (randomNumber(-50, 50))/100;
	// console.log(change);
	return change;
}
//For loop runs through the array of fruit objects.  
//Runs the toCents function to change the price. 
//if else statements keep it within the appropriate range. 
//following if statment change it on the DOM.
function changePrices (array) {
	for(var i=0; i<array.length; i++){
		var adjustment = toCents();
		var kittyFoo = array[i].price+adjustment;
		array[i].price = Number(kittyFoo.toFixed(2));
		// console.log(array[i].price);
	
		var currentPrice = array[i].price;
		if (currentPrice < .50){
			currentPrice = .50;
		} else if (currentPrice > 9.99) {
			currentPrice = 9.99;
		} else {
			currentPrice = currentPrice;
		}

		if (array[i].id == 101){
			$('.101').html(currentPrice);
		}
		if (array[i].id == 102){
			$('.102').html(currentPrice);
		}
		if (array[i].id == 103){
			$('.103').html(currentPrice);
		}
		if (array[i].id == 104){
			$('.104').html(currentPrice);
		}

	}
}

//Has the changePrices function run every 15 seconds. 
function priceTicker(){
	setInterval(function(){changePrices(fruitArray)}, 15000);
}

// priceTicker();

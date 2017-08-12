/* 
carmaker / app.js 
@jonchius

demonstration of object-orientation basics
*/

// constructor for the car 
function Car(make, model, color) {

	this.make = make;
	this.model = model;
	this.color = color;

};

// constructor for the car *factory* 
function carFactory(brand, model, color, numCars) {

	this.brand = brand;
	this.model = model;
	this.color = color;
	this.numCars = numCars;

	// when we set up the array for the cars
	this.carsManufactured = [];

}

carFactory.prototype.manufacture = function() {

	for (i = 0; i < this.numCars; i++) {

		this.carsManufactured.push(new Car(this.brand, this.model, this.color));

	}

}

carFactory.prototype.repaint = function(color) {
	
	this.color = color;
	
	for (i = 0; i < this.carsManufactured.length; i++) {
		this.carsManufactured[i].color = color;
	}

}

// PREREQUISITES: have the Car, carFactory and manufacture functions working; link up jQuery and this file in your HTML
// OPTIONAL: use Bootstrap :)

// STEP 1: generate the HTML

// add this function for HTML viewing

carFactory.prototype.showCars = function() {

	// create an empty string to store the HTML
	var carsAsText = "";

	// create a header that shows the car's brand
	carsAsText += "<h2>" + this.brand + " (" + this.numCars + ")</h2>";

	// run through the cars already created in the array
	for (i = 0; i < this.carsManufactured.length; i++) {

		// using car as a short hand
		var car = this.carsManufactured[i];

		// putting together the car's properties into HTML
		carsAsText += "<p>" + car.color + " " + car.make + " " + car.model + "</p>";

	}

	// returning the string to the HTML
	return carsAsText;
}

// STEP 2: produce the car factories which manufacture multiple car objects (we represent each car by its textual statement, i.e. "Audi R8 Red")

var carFactory1 = new carFactory("Audi", "R8", "Red", 5);
carFactory1.manufacture();

var carFactory2 = new carFactory("BMW", "3 Series", "Blue", 7);
carFactory2.manufacture();

var carFactory3 = new carFactory("Honda", "Civic", "Black", 3);
carFactory3.manufacture();

// var carFactory4 = new carFactory("Honda", "Accord", "Black", 10);
// carFactory4.manufacture();

// STEP 3: when the index.html page loads, we use jQuery to show the title of the factory and the cars

$(document).ready(function() {

	$("#factory-name").html("Car Factory");

	$("#factory-stock").append(carFactory1.showCars());
	$("#factory-stock").append(carFactory2.showCars());
	$("#factory-stock").append(carFactory3.showCars());
	// $("#factory-stock").append(carFactory4.showCars());

	// add however many carFactory objects you want here ... think about how else you can apply this to things beyond cars and car factories!
	// such as visually representing the number of cars (or any other things) each factory (office / group / organization / etc.) has made

});
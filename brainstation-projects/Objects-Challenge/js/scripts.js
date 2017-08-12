
//Provide a simple way for someone to create Car objects.
			
function Car(make, model, carcolor ){

	this.make = make;
	this.model = model;
	this.carcolor = carcolor;
};

//Provide a simple way for a car factory to be made.
function carFactory(brand, numberOfCars){

	this.brand = brand;
	this.numberOfCars = numberOfCars;
	this.carsAvailable = [];
	this.manufacture = function manufacture(){

					for (var i = 0; i < this.numberOfCars; i++) {


						var currentCar = new Car("Audi", "TT", "red");

						//push keyword adds whats in the brackets to the end of the array

						this.carsAvailable.push(currentCar);
						
					}
	};
	
};

//carFactory.prototype.manufacture = function(){};

// ==================PROTOTYPE CHALLENGE=============

				// Add a method repaint that all carFactory Objects can use to repaint cars
				carFactory.prototype.repaint = function(carcolor){

						if (this.carsAvailable.length > 0){

							for (var i = 0; i < this.numberOfCars; i++){



								this.carsAvailable[i].carcolor = carcolor;
							}


						}
					


	};

//create a CarFactory object using the carFactory constructor function

var audiFactory = new carFactory("Audi", 5);


audiFactory.manufacture();

console.log(audiFactory);

console.log(audiFactory.carsAvailable);


// Comments
// ========

// Good job overall, just watch for a few things
// line 22: you are explcitly declaring the car type instead
// of taking the inputs you used when you created the factory audiFactory
// line 58. You do use the number of cars though, so thats good.

// line 38: just watch your indenting



















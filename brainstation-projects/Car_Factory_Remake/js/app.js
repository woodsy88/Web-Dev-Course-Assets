$(document).ready(function(){

//target html form 'carfactory' on page load and disable its submit function.
$('#carfactory').submit(function(event){
		event.preventDefault();
		createCarFactory($(this));
		//run createCarFactory method on page load
		//this refers to 'carfactory' html

	});
});

var carfactory;

//=======Create Car Factory on the webpage that takes the users input and outputs into html on the page

function createCarFactory(frm){


	// taking the input from the user and storing it in variables
var make = frm.find('input[name=make]').val();
var model = frm.find('input[name=model]').val();
var numcars = frm.find('input[name=numcars]').val();


console.log(make);
console.log(model);
console.log(numcars);


carfactory = new carFactory(make, model, numcars);


if(carfactory.manufacture()) {

	// adding the user value from var make above to the ID of html element
	$('#make').html(make);
	$('#model').html(model);
	$('#numcars').html(numcars);
	//after after all the user variable inputs have been pushed to the html
	// elemenets we show the response html
	$('#response').show();
} else{

	alert("Error Making Cars");
};
}


//=====Car Factory Objects


function Car(make,model){

	this.make = make;
	this.model = model;

};

function carFactory (make, model, numcars){

	this.make = make;
	this.model= model;
	this.numcars = numcars;
	this.carsAvailable = [];

};


//=====Manufacture Method

carFactory.prototype.manufacture = function(){
	
	for(var i = 0;i<this.numcars;i++){
		this.carsAvailable.push( new Car(this.make,this.model));
	}

	if(this.carsAvailable.length == this.numcars){
		return true
	}
	else {
		return false
			}
};
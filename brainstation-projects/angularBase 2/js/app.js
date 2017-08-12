//global variable
var app = angular.module('myApp', []);


function myController(){
	//local variable
	this.name = 'Whats your name';
}

myController.prototype.outputGreeting = function(){
	this.response = 'Hello, ' + this.name;
}

app.controller('myController',myController);




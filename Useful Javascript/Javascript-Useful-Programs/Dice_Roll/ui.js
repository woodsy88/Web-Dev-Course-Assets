
var dice6 = {
  sides: 6,
  roll: function (){
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}


dice6.roll();



function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function() {
  var result = dice6.roll();
  printNumber(result);
};

button.onclick();
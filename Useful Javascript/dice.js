

var dice6 = {
  sides: 6,
  roll: function (){
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}


dice6.roll();




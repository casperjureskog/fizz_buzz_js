function FIZZCalculator(){
};

FIZZCalculator.prototype.fizz_buzz = function(obj) {
  var player1 = obj.player1;

  if (player1 < 0) {
    obj.fizzMessage = "wrong input"
  } else if (player1 % 15 === 0) {
    obj.fizzMessage = "fizzbuzz"
  }else if (player1 % 5 === 0) {
    obj.fizzMessage = "Overweight"
  }else if (player1 % 3 === 0) {
    obj.fizzMessage = "Obese"
  }


};

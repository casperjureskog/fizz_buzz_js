function FIZZCalculator(){
};

FIZZCalculator.prototype.fizz_buzz = function(obj) {
  var player1 = obj.player1;

  if (player1 < 0) {
    obj.fizzMessage = "wrong input"
  }
  if (player1 > 18.5 && obj.bmiValue < 25) {
    obj.fizzMessage = "fizzbuzz"
  }
  if (player1 > 25 && obj.bmiValue < 30) {
    obj.fizzMessage = "Overweight"
  }
  if (player1 > 30) {
    obj.fizzMessage = "Obese"
  }

};

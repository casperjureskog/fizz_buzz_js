function FIZZCalculator(){
};

FIZZCalculator.prototype.fizz_buzz = function(obj) {
  var player1 = obj.player1;

  if (player1 <= 0) {
    obj.fizzMessage = "wrong input"
  } else if (player1 % 15 === 0) {
    obj.level = player1
    obj.fizzMessage = "FizzBuzz"
  }else if (player1 % 5 === 0) {
    obj.fizzMessage = "Buzz"
  }else if (player1 % 3 === 0) {
    obj.fizzMessage = "Fizz"
  }else{
    obj.fizzMessage = "not dividible by 3 or 5"
  }


};

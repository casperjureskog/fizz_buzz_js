function Player(attr) {
    this.player1 = attr.player1;
}

  Player.prototype.calculate_fizz = function() {
    calculator = new FIZZCalculator();
      calculator.fizz_buzz(this);
  };

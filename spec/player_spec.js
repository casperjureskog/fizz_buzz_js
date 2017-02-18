describe("Player", function() {
  var subject;

  beforeEach(function() {
    subject = new Player();
  });

  it("#test for user input", function() {
    subject.myFirstFunction();
    expect(subject.someAttribyte).toEqual('Yay!');
  });

  it("#mySecondFunction adds two numbers together", function() {

    expect(subject.mySecondFunction(10, 5)).toEqual(15);
  });
});

describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it("capitalizes the first letter of two words", function() {
    expect(titleCase("the dog")).to.equal("The Dog");
  });

  it("capitalizes the first letter of multiple words", function() {
    expect(titleCase("rage against the machine is a great rock-band")).to.equal("Rage Against The Machine Is A Great Rock-band");
  });

  it("capitalizes the first letters in the sentence, avoiding 'of'", function() {
    expect(titleCase("the dog wants a bite of his food")).to.equal("The Dog Wants A Bite of His Food");
  });
});

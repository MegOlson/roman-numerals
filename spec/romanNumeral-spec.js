var Numerals = require('./../js/scripts.js').numeralsModule;

describe('Numerals', function() {
  var numerals;

  beforeEach(function() {
    numeral = new Numerals()
  });

  it("should return the inputted number in roman numerals", function(){
    expect(numeral.makeRoman(5)).toEqual("V")
  });
});

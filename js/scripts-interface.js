Numerals = require('./../js/scripts.js').numeralsModule;


// User Interface logic

$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();
    var decimalNumber = parseInt($("input#decimal-number").val());
    var romanNumeral = new Numerals();
    $("#result").text(romanNumeral.makeRoman(decimalNumber));
  });
});

//Business Logic
var encrypt = function(sentence){
  var reg = /[a-z]/gi;
  var charArray = sentence.match(reg);
  charArray.reverse();
  var columns = Math.ceil(Math.sqrt(charArray.length));
  var rows = Math.ceil(charArray.length / columns);

  var cryptArray = [];
  for (var row = 0; row < rows; row++) {
    cryptArray[row] = [];
    for (var column = 0; column < columns; column++) {
      if (charArray.length > 0) {
        cryptArray[row][column] = charArray.pop();
      } else {
        cryptArray[row][column] = "";
      }
    };
  };

  var encryptedMessage = "";
  for (var column = 0; column < columns; column++) {
    for (var row = 0; row < rows; row++) {
      encryptedMessage = encryptedMessage + cryptArray[row][column];
    }
  }
  return outputMessage(encryptedMessage);
}

var outputMessage = function(sentence) {
  for (var i = 5; i < sentence.length; i+= 6) {
    var splitSentence = sentence.slice(0,i) + " " + sentence.slice(i);
    sentence = splitSentence;
  }
  return sentence;
}

//User Interface Logic
$(document).ready(function() {
  $("#cryptoForm").submit(function(event) {
    event.preventDefault();
    var userSentence = $("input#inputText").val();
    var result = encrypt(userSentence.toLowerCase());
    $(".result").text(result);
  });
});

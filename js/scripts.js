//Business Logic

//User Interface Logic
$(document).ready(function() {
  $("#cryptoForm").submit(function(event) {
    event.preventDefault();
    var userSentence = $("input#inputText").val();

   $(".result").text(userSentence);
  });
});

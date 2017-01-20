// back end logic
var inputValue = "";

function pingPong(tbox) {
  var countArray = [];
  for ( var i = 1; i <=tbox; i++) {
  if (i % 3 === 0) {
    countArray.push("ping");
    }
  else countArray.push(i)
  }
  return countArray;
}
// font end logic
$(document).ready(function() {
 $("#num-form").submit(function(event) {
   event.preventDefault();
  //  $("#output").empty();
   var inputValue = $("#tbox").val();
   var answerr = pingPong(inputValue);
   answerr.forEach(function(element) {
   $("#output").append("<li>" + element + "<li>");
  });
 });
});

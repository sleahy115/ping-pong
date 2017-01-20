// back end logic
// var answerr = [];
var inputValue = "";

function pingPong(tbox) {
  var countArray = [];
  for ( var i = 1; i <=tbox; i++) {
   countArray.push(i);
  //  console.log("the output is" + countArray);
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
  //  countArray = [];
  });
 });
});

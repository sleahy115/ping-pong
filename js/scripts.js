// back end logic
// var answerr = [];
// var inputValue = "";

function pingPong(inputValue_) {
  var countArray = [];
  for ( var i=1; i<=10; i++) {
   countArray.push(i);
  //  console.log("the output is" + countArray);
  }
return countArray;
}
// font end logic
$(document).ready(function() {
 $("form#num-form").submit(function(event) {
   event.preventDefault();
  //  $("#output").empty();
   var inputValue = $("input#tbox").val();
   var solution = pingPong(inputValue);
   $("#output").append("<p>" + solution + "</p>");
  //  countArray = [];
 });
});

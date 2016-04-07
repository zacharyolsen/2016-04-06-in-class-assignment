$(document).ready( function() {


  $("#meow").click( function() {
    $("#animals").append("<img class='animal' src='images/cat.png' alt='cat' />");
  });

  $(".animal").click( function() {
    $(this).css('visibility', 'hidden');
  });

});

$(document).ready(function(){
  $("form").submit(function(){
    alert("Submitted");
    var x = $("form").serializeArray();
    $.each(x, function(i, field){
    $("#results").append(field.name + ":" + field.value + " ");
  });
  });
});
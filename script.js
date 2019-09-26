//Add listener to the function courses
window.addEventListener("load", form);

//Create function form
function form() {
  //This will do things
  
}

$( "form" ).submit(function( event ) {
  
});

function formsToObj(){
  var forms = [];
  $('form').each(function(i){
      forms[i] = {};
      $(this).children('input,textarea,select').each(function(){
          forms[i][$(this).attr('name')] = $(this).val();
      });
  });
  return forms;
}
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
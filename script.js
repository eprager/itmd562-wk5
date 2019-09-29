function Person(fname,sname,num){
  this.firstname = fname;
  this.lastname = sname; 
  this.number = num;
  this.confirm = function(){
    alert(this.firstname + ' ' + this.lastname + "'s favorite number is " + this.number);
  }
}  

$(document).ready(function(){
  $("#submitBtn").click(function(){        
      $("#numForm").submit(); // Submit the form
      var p = new Person(
        document.getElementById('firstname').value, 
        document.getElementById('lastname').value,
        document.getElementById('number').value
        );
      p.confirm();
  });
});


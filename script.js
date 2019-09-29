var data = "";

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
      console.log(p);
      var myJSON = JSON.stringify(p);
      data = data + myJSON + "<br>";
      window.localStorage.setItem('dataStorage', data);
  });

  $("#outputBtn").click(function(){  
    var output = window.localStorage.getItem('dataStorage');
    $("#results").append(output);
  });
});


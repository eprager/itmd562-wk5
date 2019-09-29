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
      var p = new Person(
        document.getElementById('firstname').value, 
        document.getElementById('lastname').value,
        document.getElementById('number').value
      );
      document.getElementById("numForm").reset();
      console.log(p);
      var myJSON = JSON.stringify(p);
      data = data + myJSON + "<br/>";
  });

  $("#outputBtn").click(function(){  
    $("#results").html(data);
  });
});


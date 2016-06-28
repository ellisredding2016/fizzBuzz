$(document).ready(function(){
  var input = prompt("Enter a Number");
  //console.log(input);
  fizzBuzz(input);
})


function checkInt(input) {
  //console.log("Check Int");
  input = Math.ceil(input);
      //console.log(input);
  input = parseInt(input);
  //console.log(input);
  if(isNaN(input)){ 
    //console.log("NaN");
    alert("Not a Valid Integer"); 
  }
 
  return input;
}


function fizzBuzz(input){
  
  input = checkInt(input);
  //console.log("Check Int" + input);

  for (var count=1; count<input; count++){
    var output;
    if (count%15===0){
      output = "FizzBuzz";
    }
    else if (count%3===0){
      output = "Fizz";
    }
    else if (count%5===0){
      output = "Buzz";
    }

    else {
      output = count;
    }
    
    $("ul").append("<li>"+output+"</li>")
  }
}
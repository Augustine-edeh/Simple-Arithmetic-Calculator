function calc2() {
  var input01 = document.getElementById("_1st").value;
  var input02 = document.getElementById("_2nd").value;
  var output = document.getElementById("output");
  var operator = document.getElementById("selector").value;



   switch (operator) {
    case '--select--':
      output.value = "Kindly select an Operator";
      break;
    
    case '+':
      output.value = ((parseInt(input01)) + (parseInt(input02)));;
      break;
      
    case '-':
      output.value = ((parseInt(input01)) - (parseInt(input02)));;
      break;
      
    case 'x':
      output.value = ((parseInt(input01)) * (parseInt(input02)));;
      break;
      
    case '/':
      output.value = ((parseInt(input01)) / (parseInt(input02)));;
      break;
      
    case '^':
      output.value = ((parseInt(input01)) ** (parseInt(input02)));;
      break;
  }
}



if (isNaN(output.value) === true ) {
   output.value = "Error! Enter a valid figure.";
 }

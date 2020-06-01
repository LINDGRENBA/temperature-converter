let fahrenheitToCelsius = function(userInput) {
  return ((userInput - 32)*5)/9;
  }
  
  
  let fahrenheit = parseInt(prompt('Enter degrees Fahrenheit:'));
  
  alert(fahrenheitToCelsius(fahrenheit));
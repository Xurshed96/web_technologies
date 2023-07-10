// Prompt the user to enter the temperature in degrees Celsius
var celsius = prompt("Enter the temperature in degrees Celsius:");

// Convert the temperature to Fahrenheit and round the value
var fahrenheit = ((9 / 5) * celsius + 32).toFixed(1);

// Display the converted temperatures in an alert
alert("Celsius: " + celsius + ", Fahrenheit: " + fahrenheit);

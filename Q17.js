// Get user input
let temp = parseFloat(prompt("Enter the water temperature:"));

// Variable to store water state
let status;

if (temp < 0) {
  status = "ICE";
} else if (temp <= 100) {
  status = "WATER";
} else {
  status = "STEAM";
}

// Display the result
console.log(`Water status is ${status} for the Temperature ${temp.toFixed(2)}`);

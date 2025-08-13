// Get how many numbers the user wants to enter
let n = parseInt(prompt("Enter the number of values:"));

// Initialize product to 1
let product = 1;

// Loop to get numbers and multiply
for (let i = 0; i < n; i++) {
  let num = parseFloat(prompt(`Enter number ${i + 1}:`));
  product *= num;
}

// Display final result
console.log(`Cumulative Total = ${product}`);

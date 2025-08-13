// Get number of Fibonacci terms from user
let n = parseInt(prompt("How many Fibonacci terms?"));

// First two terms
let f1 = 1,
  f2 = 1;

// To store sequence
let sequence = "";

// Handle cases where n is 1 or 2
if (n >= 1) sequence += f1 + " ";
if (n >= 2) sequence += f2 + " ";

// Generate Fibonacci terms from 3 to n
for (let i = 3; i <= n; i++) {
  let f = f1 + f2;
  sequence += f + " ";
  f1 = f2;
  f2 = f;
}

// Display output
console.log(sequence.trim());

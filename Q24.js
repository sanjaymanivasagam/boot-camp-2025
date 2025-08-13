// Function to calculate average
function calculateAverage(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}

// Main code
let n = parseInt(prompt("Enter how many numbers:"));
let numbers = [];

for (let i = 0; i < n; i++) {
  let value = parseFloat(prompt(`Enter number ${i + 1}:`));
  numbers.push(value);
}

let avg = calculateAverage(numbers);
console.log(`Average of the numbers: ${avg.toFixed(2)}`);

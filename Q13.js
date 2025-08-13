// Get total number of inputs
let N = parseInt(prompt("Enter how many numbers you want to input:"));

// Read the first number as smallest
let smallest = parseFloat(prompt("Enter number 1:"));

// Loop for remaining N-1 numbers
for (let i = 2; i <= N; i++) {
  let num = parseFloat(prompt(`Enter number ${i}:`));
  if (num < smallest) {
    smallest = num;
  }
}

// Display result
console.log(`The smallest number is: ${smallest}`);
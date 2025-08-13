// Read 5 numbers from user in the same line
let input = prompt(
  "Enter 5 numbers (each between 1 and 30) separated by spaces:"
);

// Convert input string to an array of numbers
let numbers = input.split(" ").map(Number);

// Loop through each number
for (let i = 0; i < numbers.length; i++) {
  let stars = "";
  // Inner loop to add asterisks
  for (let j = 0; j < numbers[i]; j++) {
    stars += "*";
  }
  // Print number and its stars
  console.log(`${numbers[i]} ${stars}`);
}
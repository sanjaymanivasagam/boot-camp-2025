// Get number of lines from user
let n = parseInt(prompt("How many Lines?"));

// Build pyramid pattern
for (let i = 1; i <= n; i++) {
  let row = "";

  // Add spaces before stars
  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }

  // Add stars
  for (let star = 1; star <= 2 * i - 1; star++) {
    row += "*";
  }

  console.log(row);
}

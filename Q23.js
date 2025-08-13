// Get number of lines from user
let n = parseInt(prompt("Enter Number of Lines:"));

for (let i = 1; i <= n; i++) {
  let row = "";

  // Add spaces before numbers
  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }

  // Increasing numbers
  let num = i;
  for (let j = 1; j <= i; j++) {
    row += num;
    num++;
  }

  // Decreasing numbers
  num -= 2; // adjust to avoid repeating the middle number
  for (let j = 1; j <= i - 1; j++) {
    row += num;
    num--;
  }

  console.log(row);
}

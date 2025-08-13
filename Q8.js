let n = parseInt(prompt("Enter how many odd numbers to sum: "));
let sum = 0;
for (let i = 1; i <= 2 * n - 1; i += 2) {
  sum += i;
}
console.log(`Sum of first ${n} odd numbers is ${sum}`);
console.log(`(1 + 3 + 5+ ${2 * (n - 1) - 1} + ${2 * n -1} = ${sum})`);
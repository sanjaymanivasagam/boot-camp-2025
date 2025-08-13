// Prompt user for input
let flag = parseInt(prompt("Enter Heat code (1-3):"));

// Variable to store heat status
let status;

switch (flag) {
  case 1:
    status = "HOT";
    break;
  case 2:
    status = "LUKE WARM";
    break;
  case 3:
    status = "COLD";
    break;
  default:
    status = "OUT OF RANGE";
    break;
}

// Output the result
console.log(`Flag ${flag} is ${status}`)
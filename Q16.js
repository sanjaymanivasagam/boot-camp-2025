// Prompt user for color code character
let colour = prompt("Enter Color code character:");

// Variable to store color name
let colorName;

switch (colour) {
  case "r":
  case "R":
    colorName = "RED";
    break;
  case "g":
  case "G":
    colorName = "GREEN";
    break;
  case "b":
  case "B":
    colorName = "BLUE";
    break;
  default:
    colorName = "BLACK";
    break;
}

// Output the result
console.log(`Color Code ${colour} is ${colorName}`);
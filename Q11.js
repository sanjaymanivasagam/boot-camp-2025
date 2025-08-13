function calculateFactorial(num) {
  if (num < 0) {
    return "Undefined"; // Factorial is not defined for negative numbers
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}

function printFactorialTable() {
  const n = parseInt(prompt("Enter a number (n) to calculate factorials up to:"));

  if (isNaN(n) || n < 0) {
    console.log("Invalid input. Please enter a non-negative integer.");
    return;
  }

  console.log("Factorial Table:");
  console.log("------------------");
  console.log("Number | Factorial");
 

  for (let i = 1; i <= n; i++) {
    const factorialResult = calculateFactorial(i);
    console.log(`${i.toString().padEnd(6)} | ${factorialResult}`);
  }
}

// Call the function to execute the program
printFactorialTable();
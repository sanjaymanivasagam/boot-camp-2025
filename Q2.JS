let principal = parseFloat(prompt("Enter Principal Amount: "));
let rate = parseFloat(prompt("Enter Annual Interest Rate (%): "));
let time = parseFloat(prompt("Enter Time in years: "));
/* Calculate simple interest */
let simpleInterest = (principal * rate * time) / 100;
/* Print the resultant value of SI */
console.log("Simple Interest: " + simpleInterest);
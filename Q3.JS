let principal = parseFloat(prompt("Enter Principal Amount: "));
let rate = parseFloat(prompt("Enter Annual Interest Rate (%): "));
let time = parseFloat(prompt("Enter Time in years: "));

/* Calculate compound interest */
let A = principal *
  (Math.pow((1 + rate / 100), time));//Math.pow(x: number, y: number):
let CI = A - principal;

console.log("Compound interest is " + CI);
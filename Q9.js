let sum = 0; 
for (let i = 2; i <= 30; i++) {
if (i % 2 == 0) {
    sum += i; 
  }}
console.log("The sum of even numbers between 2 and 30 is: " + sum); 
console.log(`(even numbers: 2+4+6+...+30= ${sum})`);
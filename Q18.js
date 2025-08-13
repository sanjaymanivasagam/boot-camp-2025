// Get input from user
let text = prompt("Enter the string below:");

// Variable to store reversed string
let reverseText = "";

// Loop with comma operator (i--, j++)
for (let i = text.length - 1, j = 0; i >= 0; i--, j++) {
  reverseText += text[i];
}

// Display result
console.log(`Reversed Text: ${reverseText}`);

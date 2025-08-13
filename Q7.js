function encodeWord() {
  let word = prompt("Enter a five-letter word:");

  // Validate if the input is a five-letter word
  if (word ===null || word.length !== 5) {
    alert("Please enter exactly a five-letter word.");
    return;  }
  let encodedWord = "";
  for (let i = 0; i < word.length; i++) {
    let charCode = word.charCodeAt(i); // Get ASCII value
    let newCharCode = charCode - 1;    // Subtract 1
    encodedWord += String.fromCharCode(newCharCode); // Convert back to character
  }
alert("The encoded word is: " + encodedWord);
}
encodeWord();
// Class to handle input, processing, and output
class SecondLargestFinder {
  constructor() {
    this.numbers = [];
  }

  // Method to read input
  readInput() {
    let n = parseInt(prompt("Enter how many numbers:"));
    for (let i = 0; i < n; i++) {
      let value = parseInt(prompt(`Enter number ${i + 1}:`));
      this.numbers.push(value);
    }
  }

  // Method to find second largest
  findSecondLargest() {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of this.numbers) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num < largest) {
        secondLargest = num;
      }
    }

    return secondLargest;
  }

  // Method to display result
  displayResult(secondLargest) {
    console.log(`Second largest number is: ${secondLargest}`);
  }
}

// Main execution
let finder = new SecondLargestFinder();
finder.readInput();
let secondLargest = finder.findSecondLargest();
finder.displayResult(secondLargest);

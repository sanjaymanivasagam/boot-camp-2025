function generateMarksheet() {
  let mathMarks = parseFloat(prompt("Enter marks for Math:"));
  let scienceMarks = parseFloat(prompt("Enter marks for Science:"));
  let englishMarks = parseFloat(prompt("Enter marks for English:"));
  if (isNaN(mathMarks) || isNaN(scienceMarks) || isNaN(englishMarks)) {
    alert("Please enter valid numbers for marks.");
    return;
  }
const totalMarks = mathMarks + scienceMarks + englishMarks;
const percentage = (totalMarks / 300) * 100; // Assuming 100 marks per subject
// Determine the grade
  let marksheetOutput = `
    <h2>Student Marksheet</h2>
     <p><strong>Math Marks:</strong> ${mathMarks}</p>
    <p><strong>Science Marks:</strong> ${scienceMarks}</p>
    <p><strong>English Marks:</strong> ${englishMarks}</p>
    <p><strong>Total Marks:</strong> ${totalMarks}</p>
    <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>`;
// Display in a new window or within an HTML element
  document.body.innerHTML = marksheetOutput;
}
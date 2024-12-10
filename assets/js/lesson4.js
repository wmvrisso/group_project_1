// Multiple Choice Question: Note variables for multiple choice questions will be marked with MC.
let correctNumeratorMC = 0;
let correctDenominatorMC = 0;
let randomNumberA = 0;
let randomNumberB = 0;

function generateRandomFraction() {
    randomNumberA = Math.floor(Math.random() * 8) + 1;
    randomNumberB = Math.floor(Math.random() * 8) + 1;
  if (randomNumberA > randomNumberB) {
      correctNumeratorMC = correctNumeratorMC + randomNumberB;
      correctDenominatorMC = correctDenominatorMC + randomNumberA;
  } else {
      correctNumeratorMC = correctNumeratorMC + randomNumberA;
      correctDenominatorMC = correctDenominatorMC + randomNumberB;
  }
}

generateRandomFraction();
console.log(randomNumberA)
console.log(correctNumeratorMC, correctDenominatorMC);


// function checkMultipleChoice(button) {
//     const feedback = document.getElementById("feedback1");
//     if (button.getAttribute("data-answer") === "correct") {
//       feedback.textContent = "Correct! Well done.";
//       feedback.style.color = "green";
//     } else {
//       feedback.textContent = "Try again!";
//       feedback.style.color = "red";
//     }
//   }
  
//   // Single Number Answer
//   function checkSingleAnswer() {
//     const numerator = document.getElementById("numerator").value;
//     const denominator = document.getElementById("denominator").value;
//     const feedback = document.getElementById("feedback2");
  
//     if (numerator === "3" && denominator === "5") {
//       feedback.textContent = "Correct! The fraction is 3/5.";
//       feedback.style.color = "green";
//     } else {
//       feedback.textContent = "Incorrect. Check your work.";
//       feedback.style.color = "red";
//     }
//   }
  
//   // Click to Shade
//   function toggleShade(square) {
//     square.classList.toggle("shaded");
//   }
  
//   function checkShaded() {
//     const squares = document.querySelectorAll("#grid .square");
//     const feedback = document.getElementById("feedback3");
//     let shadedCount = 0;
  
//     squares.forEach(square => {
//       if (square.classList.contains("shaded")) shadedCount++;
//     });
  
//     if (shadedCount === 2) {
//       feedback.textContent = "Correct! You shaded 2/4.";
//       feedback.style.color = "green";
//     } else {
//       feedback.textContent = "Try again! Make sure you shade 2 squares.";
//       feedback.style.color = "red";
//     }
//   }

//   // Random Fraction Generator




//   // Update the question display
//   const shape = document.getElementById("shape");
//   shape.textContent = `What fraction of this shape is shaded? (${correctNumerator}/${correctDenominator} visually represented)`;
// }

// function checkSingleAnswer() {
//   const numerator = document.getElementById("numerator").value;
//   const denominator = document.getElementById("denominator").value;
//   const feedback = document.getElementById("feedback2");

//   if (parseInt(numerator) === correctNumerator && parseInt(denominator) === correctDenominator) {
//     feedback.textContent = "Correct! Great job!";
//     feedback.style.color = "green";
//     generateRandomFraction(); // Generate a new question after a correct answer
//   } else {
//     feedback.textContent = "You're getting there! Try again!";
//     feedback.style.color = "blue";
//   }
// }

// // Initialize the first question when the page loads
// window.onload = generateRandomFraction;

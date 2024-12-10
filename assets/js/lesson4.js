// Multiple Choice Question
function checkMultipleChoice(button) {
    const feedback = document.getElementById("feedback1");
    if (button.getAttribute("data-answer") === "correct") {
      feedback.textContent = "Correct! Well done.";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Try again!";
      feedback.style.color = "red";
    }
  }
  
  // Single Number Answer
  function checkSingleAnswer() {
    const numerator = document.getElementById("numerator").value;
    const denominator = document.getElementById("denominator").value;
    const feedback = document.getElementById("feedback2");
  
    if (numerator === "3" && denominator === "5") {
      feedback.textContent = "Correct! The fraction is 3/5.";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Incorrect. Check your work.";
      feedback.style.color = "red";
    }
  }
  
  // Click to Shade
  function toggleShade(square) {
    square.classList.toggle("shaded");
  }
  
  function checkShaded() {
    const squares = document.querySelectorAll("#grid .square");
    const feedback = document.getElementById("feedback3");
    let shadedCount = 0;
  
    squares.forEach(square => {
      if (square.classList.contains("shaded")) shadedCount++;
    });
  
    if (shadedCount === 2) {
      feedback.textContent = "Correct! You shaded 2/4.";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Try again! Make sure you shade 2 squares.";
      feedback.style.color = "red";
    }
  }
  
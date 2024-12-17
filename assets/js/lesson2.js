// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }

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
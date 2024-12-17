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
      playConfetti();
    } else {
      feedback.textContent = "Try again!";
      feedback.style.color = "red";
    }
  }
    // Function to play confetti effect
function playConfetti() {
    const duration = 2 * 1000; // 2 seconds
    const end = Date.now() + duration;
  
    const colors = ['#bb0000', '#ffffff', '#00bb00'];
  
    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });
  
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }


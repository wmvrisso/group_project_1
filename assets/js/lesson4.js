window.onload = function () {
  generateRandomFraction ('diagramMC', 'MC');
  generateRandomFraction('diagramSA','SA');
  generateClickToShadeDiagram('diagram', 'CTS');
}

let correctNumeratorMC = 0;
let correctDenominatorMC = 0;
let correctNumeratorSA = 0;
let correctDenominatorSA = 0;
let correctNumeratorCTS = 0;
let correctDenominatorCTS = 0;

let streakMC = 0;
let streakSA = 0;
let streakCTS = 0;

const correctFeedback = [
  "Correct! You're better than Nutella and waffles!",
  "Great job! You're the crème de la crème of math!",
  "Correct! You’re as sharp as a fraction's line!",
  "Well done! You just divided and conquered!",
  "Fantastic! Fractions fear you now!",
  "Correct! You're officially 5/5 awesome!",
  "Great work! You're a fraction wizard!",
  "Boom! You crushed it!",
  "Correct! If fractions were cookies, you'd bake them perfectly!",
  "Amazing! You're sweeter than a 3/3 slice of pie!",
  "Correct! You’ve got more precision than a laser-cut pie!",
  "Spot on! You’re the Michelangelo of fractions!",
  "Bravo! You just leveled up your math game!",
  "Correct! You’re a fraction action hero!",
  "Nice! You're cookin'!",
  "Correct! You’re dividing and conquering like a true champion!",
  "Awesome! You’re the Beyoncé of breaking down fractions!",
  "Right again! Fractions should be asking *you* for help!",
  "Perfect! You’re locked in!",
  "Correct! You're fractions’ favorite person ever!",
  "Excellent! By the way, your hair looks great!",
];

const incorrectFeedback = [
    "Not quite! Even pizza gets cut into equal parts!",
    "Close, but fractions are picky about accuracy!",
    "Oops! Try again—you've got this!",
    "Almost there! Remember, fractions don't fudge the numbers.",
    "Not this time, but you're still better than pineapple on pizza!",
    "Missed it! Don’t worry, even math has its off days!",
    "Keep going! Fractions need a little slice of practice.",
    "Incorrect, but you're still gold to me!",
    "Whoops! If that problem was a banana peel, you stepped on it!",
    "Nope! But hey, at least you're not eating dirt.",
    "Oops! Fractions can be a bit dramatic, huh?",
    "Not quite. But don’t worry, the fraction police aren’t coming for you!",
    "Nope! Fractions are tricky, but you'll get it!",
    "Try again! Remember, a fraction never lies (unlike that one friend).",
    "Incorrect, but hey, fractions can’t judge your awesomeness!",
    "Whoops! Don’t let fractions throw shade—show them who’s boss!",
    "Not quite! Just get it right before you cut my pizza!",
    "Almost there! You’re just one fraction away from glory!",
    "Missed it, but you’re still 5/4 amazing!",
    "Nope, but hey, even Einstein needed practice!"
  ];
  

// Generate Random Fraction and Picture
function generateRandomFraction(htmlID, type) {
  
  const randomNumberA = Math.floor(Math.random() * 8) + 1;
  const randomNumberB = Math.floor(Math.random() * 8) + 1;

  let numerator;
  let denominator;

  // Ensure numerator is smaller than denominator
  if (randomNumberA > randomNumberB) {
    numerator = randomNumberB;
    denominator = randomNumberA;
  } else {
    numerator = randomNumberA;
    denominator = randomNumberB;
  }
  // Update the correct variables based on type
  if (type === 'MC') {
    correctNumeratorMC = numerator;
    correctDenominatorMC = denominator;
  } else if (type === 'SA') {
    correctNumeratorSA = numerator;
    correctDenominatorSA = denominator;
  } else if (type === 'CTS') {
    correctNumeratorCTS = numerator;
    correctDenominatorCTS = denominator;
  }

  const fractionDiaMC = document.getElementById(htmlID);
  fractionDiaMC.innerHTML = ''; 

  // Create numerator blocks
  for (let i = 0; i < numerator; i++) {
    const shadedBlock = document.createElement('span');
    shadedBlock.textContent = '🟦';
    fractionDiaMC.appendChild(shadedBlock);
  }

  // Create unshaded blocks (denominator - numerator)
  for (let i = 0; i < denominator - numerator; i++) {
    const unshadedBlock = document.createElement('span');
    unshadedBlock.textContent = '⬜';
    fractionDiaMC.appendChild(unshadedBlock);
  }

  // Assign random correct answer
  if (type === 'MC') {
    assignRandomAnswers();

    //Makes answers visible after a new question
    const answerButtons = document.querySelectorAll('#multiple-choice button');
    answerButtons.forEach((btn) => {
        btn.style.display = 'inline-block';
    })
  }
}

// Assign Random Correct Answer to Multiple Choice Buttons
function assignRandomAnswers() {
  const buttons = document.querySelectorAll("#multiple-choice button");
  const correctAnswer = `${correctNumeratorMC}/${correctDenominatorMC}`;
  const generatedOptions = new Set();

  generatedOptions.add(correctAnswer); // Ensure the correct answer is included

  // Randomly assign the correct answer to one button
  const correctIndex = Math.floor(Math.random() * buttons.length);
  buttons.forEach((button, index) => {
    button.innerHTML = ""; // Clear the button content

    let numerator, denominator, randomAnswer;

    if (index === correctIndex) {
      // Assign correct answer
      numerator = correctNumeratorMC;
      denominator = correctDenominatorMC;
    } else {
      // Generate a unique incorrect answer
      do {
        const randomNumerator = Math.floor(Math.random() * 8) + 1;
        const randomDenominator = Math.floor(Math.random() * 8) + 1;

        if (randomNumerator > randomDenominator) {
          numerator = randomDenominator;
          denominator = randomNumerator;
        } else {
          numerator = randomNumerator;
          denominator = randomDenominator;
        }

        randomAnswer = `${numerator}/${denominator}`;
      } while (generatedOptions.has(randomAnswer));

      generatedOptions.add(randomAnswer); // Track generated answers
    }

    // Add stacked fraction to the button
    button.innerHTML = `
      <span class="fraction">
        <span class="top">${numerator}</span>
        <span class="line"></span>
        <span class="bottom">${denominator}</span>
      </span>
    `;

    // Mark button as correct or wrong
    button.setAttribute("data-answer", index === correctIndex ? "correct" : "wrong");
  });
}

// Check Multiple Choice Answer
function checkMultipleChoice(button) {
  const feedback = document.getElementById('feedbackMC');
  const answerButtons = document.querySelectorAll('#multiple-choice button')

  if (button.getAttribute('data-answer') === 'correct') {
    const username = localStorage.getItem('username');
    feedback.textContent = correctFeedback[Math.floor(Math.random() * correctFeedback.length)];
    feedback.style.color = 'green';

    streakMC++
    console.log(streakMC);
    if (streakMC >= 4) {
      updateProgress('completeMC');
      playConfetti();
      feedback.textContent = `🥳 Nice work, ${username}! You've passed off these questions. You're next set.`
      streakMC = 0;
    }

    answerButtons.forEach((btn)=> {
        btn.style.display = 'none';
    });

  } else {
    feedback.textContent = incorrectFeedback[Math.floor(Math.random() * incorrectFeedback.length)];
    feedback.style.color = 'blue';

    streakMC = 0
  }
}

// Single answer section
function checkSingleAnswer() {
  const username = localStorage.getItem('username');  
  const numerator = parseInt(document.getElementById('numerator-sa').value);
  const denominator = parseInt(document.getElementById('denominator-sa').value);
  const feedback = document.getElementById('feedbackSA');
  console.log(correctNumeratorSA, correctDenominatorSA);
  
    if (numerator === correctNumeratorSA && denominator === correctDenominatorSA) {
      feedback.textContent = correctFeedback[Math.floor(Math.random() * correctFeedback.length)];
      feedback.style.color = 'green';
      streakSA++

      if (streakSA >= 4) {
        updateProgress('completeSA');
        feedback.textContent = `🥳 There is no stopping you, ${username}! You've passed off these questions.`
        playConfetti();
      } else {
        generateRandomFraction('diagramSA', 'SA');
        document.getElementById('numerator-sa').value = '';
        document.getElementById('denominator-sa').value = '';
      }

    } else {
      feedback.textContent = incorrectFeedback[Math.floor(Math.random() * incorrectFeedback.length)];
      feedback.style.color = 'blue';

      streakSA = 0;
    }
  }
  
// Click to Shade
function generateClickToShadeDiagram(htmlID, type) {
    const diagramContainer = document.getElementById(htmlID);
    diagramContainer.innerHTML = '';
  
    const randomNumberA = Math.floor(Math.random() * 8) + 1;
    const randomNumberB = Math.floor(Math.random() * 8) + 1;
  
    let numerator;
    let denominator;
  
    // Ensure numerator is smaller than or equal to denominator
    if (randomNumberA > randomNumberB) {
      numerator = randomNumberB;
      denominator = randomNumberA;
    } else {
      numerator = randomNumberA;
      denominator = randomNumberB;
    }
  
    correctNumeratorCTS = numerator;
    correctDenominatorCTS = denominator;
  
    // Create the diagram
    for (let i = 0; i < denominator; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.onclick = () => toggleShade(square);
      diagramContainer.appendChild(square);
    }
  
    const targetNumerator = document.getElementById('target-numerator');
    targetNumerator.textContent = `${numerator}`;
    const targetDenominator = document.getElementById('target-denominator');
    targetDenominator.textContent = `${denominator}`;
  }
  
  function toggleShade(square) {
    square.classList.toggle('shaded');
  }
  
  function checkShadedDiagram(htmlID) {
    const squares = document.querySelectorAll(`#${htmlID} .square`);
    const feedback = document.getElementById('feedbackCTS');
  
    let shadedCount = 0;
    squares.forEach((square) => {
      if (square.classList.contains('shaded')) shadedCount++;
    });
  
    if (shadedCount === correctNumeratorCTS) {
      const username = localStorage.getItem('username');
      feedback.textContent = correctFeedback[Math.floor(Math.random() * correctFeedback.length)];
      feedback.style.color = 'green';
      streakCTS++
      if (streakCTS >= 4) {
        updateProgress('completeCTS');
        feedback.textContent = `🥳 You're on fire, ${username}! You've passed off these questions.`
        playConfetti();
      } else {
        generateClickToShadeDiagram('diagram', 'CTS');
      }

    } else {
      feedback.textContent = incorrectFeedback[Math.floor(Math.random() * incorrectFeedback.length)];
      feedback.style.color = 'blue';

      streakCTS = 0;
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
//Trigger confetti after all lessons are completed
function checkProgressForConfetti() {
  const progress = JSON.parse(localStorage.getItem("progress")) || {};
  const lessons = ["completeMC", "completeSA", "completeCTS"]; // Replace with lesson keys

  // Check if all lessons are completed
  const allCompleted = lessons.every((lesson) => progress[lesson] === true);

  if (allCompleted) {
    // playConfetti();
    alert("Congratulations! You've completed all lessons! 🎉");
  }
}

// Example: Call this function in appropriate places
function updateProgress(lesson) {
  const progress = JSON.parse(localStorage.getItem("progress")) || {};
  progress[lesson] = true; // Mark lesson as completed
  localStorage.setItem("progress", JSON.stringify(progress));

  // Check for confetti condition
  checkProgressForConfetti();

  // Reload progress display
  loadProgress();
}

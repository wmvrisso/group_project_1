let correctNumeratorMC = 0;
let correctDenominatorMC = 0;
let correctNumeratorSA = 0;
let correctDenominatorSA = 0;
let correctNumeratorCTS = 0;
let correctDenominatorCTS = 0;

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
  "Awesome! You’re the Beyoncé of breaking things into parts!",
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
  const buttons = document.querySelectorAll('#multiple-choice button');
  const correctAnswer = `${correctNumeratorMC}/${correctDenominatorMC}`;

  // Randomly pick one button for the correct answer
  const correctIndex = Math.floor(Math.random() * buttons.length);
  buttons.forEach((button, index) => {
    if (index === correctIndex) {
      button.textContent = correctAnswer;
      button.setAttribute('data-answer', 'correct');
    } else {
      // Generate an incorrect answers
      const randomNumberA = Math.floor(Math.random() * 8) + 1;
      const randomNumberB = Math.floor(Math.random() * 8) + 1;
      if (randomNumberA > randomNumberB) {
        randomNumerator = randomNumberB;
        randomDenominator = randomNumberA;
      } else {
        randomNumerator = randomNumberA;
        randomDenominator = randomNumberB;
      }
      button.textContent = `${randomNumerator}/${randomDenominator}`;
      button.setAttribute('data-answer', 'wrong');
    }
  });
}

// Check Multiple Choice Answer
function checkMultipleChoice(button) {
  const feedback = document.getElementById('feedback1');
  const answerButtons = document.querySelectorAll('#multiple-choice button')

  if (button.getAttribute('data-answer') === 'correct') {
    feedback.textContent = correctFeedback[Math.floor(Math.random() * correctFeedback.length)];
    feedback.style.color = 'green';

    answerButtons.forEach((btn)=> {
        btn.style.display = 'none';
    });

  } else {
    feedback.textContent = incorrectFeedback[Math.floor(Math.random() * incorrectFeedback.length)];
    feedback.style.color = 'blue';
  }
}

// Initialize the first questions when the page loads
window.onload = function() {
    generateRandomFraction('diagramMC', 'MC');
    generateRandomFraction('diagramSA','SA');
    generateClickToShadeDiagram('diagram', 'CTS');
}


// Single answer section
function checkSingleAnswer() {
    const numerator = parseInt(document.getElementById('numerator-sa').value);
    const denominator = parseInt(document.getElementById('denominator-sa').value);
    const feedback = document.getElementById('feedback2');
    console.log(correctNumeratorSA, correctDenominatorSA);
  
    if (numerator === correctNumeratorSA && denominator === correctDenominatorSA) {
      feedback.textContent = correctFeedback[Math.floor(Math.random() * correctFeedback.length)];
      feedback.style.color = 'green';
      generateRandomFraction('diagramSA', 'SA');
      document.getElementById('numerator-sa').value = '';
      document.getElementById('denominator-sa').value = '';
    } else {
      feedback.textContent = incorrectFeedback[Math.floor(Math.random() * incorrectFeedback.length)];
      feedback.style.color = 'blue';
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
  
    // Update the correct variables for CTS
    correctNumeratorCTS = numerator;
    correctDenominatorCTS = denominator;
  
    // Create the diagram
    for (let i = 0; i < denominator; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.dataset.index = i; // Optional, for debugging or advanced use
      square.onclick = () => toggleShade(square);
      diagramContainer.appendChild(square);
    }
  
    // Display the target fraction
    const targetFraction = document.getElementById('target-fraction');
    targetFraction.textContent = `Shade ${numerator}/${denominator}`;
  }
  
  // Function to toggle shading of a square
  function toggleShade(square) {
    square.classList.toggle('shaded');
  }
  
  // Function to check the shaded squares against the correct answer
  function checkShadedDiagram(htmlID) {
    const squares = document.querySelectorAll(`#${htmlID} .square`);
    const feedback = document.getElementById('feedback3');
  
    // Count shaded squares
    let shadedCount = 0;
    squares.forEach((square) => {
      if (square.classList.contains('shaded')) shadedCount++;
    });
  
    // Compare shaded count with the correct numerator
    if (shadedCount === correctNumeratorCTS) {
      feedback.textContent = correctFeedback[Math.floor(Math.random() * correctFeedback.length)];
      feedback.style.color = 'green';
      generateClickToShadeDiagram('diagram', 'CTS'); // Generate a new problem
    } else {
      feedback.textContent = incorrectFeedback[Math.floor(Math.random() * incorrectFeedback.length)];
      feedback.style.color = 'blue';
    }
  }
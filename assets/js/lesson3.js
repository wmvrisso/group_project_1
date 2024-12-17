        let attempts = 0;
        let correctAnswers = 0;
        let currentNumerator;

        function generateFraction() {
            // Generate a random numerator between 1 and 9, and denominator between 1 and 9
            const numerator = Math.floor(Math.random() * 9) + 1;
            const denominator = Math.floor(Math.random() * 9) + 1;
            currentNumerator = numerator;
            return `${numerator} / ${denominator}`;
        }

        function checkAnswer() {
            const userGuess = parseInt(document.getElementById('userGuess').value);
            if (userGuess === currentNumerator) {
                correctAnswers++;
                document.getElementById('message').innerText = 'Correct!';
            } else {
                document.getElementById('message').innerText = 'Wrong! The correct answer was ' + currentNumerator;
            }

            attempts++;
            if (attempts < 10) {
                // Generate a new fraction for the next round
                document.getElementById('fraction').innerText = generateFraction();
                document.getElementById('userGuess').value = ''; // Clear the input
            } else {
                endGame();
            }
        }

        function endGame() {
            document.getElementById('game').style.display = 'none';
            document.getElementById('result').style.display = 'block';
            document.getElementById('score').innerText = correctAnswers;
        }

        // Initialize the first fraction
        document.getElementById('fraction').innerText = generateFraction();

        // game restart
            document.querySelector('.restartButton').addEventListener('click', function(){
            window.location.reload();
            return false;
          });
        
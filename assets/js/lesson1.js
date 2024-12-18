function checkAnswer(image) {
    const isCorrect = image.getAttribute("data-correct") === "True";

    if (isCorrect) {
        alert("Great job!");
        image.style.border = "5px solid green";
    } else {
        alert("Oops! Try again, you got this!");
        image.style.border = "5px solid red";
    }
}

function checkFraction() {
    const correctNumerator = 4;
    const correctDenominator = 12;

    const userNumerator = parseInt(document.getElementById("guess-numerator").value);
    const userDenominator = parseInt(document.getElementById("guess-denominator").value);

    if (isNaN(userNumerator) || isNaN(userDenominator)) {
        alert("Enter a numerator and a denominator");
        return;
    }
    if (userDenominator === 0) {
        alert("Denominator cannot be 0, try a different number!");
        return;
    }
    if (userNumerator === correctNumerator && userDenominator === correctDenominator) {
        document.getElementById("feedback").innerHTML = `
        <p style="color: green;">You did it! Great work! The correct fraction is 4/12!</p>
        `;
    } else {
        document.getElementById("feedback").innerHTML = `
        <p style="color: red;">Let's try again, you got this!</p>
        `;
    }
}


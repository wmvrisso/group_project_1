// Users will select the pizza with the correct number of slices
const images = document.querySelectorAll('.images-container img');
const submitButton = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
let selectedImage = null;

images.forEach(image => {
    image.addEventListener('click', () => {
        images.forEach(img => img.classList.remove('selected'));
        image.classList.add('selected');
        selectedImage = image;
    });
});

// Add event listener to submit button
submitButton.addEventListener('click', () => {
    if (!selectedImage) {
        feedback.textContent = 'Please select an image!';
        feedback.style.color = 'Black'
        return;
    }
    // Add a function for when user selects correct image
    const isCorrect = selectedImage.dataset.correct == 'true';
    if (isCorrect) {
        feedback.textContent = 'You got it! Well done!';
        feedback.style.color = 'Green';
    } else {
        feedback.textContent = 'Oops, Try again!';
        feedback.style.color = 'red';
    }
});
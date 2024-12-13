function initializeUser() {
    let userName = localStorage.getItem('userName');
  
    if (!userName) {
      userName = prompt("Welcome! Ready to show fractions who's boss? Let's start by making a username");
      if (userName) {
        localStorage.setItem('userName', userName);
        localStorage.setItem('progress', JSON.stringify({}));
      } else {
        alert('Sorry, but we need a username to track your progress!');
        return;
      }
    }
  
    const userGreeting = document.getElementById('user-greeting');
    if (userGreeting) {
      userGreeting.textContent = `Welcome back, ${userName}!`;
    }
  
    loadProgress();
  }
  
  function loadProgress() {
    const progress = JSON.parse(localStorage.getItem('progress')) || {};
  
    // Display progress (example: mark completed lessons)
    const progressContainer = document.getElementById('progress');
    if (progressContainer) {
      progressContainer.innerHTML = ''; // Clear old progress
  
      // Example: Update progress for lessons
      for (let [lesson, completed] of Object.entries(progress)) {
        const progressItem = document.createElement('div');
        progressItem.textContent = `${lesson}: ${completed ? 'Completed' : 'Incomplete'}`;
        progressContainer.appendChild(progressItem);
      }
    }
  }
  
  function updateProgress(lesson) {
    const progress = JSON.parse(localStorage.getItem('progress')) || {};
    progress[lesson] = true;
    localStorage.setItem('progress', JSON.stringify(progress));
  
    loadProgress();
  }
  
  // Reset Progress
  function resetProgress() {
    if (confirm('Are you sure you want to reset your progress?')) {
      localStorage.setItem('progress', JSON.stringify({}));
      loadProgress();
    }
  }

  window.onload = initializeUser;

  
  
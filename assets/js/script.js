// New Modal System
document.addEventListener("DOMContentLoaded", () => {
  const usernameModal = document.getElementById("username-modal");
  const usernameInput = document.getElementById("username-input");
  const saveUsernameButton = document.getElementById("save-username");
  const usernameError = document.getElementById("username-error");
  const userGreeting = document.getElementById("user-greeting");

  // Function to display the modal
  const showModal = () => {
      usernameModal.style.display = "block";
  };

  // Function to hide the modal
  const hideModal = () => {
      usernameModal.style.display = "none";
  };

  // Function to check localStorage and handle the modal
  const initializeUser = () => {
      const storedUsername = localStorage.getItem("username");

      if (!storedUsername) {
          showModal();
      } else {
          displayGreeting(storedUsername);
      }
  };

  // Function to display a greeting
  const displayGreeting = (username) => {
      if (userGreeting) {
          userGreeting.textContent = `Welcome back, ${username}!`;
      }
  };

  // Attach event listener to the button
  saveUsernameButton.addEventListener("click", () => {
      const enteredUsername = usernameInput.value.trim();

      if (enteredUsername) {
          localStorage.setItem("username", enteredUsername);
          displayGreeting(enteredUsername);
          hideModal();
          usernameError.textContent = ""; // Clear error message
      } else {
          usernameError.textContent = "Username is required!";
      }
  });

  // Initialize the user on page load
  initializeUser();
});

function loadProgress() {
  const progress = JSON.parse(localStorage.getItem("progress")) || {};

  // Display progress (example: mark completed lessons)
  const progressContainer = document.getElementById("progress");
  if (progressContainer) {
    progressContainer.innerHTML = ""; // Clear old progress

    // Update progress for lessons
    for (let [lesson, completed] of Object.entries(progress)) {
      const progressItem = document.createElement("div");
      progressItem.textContent = `${lesson}: ${completed ? "Completed" : "Incomplete"}`;
      progressContainer.appendChild(progressItem);
    }
  }
}

function updateProgress(lesson) {
  const progress = JSON.parse(localStorage.getItem("progress")) || {};
  progress[lesson] = true;
  localStorage.setItem("progress", JSON.stringify(progress));

  loadProgress();
}

function resetProgress() {
  if (confirm("Are you sure you want to reset your progress?")) {
    localStorage.setItem("progress", JSON.stringify({}));
    loadProgress();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const progressFill = document.getElementById("progress-fill");

  // Function to update the progress bar
  const updateProgressBar = () => {
      const progress = JSON.parse(localStorage.getItem("progress")) || {};
      const completedActivities = ["completeMC", "completeSA", "completeCTS"].filter(
          (activity) => progress[activity]
      ).length;

      // Update the height of the progress bar
      const progressPercentage = (completedActivities / 3) * 100;
      progressFill.style.width = `${progressPercentage}%`;
  };

  // Update progress bar when an activity is completed
  const updateProgress = (lesson) => {
      const progress = JSON.parse(localStorage.getItem("progress")) || {};
      progress[lesson] = true;
      localStorage.setItem("progress", JSON.stringify(progress));

      // Update the progress display
      loadProgress();
      updateProgressBar();
  };

  // Initialize the progress bar on page load
  updateProgressBar();
});

const timerText = document.querySelector('.timer-text');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset'); 
const timerEndSound = document.getElementById('timer-end-sound'); 

let secondsRemaining = 25 * 60; // 25 minutes in seconds

function tick() {
  secondsRemaining--;
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  timerText.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  if (secondsRemaining === 0) {
    clearInterval(intervalId);
    timerEndSound.play();  // Play audio on timer end
    alert('25 minutes down, time for a quick break!');
  }
}

let intervalId;

startButton.addEventListener('click', () => {
  intervalId = setInterval(tick, 1000); // Update timer every second
  startButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true;
});

// Reset button functionality
resetButton.addEventListener('click', () => {
  clearInterval(intervalId); // Clear any running timer
  secondsRemaining = 25 * 60; // Reset secondsRemaining
  timerText.textContent = '25:00'; // Update timer display
  startButton.disabled = false; // Enable start button after reset
  stopButton.disabled = true; // Disable stop button after reset (inactive)
});
// Select the elements
const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');

// Set initial Pomodoro time (25 minutes)
let workTime = 25 * 60;
let breakTime = 5 * 60;
let timeLeft = workTime;
let isRunning = false;
let isWorkSession = true;
let timerInterval;

// Format time to MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Update the timer display
function updateDisplay() {
    timerDisplay.textContent = formatTime(timeLeft);
}

// Start the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            timeLeft--;
            updateDisplay();

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                isRunning = false;

                // Toggle between work and break sessions
                if (isWorkSession) {
                    timeLeft = breakTime;
                    alert('Work session complete! Time for a break.');
                } else {
                    timeLeft = workTime;
                    alert('Break over! Time to get back to work.');
                }

                isWorkSession = !isWorkSession;
                updateDisplay();
            }
        }, 1000);
    }
}

// Reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    isWorkSession = true;
    timeLeft = workTime;
    updateDisplay();
}

// Event listeners for buttons
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize display
updateDisplay();

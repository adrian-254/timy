let timerInterval;

function startTimer(minutes) {
    clearInterval(timerInterval); // Clear any existing timer
    let time = minutes * 60; // Convert minutes to seconds
    const timerElement = document.getElementById('timer');
    
    timerInterval = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerElement.textContent = `${minutes}:${seconds}`;
        time--;

        if (time < 0) {
            clearInterval(timerInterval);
            alert('Time is up! Take a break or start another session.');
        }
    }, 1000);
}

function startSprint() {
    startTimer(15); // Start a 15-minute timer
}

function resetTimer() {
    clearInterval(timerInterval); // Stop the timer
    document.getElementById('timer').textContent = '15:00'; // Reset the display
}

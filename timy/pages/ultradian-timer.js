let timerInterval;

function startTimer(minutes) {
    clearInterval(timerInterval);
    let time = minutes * 60;
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

function startBreak() {
    startTimer(20);
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('timer').textContent = '90:00';
}

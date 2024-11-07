let time = 0; // Time in seconds
let running = false; // Whether the stopwatch is running or paused
let interval; // To hold the interval function

const timeDisplay = document.getElementById('time'); // Reference to the time display element
const startButton = document.getElementById('start'); // Start button
const stopButton = document.getElementById('stop'); // Stop button
const resetButton = document.getElementById('reset'); // Reset button

// Function to format time into "MM:SS:MS" format
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Function to start the stopwatch
function startStopwatch() {
    if (!running) {
        running = true;
        startButton.textContent = "Pause"; // Change button text to "Pause"
        interval = setInterval(() => {
            time++; // Increment time by one second
            timeDisplay.textContent = formatTime(time); // Update display
        }, 1000);
    } else {
        running = false;
        clearInterval(interval); // Stop the interval (pause)
        startButton.textContent = "Resume"; // Change button text to "Resume"
    }
}

// Function to stop the stopwatch
function stopStopwatch() {
    if (running) {
        running = false;
        clearInterval(interval); // Pause the stopwatch
        startButton.textContent = "Resume"; // Change button text to "Resume"
    }
}

// Function to reset the stopwatch
function resetStopwatch() {
    clearInterval(interval); // Clear the interval
    time = 0; // Reset time
    timeDisplay.textContent = "00:00:00"; // Reset the display
    startButton.textContent = "Start"; // Change button text to "Start"
    running = false; // Ensure the stopwatch is not running
}

// Event listeners for buttons
startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);

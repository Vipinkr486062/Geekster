function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    const formattedDate = `${now.toDateString()}`;

    document.getElementById('time').textContent = formattedTime;
    document.getElementById('date').textContent = formattedDate;
}

function formatTime(unit) {
    return unit < 10 ? `0${unit}` : unit;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to show time immediately
function updateBackground() {
    const hour = new Date().getHours();
    let backgroundColor = "#282c34"; // Default night color

    if (hour >= 6 && hour < 12) {
        backgroundColor = "#ffeb3b"; // Morning yellow
    } else if (hour >= 12 && hour < 18) {
        backgroundColor = "#f1f1f1"; // Afternoon light gray
    } else if (hour >= 18 && hour < 21) {
        backgroundColor = "#ff7043"; // Evening orange
    }

    document.body.style.backgroundColor = backgroundColor;
}

setInterval(updateBackground, 1000); // Update every second
updateBackground(); // Initial background update
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = "Good Evening";

    if (hour >= 6 && hour < 12) {
        greeting = "Good Morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon";
    }

    document.getElementById('greeting').textContent = greeting;
}

setInterval(updateGreeting, 1000); // Update every second
updateGreeting(); // Initial greeting update
async function updateWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key');
    const data = await response.json();
    const weather = `${data.weather[0].description} - ${Math.round(data.main.temp - 273.15)}°C`;
    document.getElementById('weather').textContent = weather;
}

updateWeather(); // Fetch weather on load

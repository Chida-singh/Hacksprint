var daysofweek = ['sun', 'mon', 'tus', 'wed', 'thu', 'fri', 'sat'];
var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

// Clock Function
function clock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h < 12 ? 'AM' : 'PM';
    var daytoday = today.getDay();
    var date = today.getDate();
    var mon = today.getMonth();
    var year = today.getFullYear();

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    document.getElementById('time').innerHTML = day;
    document.getElementById(daysofweek[daytoday]).style.color = '#fff';
    document.getElementById('day').innerHTML = date;
    document.getElementById('month').innerHTML = month[mon];
    document.getElementById('year').innerHTML = year;
}

setInterval(clock, 1000); // Update every second

// Timer Variables
let timerMinutes = 0;
let timerSeconds = 0;
let timerInterval = null;

// Timer Functions
function startTimer() {
    if (timerInterval) return; // Avoid multiple intervals
    timerInterval = setInterval(function () {
        if (timerSeconds === 59) {
            timerMinutes++;
            timerSeconds = 0;
        } else {
            timerSeconds++;
        }
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timerMinutes = 0;
    timerSeconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    document.getElementById('timer-minutes').innerHTML = timerMinutes < 10 ? '0' + timerMinutes : timerMinutes;
    document.getElementById('timer-seconds').innerHTML = timerSeconds < 10 ? '0' + timerSeconds : timerSeconds;
}

// Event Listeners for Timer Controls
document.getElementById('start-timer').addEventListener('click', startTimer);
document.getElementById('stop-timer').addEventListener('click', stopTimer);
document.getElementById('reset-timer').addEventListener('click', resetTimer);

// Navigation Click Events
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        let targetSection = e.target.getAttribute('href').replace('#', '') + '-section';
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(targetSection).style.display = 'block';
    });
});

// Show Clock section by default
document.getElementById('clock-section').style.display = 'block';

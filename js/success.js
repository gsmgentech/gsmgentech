let countdown = 30;
const countdownElement = document.getElementById('countdown');

const timer = setInterval(function() {
    countdown--;
    countdownElement.textContent = countdown;

    if (countdown <= 0) {
        clearInterval(timer);
        window.location.href = 'https://www.gentechserver.com';
    }
}, 1000);

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
    }
});

document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});

document.addEventListener('copy', function (e) {
    e.preventDefault();
});

let customerIP = 'Unknown IP';

fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        customerIP = data.ip;
    })
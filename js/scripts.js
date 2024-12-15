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

showTab('imei');

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function performSearch(event) {
    event.preventDefault();
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const items = document.querySelectorAll('.item');
    let found = false;
    
    items.forEach(item => {
        const desc = item.querySelector('.item-desc').textContent.toLowerCase();
        if (desc.includes(query)) {
            item.style.display = 'block';
            found = true;
        } else {
            item.style.display = 'none';
        }
    });

    if (!found) {
        alert('No items found matching your search.');
    }
}

function openCheckoutModal(itemName, itemPrice) {
    document.getElementById('itemName').value = itemName;
    document.getElementById('itemPrice').value = itemPrice;
    document.getElementById('modalOverlay').style.display = 'block';
    document.getElementById('checkoutModal').style.display = 'block';
}

function closeCheckoutModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('checkoutModal').style.display = 'none';
}

function submitOrder(event) {
    event.preventDefault();
    const customerName = document.getElementById('customerName').value;
    const customerSN = document.getElementById('customerSN').value;
    const customerContact = document.getElementById('customerContact').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;

    const receiptMessage = `
        Order Confirmed!
        IMEI: ${customerName}
        Serial Number: ${customerSN}
        Contact Number: ${customerContact}
        Gcash Ref#: ${customerEmail}
        Item: ${itemName}
        Price: ₱${itemPrice}
    `;

    sendReceiptToTelegram(receiptMessage);

    closeCheckoutModal();

    alert(`Order Confirmed!\n\nItem: ${itemName}\nPrice: ₱${itemPrice}\n\nYou will receive your order information and details on the number you provided`);
}

function sendReceiptToTelegram(message) {
    const botToken = '7629739770:AAEvP7NK4M9Cua3X4norSzqQS2y2Edrdy3Q';
    const chatId = '6892566157';

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => console.log('Message sent to Telegram:', data))
        .catch(error => console.error('Error sending message:', error));
}

document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.product');
        const itemName = item.querySelector('.product-desc').textContent;
        const itemPrice = item.querySelector('.product-price').textContent;
        openCheckoutModal(itemName, itemPrice);
    });
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

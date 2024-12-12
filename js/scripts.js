// Function to handle tab switching
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

// Call the function to display the default tab
showTab('imei');

// Hamburger menu toggle function
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Function to perform search
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

// Open checkout modal
function openCheckoutModal(itemName, itemPrice) {
    document.getElementById('itemName').value = itemName;
    document.getElementById('itemPrice').value = itemPrice;
    document.getElementById('modalOverlay').style.display = 'block';
    document.getElementById('checkoutModal').style.display = 'block';
}

// Close checkout modal
function closeCheckoutModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('checkoutModal').style.display = 'none';
}

// Submit order
function submitOrder(event) {
    event.preventDefault();
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;
    
    alert(`Order Confirmed!\n\nName: ${customerName}\nEmail: ${customerEmail}\nItem: ${itemName}\nPrice: ₱${itemPrice}`);
    
    closeCheckoutModal();
}

// Event listener for Place Order buttons
document.querySelectorAll('.place-order-btn').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.item');
        const itemName = item.querySelector('.item-desc').textContent;
        const itemPrice = item.querySelector('.item-price').textContent;
        openCheckoutModal(itemName, itemPrice);
    });
});
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
    const query = document.getElementById('searchQuery').value;
    alert('Searching for: ' + query);
}

let blockedIPs = JSON.parse(localStorage.getItem('blockedIPs')) || [];

function displayBlockedIPs() {
    const blockedList = document.getElementById('blockedList');
    if (blockedList) {
        blockedList.innerHTML = '';
        blockedIPs.forEach((ip, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = ip;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Unblock';
            removeButton.style.marginLeft = '10px';
            removeButton.onclick = () => removeBlockedIP(index);

            listItem.appendChild(removeButton);
            blockedList.appendChild(listItem);
        });
    }
}

function blockIP(ip) {
    if (!ip) {
        alert('Please enter a valid IP address.');
        return;
    }

    if (!blockedIPs.includes(ip)) {
        blockedIPs.push(ip);
        localStorage.setItem('blockedIPs', JSON.stringify(blockedIPs));
        alert(`IP ${ip} has been blocked.`);
        displayBlockedIPs();
    } else {
        alert(`IP ${ip} is already blocked.`);
    }
}

function removeBlockedIP(index) {
    const removedIP = blockedIPs.splice(index, 1);
    localStorage.setItem('blockedIPs', JSON.stringify(blockedIPs));
    alert(`IP ${removedIP} has been unblocked.`);
    displayBlockedIPs();
}

function checkUserIP() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const userIP = data.ip;
            if (blockedIPs.includes(userIP)) {
                
                window.location.href = 'blockedIP.html';
            }
        })
        .catch(error => console.error('Error fetching IP address:', error));
}

checkUserIP();

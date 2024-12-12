<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css">
    <title>Online Shop</title>
    <style>
    </style>
</head>
<body>
    <!--div class="modal" id="loginModal">
        <div class="modal-content">
            <h2>Login</h2>
            <input type="text" id="username" placeholder="Username" required>
            <input type="password" id="password" placeholder="Password" required>
            <button onclick="login()">Login</button>
            <p>Don't have an account? <a href="#" onclick="createAccount()">Create Account</a></p>
            <p id="loginError" style="color: red;" class="hidden">Invalid credentials!</p>
        </div>
    </div-->

    <nav>
        <div class="hamburger" id="hamburger">&#9776;</div>
        <div class="nav-links" id="navLinks">
            <a href="#imei" id="imeiTab" onclick="showTab('imei')">IMEI Service</a>
            <a href="#server" id="serverTab" onclick="showTab('server')">Server Service</a>
            <a href="#toolrent" id="toolrentTab" onclick="showTab('toolrent')">Tool Rent Service</a>
            <a href="#cellphoneparts" id="cellphonepartsTab" onclick="showTab('cellphoneparts')">Cellphone Parts</a>
            <a href="#history" id="historyTab" onclick="showTab('history')">Transaction History</a>
            <a href="javascript:void(0);" style="background-color: #f1c40f;" id="credit" onclick="addCredit()">Credit ₱<span id="creditBalance">0.00</span></a>
        </div>
        <div class="search-container">
        <form class="search-box" onsubmit="performSearch(event)">
            <input type="text" id="searchQuery" name="searchQuery" placeholder="Search" required>
            <button type="submit">Search</button>
        </form>
        </div>
    </nav>

    <div id="imei" class="items" style="display: none;">
        <h2>IMEI SERVICE</h2>
        <div class="item-grid">
            <div class="item">
                <img src="img/imei.jpg" alt="IMEI Item 1">
                <p class="item-desc">Samsung FRP remove Worldwide By IMEI Only</p>
                <p class="item-price">₱800</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/imei.jpg" alt="IMEI Item 1">
                <p class="item-desc">Samsung FRP remove Worldwide By IMEI Only</p>
                <p class="item-price">₱800</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/imei.jpg" alt="IMEI Item 1">
                <p class="item-desc">Samsung FRP remove Worldwide By IMEI Only</p>
                <p class="item-price">₱800</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/imei.jpg" alt="IMEI Item 1">
                <p class="item-desc">Samsung FRP remove Worldwide By IMEI Only</p>
                <p class="item-price">₱800</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/imei.jpg" alt="IMEI Item 1">
                <p class="item-desc">Samsung FRP remove Worldwide By IMEI Only</p>
                <p class="item-price">₱800</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/imei.jpg" alt="IMEI Item 1">
                <p class="item-desc">Samsung FRP remove Worldwide By IMEI Only</p>
                <p class="item-price">₱800</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/imei.jpg" alt="IMEI Item 1">
                <p class="item-desc">Samsung FRP remove Worldwide By IMEI Only</p>
                <p class="item-price">₱800</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/imei.jpg" alt="IMEI Item 1">
                <p class="item-desc">Samsung FRP remove Worldwide By IMEI Only</p>
                <p class="item-price">₱800</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/imei.jpg" alt="IMEI Item 1">
                <p class="item-desc">Samsung FRP remove Worldwide By IMEI Only</p>
                <p class="item-price">₱800</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/imei.jpg" alt="IMEI Item 1">
                <p class="item-desc">Samsung FRP remove Worldwide By IMEI Only</p>
                <p class="item-price">₱800</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/imei.jpg" alt="IMEI Item 1">
                <p class="item-desc">Samsung FRP remove Worldwide By IMEI Only</p>
                <p class="item-price">₱800</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/imei.jpg" alt="IMEI Item 1">
                <p class="item-desc">Samsung FRP remove Worldwide By IMEI Only</p>
                <p class="item-price">₱800</p>
                <a href="#" class="buy-btn">Buy Now</a>
            </div>
        </div>
    </div>

    <div id="server" class="items" style="display: none;">
        <h2>SERVER SERVICE</h2>
        <div class="item-grid">
            <div class="item">
                <img src="img/UT.jpg" alt="Item 1">
                <p class="item-desc">UnlockTool<br>(3 Months)</p>
                <p class="item-price">₱1,200</p>
                <a href="#" class="buy-btn" onclick="showModal()">Place Order</a>
            </div>
            <div class="item">
                <img src="img/UT.jpg" alt="Item 2">
                <p class="item-desc">UnlockTool<br>(6 Months)</p>
                <p class="item-price">₱1,600</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/UT.jpg" alt="Item 3">
                <p class="item-desc">UnlockTool<br>(12 Months)</p>
                <p class="item-price">₱2,600</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/borneo.jpg" alt="Item 4">
                <p class="item-desc">Borneo Schematic<br>(3 Months 1User)</p>
                <p class="item-price">₱900</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/borneo.jpg" alt="Item 5">
                <p class="item-desc">Borneo Schematic<br>(3 Months 2User)</p>
                <p class="item-price">1,200</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/borneo.jpg" alt="Item 6">
                <p class="item-desc">Borneo Schematic<br>(6 Months 1User)</p>
                <p class="item-price">₱1,600</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/borneo.jpg" alt="Item 7">
                <p class="item-desc">Borneo Schematic<br>(6 Months 2User)</p>
                <p class="item-price">2,500</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/borneo.jpg" alt="Item 8">
                <p class="item-desc">Borneo Schematic<br>(12 Months 1User)</p>
                <p class="item-price">₱2,300</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/borneo.jpg" alt="Item 9">
                <p class="item-desc">Borneo Schematic<br>(12 Months 2User)</p>
                <p class="item-price">₱3,200</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
        </div>
    </div>

    <div id="toolrent" class="items" style="display: none;">
        <h2>TOOL RENT SERVICE</h2>
        <div class="item-grid">
            <div class="item">
                <img src="img/UT.jpg" alt="Item 1">
                <p class="item-desc">UnlockTool Rent<br>6 Hours</p>
                <p class="item-price">₱200</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/UT.jpg" alt="Item 2">
                <p class="item-desc">UnlockTool Rent<br>8 Hours</p>
                <p class="item-price">₱250</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/UT.jpg" alt="Item 3">
                <p class="item-desc">UnlockTool Rent<br>12 Hours</p>
                <p class="item-price">₱350</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/UT.jpg" alt="Item 4">
                <p class="item-desc">UnlockTool Rent<br>24 Hours</p>
                <p class="item-price">₱500</p>
                <a href="#" class="buy-btn">Place Order</a>
            </div>
            <div class="item">
                <img src="img/UT.jpg" alt="Item 5">
                <p class="item-desc">UnlockTool Rent<br>48 Hours</p>
                <p class="item-price">₱0</p>
                <a href="#" class="buy-btn" style="color: #FF0000;">Not Available</a>
            </div>
            <div class="item">
                <img src="img/UT.jpg" alt="Item 6">
                <p class="item-desc">UnlockTool Rent<br>72 Hours</p>
                <p class="item-price">₱0</p>
                <a href="#" class="buy-btn" style="color: #FF0000;">Not Available</a>
            </div>
            <div class="item">
                <img src="img/griffinunlocker.png" alt="Item 7">
                <p class="item-desc">Griffin Unlocker<br>6 Hours</p>
                <p class="item-price">₱0</p>
                <a href="#" class="buy-btn" style="color: #FF0000;">Not Available</a>
            </div>
            <div class="item">
                <img src="img/griffinunlocker.png" alt="Item 8">
                <p class="item-desc">Griffin Unlocker<br>8 Hours</p>
                <p class="item-price">₱0</p>
                <a href="#" class="buy-btn" style="color: #FF0000;">Not Available</a>
            </div>
            <div class="item">
                <img src="img/griffinunlocker.png" alt="Item 9">
                <p class="item-desc">Griffin Unlocker<br>12 Hours</p>
                <p class="item-price">₱0</p>
                <a href="#" class="buy-btn" style="color: #FF0000;">Not Available</a>
            </div>
            <div class="item">
                <img src="img/griffinunlocker.png" alt="Item 10">
                <p class="item-desc">Griffin Unlocker<br>24 Hours</p>
                <p class="item-price">₱0</p>
                <a href="#" class="buy-btn" style="color: #FF0000;">Not Available</a>
            </div>
            <div class="item">
                <img src="img/griffinunlocker.png" alt="Item 11">
                <p class="item-desc">Griffin Unlocker<br>48 Hours</p>
                <p class="item-price">₱0</p>
                <a href="#" class="buy-btn" style="color: #FF0000;">Not Available</a>
            </div>
            <div class="item">
                <img src="img/griffinunlocker.png" alt="Item 12">
                <p class="item-desc">Griffin Unlocker<br>72 Hours</p>
                <p class="item-price">₱0</p>
                <a href="#" class="buy-btn" style="color: #FF0000;">Not Available</a>
            </div>
        </div>
    </div>

    <div id="cellphoneparts" class="items" style="display: none;">
        <h2>CELLPHONE PARTS</h2>
        <div class="item-grid">
            <!-- Item 1 -->
            <div class="item">
                <img src="img/y11front.png" alt="Item 1">
                <p class="item-desc">VIVO Y11<br>Motherboard</p>
                <p class="item-price">₱2,000</p>
                <a href="#" class="buy-btn">Buy Now</a>
            </div>
            <div class="item">
                <img src="img/y11front.png" alt="Item 2">
                <p class="item-desc">VIVO Y11<br>Motherboard</p>
                <p class="item-price">₱2,000</p>
                <a href="#" class="buy-btn">Buy Now</a>
            </div>
            <div class="item">
                <img src="img/y11front.png" alt="Item 3">
                <p class="item-desc">VIVO Y11<br>Motherboard</p>
                <p class="item-price">₱2,000</p>
                <a href="#" class="buy-btn">Buy Now</a>
            </div>
            <div class="item">
                <img src="img/y11front.png" alt="Item 4">
                <p class="item-desc">VIVO Y11<br>Motherboard</p>
                <p class="item-price">₱2,000</p>
                <a href="#" class="buy-btn">Buy Now</a>
            </div>
            <div class="item">
                <img src="img/y11front.png" alt="Item 5">
                <p class="item-desc">VIVO Y11<br>Motherboard</p>
                <p class="item-price">₱2,000</p>
                <a href="#" class="buy-btn">Buy Now</a>
            </div>
            <div class="item">
                <img src="img/y11front.png" alt="Item 6">
                <p class="item-desc">VIVO Y11<br>Motherboard</p>
                <p class="item-price">₱2,000</p>
                <a href="#" class="buy-btn">Buy Now</a>
            </div>
            <div class="item">
                <img src="img/y11front.png" alt="Item 7">
                <p class="item-desc">VIVO Y11<br>Motherboard</p>
                <p class="item-price">₱2,000</p>
                <a href="#" class="buy-btn">Buy Now</a>
            </div>
            <div class="item">
                <img src="img/y11front.png" alt="Item 8">
                <p class="item-desc">VIVO Y11<br>Motherboard</p>
                <p class="item-price">₱2,000</p>
                <a href="#" class="buy-btn">Buy Now</a>
            </div>
            <div class="item">
                <img src="img/y11front.png" alt="Item 9">
                <p class="item-desc">VIVO Y11<br>Motherboard</p>
                <p class="item-price">₱2,000</p>
                <a href="#" class="buy-btn">Buy Now</a>
            </div>
            <div class="item">
                <img src="img/y11front.png" alt="Item 10">
                <p class="item-desc">VIVO Y11<br>Motherboard</p>
                <p class="item-price">₱2,000</p>
                <a href="#" class="buy-btn">Buy Now</a>
            </div>
            <div class="item">
                <img src="img/y11front.png" alt="Item 11">
                <p class="item-desc">VIVO Y11<br>Motherboard</p>
                <p class="item-price">₱2,000</p>
                <a href="#" class="buy-btn">Buy Now</a>
            </div>
            <div class="item">
                <img src="img/y11front.png" alt="Item 12">
                <p class="item-desc">VIVO Y11<br>Motherboard</p>
                <p class="item-price">₱2,000</p>
                <a href="#" class="buy-btn">Buy Now</a>
            </div>
        </div>
    </div>

    <div id="history" class="items" style="display: none;">
        <h2>TRANSACTION HISTORY</h2>
        <div class="item-grid">
            <div class="item">
                <img src="img/y11front.png" alt="Item 1">
                <p class="item-desc">VIVO Y11<br>Motherboard</p>
                <p class="item-price">Order ID: #32584</p>
                <p class="item-price">₱2,000</p>
                <a href="#" class="buy-btn" style="background-color: #f39c12;">To Ship</a>
            </div>
            <div class="item">
                <img src="img/UT.jpg" alt="Item 2">
                <p class="item-desc">UnlockTool Rent<br>6 Hours</p>
                <p class="item-price">Order ID: #325515</p>
                <p class="item-price">₱200</p>
                <a href="#" class="buy-btn" style="background-color: #3498db;">Pending Payment</a>
            </div>
            <div class="item">
                <img src="img/y11front.png" alt="Item 3">
                <p class="item-desc">VIVO Y11<br>Motherboard</p>
                <p class="item-price">Order ID: #32585</p>
                <p class="item-price">₱2,000</p>
                <a href="#" class="buy-btn" style="background-color: #CD5C5C;">Payment Unsuccessful</a>
            </div>
            <div class="item">
                <img src="img/imei.jpg" alt="IMEI Item 4">
                <p class="item-desc">Samsung FRP remove Worldwide By IMEI Only</p>
                <p class="item-price">Order ID: #32586</p>
                <p class="item-price">₱800</p>
                <a href="#" class="buy-btn" style="background-color: #2ecc71;">Success</a>
            </div>
        </div>
    </div>

    <script>
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
    </script>

    <script>
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    </script>

    <script>
        function performSearch(event) {
            event.preventDefault();
            const query = document.getElementById('searchQuery').value;
            alert('Searching for: ' + query);s
        }
    </script>

    <!--script>
        // Check if user is logged in and display login modal if not
        document.addEventListener('DOMContentLoaded', () => {
            const modal = document.getElementById('loginModal');
            modal.style.display = 'flex';

            // Display current credit balance
            displayCredit();
        });

        // Login function
        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const loginError = document.getElementById('loginError');

            const storedUser = localStorage.getItem('username');
            const storedPass = localStorage.getItem('password');

            if (username === storedUser && password === storedPass) {
                document.getElementById('loginModal').style.display = 'none';
                loginError.classList.add('hidden');
                displayCredit(); // Update credit display after login
            } else {
                loginError.classList.remove('hidden');
            }
        }

        // Function to create a new account
        function createAccount() {
            const newUsername = prompt('Enter a username:');
            const newPassword = prompt('Enter a password:');

            if (newUsername && newPassword) {
                localStorage.setItem('username', newUsername);
                localStorage.setItem('password', newPassword);
                alert('Account created successfully! Please log in.');
            } else {
                alert('Username and password cannot be empty.');
            }
        }

        // Display user's credit balance
        function displayCredit() {
            const credit = localStorage.getItem('credit') || 0;
            document.getElementById('creditBalance').textContent = credit.toFixed(2);
        }

        // Add or update credit
        function addCredit() {
            const currentCredit = parseFloat(localStorage.getItem('credit') || 0);
            const creditToAdd = parseFloat(prompt('Enter amount to add to your credit:', '0'));

            if (!isNaN(creditToAdd) && creditToAdd > 0) {
                const newCredit = currentCredit + creditToAdd;
                localStorage.setItem('credit', newCredit);
                displayCredit(); // Update the credit balance in the navbar
                alert(`Credit added! Your new balance is ₱${newCredit.toFixed(2)}`);
            } else {
                alert('Please enter a valid amount.');
            }
        }

        // Other functions
        function showTab(tabName) {
            alert(`Showing ${tabName} tab.`);
        }

        function performSearch(event) {
            event.preventDefault();
            const query = document.getElementById('searchQuery').value;
            alert(`Searching for: ${query}`);
        }
    </script-->
</body>
</html>

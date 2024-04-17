// script.js
function scanAndPay() {
    var amount = document.getElementById('amount').value;

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    // Dummy example: Display a confirm dialog
    var confirmed = confirm('Scan the QR code to make a payment of $' + amount);

    if (confirmed) {
        alert('Payment successful!');
    } else {
        alert('Payment canceled.');
    }
}

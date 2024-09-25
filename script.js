
let balance = 1000;


function updateBalance() 
{
    document.getElementById('balance').textContent = balance.toFixed(2);
}


document.getElementById('deposit-btn').addEventListener('click', function () 
{
    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        updateBalance();
        document.getElementById('deposit-amount').value = '';
    } else {
        alert("Please enter a valid deposit amount.");
    }
});


document.getElementById('withdraw-btn').addEventListener('click', function ()
 {
    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            updateBalance();
        } else {
            alert("Insufficient funds. You cannot withdraw more than your current balance.");
        }
        document.getElementById('withdraw-amount').value = '';
    } else {
        alert("Please enter a valid withdrawal amount.");
    }
});


updateBalance();

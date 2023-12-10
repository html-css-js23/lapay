// Select the purchase button and add an event listener
const purchaseButton = document.querySelector('.purchase-button');
purchaseButton.addEventListener('click', () => {
    // Toggle the display of the cart and checkout forms
    const cartForm = document.querySelector('.cart form');
    const checkoutForm = document.querySelector('.checkout form');
    cartForm.classList.toggle('hidden');
    checkoutForm.classList.toggle('hidden');
});

// Select the checkout form and add an event listener
const checkoutForm = document.querySelector('.checkout form');
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get the quantity and name from the form
    const quantity = document.querySelector('#quantity').value;
    const name = document.querySelector('#name').value;
    // Get the delivery or takeout option
    const delivery = document.querySelector('#delivery').checked;
    // Calculate the total cost
    const totalCost = quantity * 10; // Replace this with the actual cost of the item
    // Send the order details to the server using fetch
    fetch('https://example.com/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            quantity,
            delivery,
            totalCost
        })
    })
    .then((response) => response.json())
    .then((data) => {
        // Display a success message
        alert('Order placed successfully!');
    })
    .catch((error) => {
        // Display an error message
        alert('Error placing order: ' + error);
    });
});

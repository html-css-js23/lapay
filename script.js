// Select elements
const purchaseButton = document.querySelector('.purchase');
const cartButton = document.querySelector('.cart button');
const cart Ul = document.querySelector('.cart ul');
const quantityInputs = document.querySelectorAll('.cart li input');
const quantityButtons = document.querySelectorAll('.cart li button');

// Add event listener to purchase button
purchaseButton.addEventListener('click', () => {
    // Toggle cart display
    const cartSection = document.querySelector('.cart');
    cartSection.classList.toggle('show');

    // Add item to cart
    const itemName = 'Test Item1';
    const itemQuantity = 1;
    const cartItem = { name: itemName, quantity: itemQuantity };
    cartUl.innerHTML += `<li>${itemName} x ${itemQuantity}</li>`;

    // Update cart quantity inputs
    quantityInputs.forEach((input, index) => {
        input.value = itemQuantity;
    });
});

// Add event listener to cart button
cartButton.addEventListener('click', () => {
    // Toggle cart display
    const cartSection = document.querySelector('.cart');
    cartSection.classList.toggle('show');
});

// Add event listener to quantity inputs
quantityInputs.forEach((input) => {
    input.addEventListener('input', () => {
        // Update cart quantity
        const quantity = parseInt(input.value);
        const itemName = input.name;
        const cartItem = { name: itemName, quantity };
        cartUl.innerHTML = `<li>${itemName} x ${quantity}</li>`;
    });
});

// Add event listener to quantity buttons
quantityButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Update cart quantity
        const quantity = parseInt(button.previousSibling.value);
        const itemName = button.previousSibling.name;
        const cartItem = { name: itemName, quantity };
        cartUl.innerHTML = `<li>${itemName} x ${quantity}</li>`;
    });
});

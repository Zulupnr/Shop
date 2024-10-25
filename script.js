let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceDisplay = document.getElementById('total-price');
    const cartCountDisplay = document.getElementById('cart-count');

    // Clear current cart items display
    cartItemsContainer.innerHTML = '';
    
    // Display cart items
    cart.forEach((item) => {
        cartItemsContainer.innerHTML += `<p>${item.name}: $${item.price}</p>`;
    });

    // Update total price and cart count
    totalPriceDisplay.textContent = totalPrice.toFixed(2);
    cartCountDisplay.textContent = cart.length;
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    this.reset(); // Clear the form after submission
});

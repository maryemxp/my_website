let cart = [];
let total = 0;

function addToCart(productName, price) {
    // Add product to cart
    cart.push({ productName, price });
    total += price;
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    // Update cart count
    cartCount.textContent = cart.length;

    // Update cart items
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Update total price
    totalPrice.textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Simulate checkout process
    alert(`Checkout successful! Total amount: $${total.toFixed(2)}`);
    
    // Clear cart
    cart = [];
    total = 0;
    updateCartUI();
}

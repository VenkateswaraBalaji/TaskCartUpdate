/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// cart.js

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartSection = document.getElementById("cart-section");

  const cart = [];

  // Function to update the cart display
  function updateCartDisplay() {
    cartSection.innerHTML = ""; // Clear the current cart display

    // Loop through the cart items and display them
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <p>Price: $${item.price}</p>
          <button class="remove-from-cart" data-product="${item.id}">Remove</button>
        </div>
      `;

      cartSection.appendChild(cartItem);
    });
  }

  // Function to add an item to the cart
  function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
  }

  // Function to remove an item from the cart
  function removeFromCart(productId) {
    const index = cart.findIndex((item) => item.id === productId);
    if (index !== -1) {
      cart.splice(index, 1);
      updateCartDisplay();
    }
  }

  // Add event listeners to "Add to Cart" buttons
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.getAttribute("data-product");
      const product = {
        id: productId,
        name: "Product Name", // Replace with actual product name
        price: 40.00, // Replace with actual product price
      };
      addToCart(product);
      button.disabled = true; // Disable the button after adding to the cart
    });
  });

  // Add event listener to "Remove" buttons in the cart
  cartSection.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-from-cart")) {
      const productId = event.target.getAttribute("data-product");
      removeFromCart(productId);
      const addButton = document.querySelector(
        `.add-to-cart[data-product="${productId}"]`
      );
      if (addButton) {
        addButton.disabled = false; // Enable the corresponding "Add to Cart" button
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const plusButton = document.getElementById("plus");
  const minusButton = document.getElementById("minus");
  const numberDisplay = document.getElementById("number");
  const addToCartButton = document.getElementById("add-to-cart");
  const messageDisplay = document.getElementById("message");

  let quantity = 0;

  // Increment quantity
  plusButton.addEventListener("click", function () {
    quantity += 1;
    numberDisplay.textContent = quantity;
  });

  // Decrement quantity
  minusButton.addEventListener("click", () => {
    if (quantity > 0) {
      quantity -= 1;
      numberDisplay.textContent = quantity;
    }
  });

  // Add to cart
  addToCartButton.addEventListener("click", () => {
    if (quantity > 0) {
      messageDisplay.textContent = "Item added to cart";
      messageDisplay.classList.add("color-blue");
    } else {
      messageDisplay.textContent = "Invalid number";
      messageDisplay.classList.add("color-red");
      return;
    }
  });
});

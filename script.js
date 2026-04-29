const products = [
  { name: "Paracetamol", price: 20 },
  { name: "Cough Syrup", price: 80 },
  { name: "Vitamin C", price: 50 },
];

let cart = [];

const productDiv = document.getElementById("products");

products.forEach((p, i) => {
  productDiv.innerHTML += `
    <div class="card">
      <h4>${p.name}</h4>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${i})">Add</button>
    </div>
  `;
});

function addToCart(i) {
  cart.push(products[i]);
  document.getElementById("count").innerText = cart.length;
}

function openCart() {
  const cartBox = document.getElementById("cart");
  const list = document.getElementById("cartItems");

  cartBox.style.display = "block";
  list.innerHTML = "";

  let message = "Hello, I want to order:\n";

  cart.forEach(item => {
    list.innerHTML += `<li>${item.name}</li>`;
    message += item.name + "\n";
  });

  document.getElementById("orderBtn").href =
    "https://wa.me/916009601820?text=" + encodeURIComponent(message);
}

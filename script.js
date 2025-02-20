const products = [
    { id: 1, name: "Slim Fit Jeans", price: 59.99 },
    { id: 2, name: "Cargo Pants", price: 69.99 },
    { id: 3, name: "Chinos", price: 49.99 }
];

document.addEventListener("DOMContentLoaded", function () {
    let productSection = document.getElementById("products");
    products.forEach(product => {
        let div = document.createElement("div");
        div.innerHTML = `<h2>${product.name}</h2><p>$${product.price}</p><button onclick="addToCart(${product.id})">Add to Cart</button>`;
        productSection.appendChild(div);
    });
});

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

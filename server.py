from flask import Flask, request, jsonify

app = Flask(__name__)

cart = []

@app.route("/cart", methods=["GET", "POST"])
def handle_cart():
    global cart
    if request.method == "POST":
        item = request.json
        cart.append(item)
        return jsonify({"message": "Item added to cart", "cart": cart})
    return jsonify(cart)

@app.route("/checkout", methods=["POST"])
def checkout():
    global cart
    cart = []
    return jsonify({"message": "Checkout successful!"})

if __name__ == "__main__":
    app.run(debug=True)

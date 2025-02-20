#include <iostream>
#include <vector>
using namespace std;

struct Product {
    int id;
    string name;
    double price;
};

vector<Product> cart;

void addToCart(Product p) {
    cart.push_back(p);
    cout << p.name << " added to cart.\n";
}

void viewCart() {
    cout << "Your cart:\n";
    for (auto &p : cart) {
        cout << p.name << " - $" << p.price << endl;
    }
}

int main() {
    Product jeans = {1, "Slim Fit Jeans", 59.99};
    Product cargo = {2, "Cargo Pants", 69.99};

    addToCart(jeans);
    addToCart(cargo);
    viewCart();

    return 0;
}

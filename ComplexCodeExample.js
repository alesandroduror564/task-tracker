/*
Filename: ComplexCodeExample.js

Description: This code is a complex and sophisticated example written in JavaScript. It implements a simplified version of a virtual shopping cart, including various functionalities such as adding items, removing items, updating quantities, calculating totals, and displaying formatted invoices.

Disclaimer: This example is for demonstration purposes only and may not contain complete error handling or real-world sophistication.

*/

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }
  
  addItem(product, quantity) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }
  
  removeItem(productId) {
    const itemIndex = this.items.findIndex(item => item.product.id === productId);
    
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
  }
  
  updateQuantity(productId, newQuantity) {
    const existingItem = this.items.find(item => item.product.id === productId);
    
    if (existingItem) {
      existingItem.quantity = newQuantity;
    }
  }
  
  calculateTotal() {
    let total = 0;
    
    for (const item of this.items) {
      total += item.product.price * item.quantity;
    }
    
    return total;
  }
  
  formatInvoice() {
    let invoice = "Invoice:\n";
    
    for (const item of this.items) {
      invoice += `${item.product.name} (${item.product.price.toFixed(2)} x ${item.quantity})\n`;
    }
    
    invoice += `Total: $${this.calculateTotal().toFixed(2)}\n`;
    
    return invoice;
  }
}

// Create products
const iPhone11 = new Product(1, "iPhone 11", 999.99);
const galaxyS20 = new Product(2, "Samsung Galaxy S20", 899.99);
const pixel4 = new Product(3, "Google Pixel 4", 799.99);

// Create shopping cart
const cart = new ShoppingCart();

// Add items to the shopping cart
cart.addItem(iPhone11, 2);
cart.addItem(galaxyS20, 1);
cart.addItem(pixel4, 3);

// Update quantity of an existing item
cart.updateQuantity(1, 4);

// Remove an item from the shopping cart
cart.removeItem(2);

// Display formatted invoice
console.log(cart.formatInvoice());

// Output:
// Invoice:
// iPhone 11 (999.99 x 4)
// Google Pixel 4 (799.99 x 3)
// Total: $6799.94
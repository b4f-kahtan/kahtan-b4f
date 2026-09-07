// const person = {
//   name: "John",
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     country: "USA"
//   },
//   contact: {
//     email: "john@example.com",
//     phone: "555-1234"
//   }
// };
// console.log(JSON.stringify(person)); 
// console.log(person);
// person.address.city = "Los Angeles";
// console.log(JSON.stringify(person)); 
// console.log(person);

// class User {
//   constructor(name, email, age) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }

//   isAdult() {
//     return this.age >= 18;
//   }

//   updateEmail(newEmail) {
//     this.email = newEmail;
//   }
//   getInfo() {
//     return `Name: ${this.name}, Email: ${this.email}, is Adult: ${this.isAdult()}`;
//   }
// }

// const u1 = new User("John", "john@example.com", 30);
// const u2 = new User("Alice", "alice@example.com", 17);
// console.log(u1.isAdult()); 
// console.log(u1.getInfo()); 
// console.log(u2.isAdult()); 
// console.log(u2.getInfo()); 


class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    const existing = this.items.find(item => item.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  removeItem(productId){
    this.items = this.items.filter(item => item.product.id !== productId);
  }
  getItems() {
    return this.items.map(item => ({
      id: item.product.id,
      name: item.product.name,
      price: item.product.price,
      quantity: item.quantity
    }));
  }
}

const cart = new ShoppingCart();
cart.addItem({ id: 1, name: "Mouse", price: 29.99 }, 2);
cart.addItem({ id: 2, name: "Keyboard", price: 59.99 }, 1);
console.log(cart.getTotal());
console.log(cart.getItems());
cart.removeItem(1);
console.log(cart.getTotal());
console.log(cart.getItems());
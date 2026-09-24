let product = [{name: "Pen", price: 5, quantity: 5}, {name: "Book", price: 20, quantity: 4}, {name: "Laptop", price: 5000, quantity: 8}]
let itemName = "Pen"
for (let item of product) {
    if (itemName === item.name) {
        item.quantity += 10
    }
}

console.log(product)

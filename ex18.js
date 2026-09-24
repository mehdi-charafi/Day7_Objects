let product = [{name: "Pen", price: 5}, {name: "Book", price: 20}, {name: "Laptop", price: 5000}]
let total = 0;

for (let item of product) {
    total += item.price
}

console.log(total)
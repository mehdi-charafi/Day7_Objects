let product = [{name: "Pen", price: 5, quantity: 5}, {name: "Book", price: 50, quantity: 4}, {name: "Laptop", price: 5000, quantity: 8}]
let max = product[0];
let maxIndex = 0;

for (let i = 0; i < product.length; i++) {
    if (product[i].price > max.price) {
        max = product[i]
        maxIndex = i
    }
}

console.log(max)
console.log(maxIndex)


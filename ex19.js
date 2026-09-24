 let product = [{name: "Pen", price: 5, instock: true}, {name: "Book", price: 20, instock: false}, {name: "Laptop", price: 5000, instock: false}]
 let stock = [];

 for (let item of product) {
    if (item.instock == true) {
        stock.push(item)
    }
 }

 console.log(stock)
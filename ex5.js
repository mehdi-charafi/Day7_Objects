let item = {
    name: "Pen"
}
let value = "Price"
let found = false

for (let key in item) {
    if (item[key] == value) {
       
        found = true
    }
}

console.log(found)

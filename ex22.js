let students = [{ name: "Sara", age: 18 }, { name: "Jack", age: 20 }, { name: "Omar", age: 24 }]
let count = 0;

for (let student of students) {
    if (student.age >= 20) {
        count++
    }
}

console.log(count)
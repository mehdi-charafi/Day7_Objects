let students = [{ name: "Sara", age: 18 }, { name: "Jack", age: 20 }, { name: "Omar", age: 24 }]
let min = students[0]

for (let student of students) {
    if (student.age < min.age) {
        min = student
    }
}

console.log(min)
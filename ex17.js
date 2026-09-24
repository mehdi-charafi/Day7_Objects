let profiles = [{ id: 2, name: "Omar" }, { id: 3, name: "Max" }, { id: 4, name: "Luis" }]
function findById(list, id) {
    for (let item of list) {
        if (id == item.id) {
            return item
        }
    }
    return null
}

console.log(findById(profiles, 2))
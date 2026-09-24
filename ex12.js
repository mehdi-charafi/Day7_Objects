let profile = {
    name: "Luis",
    age: 17,
    email: "luis@gmail.com",
    isActive: true
}

let isValidProfile = (profile) => {
    return (profile.name != "" && profile.age > 0 && typeof profile.isActive == "boolean") 
}


console.log(isValidProfile(profile))
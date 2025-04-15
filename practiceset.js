let isDataReceived = new Promise((resolve, reject) => {
    let dataReceived = true
    if(dataReceived){
        resolve("Data fetched successfully!")
    }
    else{
        reject("Failed to fetch data")
    }
})
isDataReceived
    .then((message) => console.log(message))
    .catch((error) => console.log(error))

//ps-2
let isNumberGreaterThanTen = new Promise((resolve, reject) => {
    let num = 3
    if(num > 10){
        resolve("Number is valid.")
    }
    else{
        reject("Number is too small.")
    }
    
})
isNumberGreaterThanTen
    .then((message) => console.log(message))
    .catch((error) => console.log(error))

//ps-3
let isUserLoggedIn = new Promise((resolve, reject) => {
    let isLoggedIn  = false
    if(isLoggedIn){
        resolve("User is logged in.")
    }
    else{
        reject("User is not logged in.")
    }
    
})
isUserLoggedIn
    .then((message) => console.log(message))
    .catch((error) => console.log(error))

//ps-4

let isUserFound = new Promise((resolve, reject) => {
    //let user = { name: "Alice", age: 25 }
    if(user){
        resolve(user)
    }
    else{
        reject("User not found.")
    }
    
})
isUserFound
    .then((message) => console.log(message))
    .catch((error) => console.log(error))
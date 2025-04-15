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
    let user = { name: "Alice", age: 25 }
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

//ps-5

let resolveAfterTimeout = new Promise((resolve, reject) => {
    setTimeout(resolve(42), 2000)    
})
resolveAfterTimeout
    .then((message) => console.log(message))
    .catch((error) => console.log(error))

//ps-6

let rejectAfterTimeout = new Promise((resolve, reject) => {
    setTimeout(reject(500), 3000)    
})
rejectAfterTimeout
    .then((message) => console.log(message))
    .catch((error) => console.log(error))

//ps-7

let checkPassword = (password) => new Promise((resolve, reject) => {
    if(password == '12345'){
        resolve("Password accepted",)
    }
    else{
        reject("Invalid password")
    }
})
checkPassword('1345')
    .then((message) => console.log(message))
    .catch((error) => console.log(error))

//ps-8

let checkEmail = (email) => new Promise((resolve, reject) => {
    if(email.includes('@')){
        resolve("Valid Email")
    }
    else{
        reject("Invalid Email")
    }
})
checkEmail('sdsef@df')
    .then((message) => console.log(message))
    .catch((error) => console.log(error))

//ps-9

let fetchTemperature = (temp) => new Promise((resolve, reject) => {
    if(temp > 15){
        resolve("Temperature is 20°C")
    }
    else{
        reject("Temperature too low")
    }
})
fetchTemperature(20)
    .then((message) => console.log(message))
    .catch((error) => console.log(error))
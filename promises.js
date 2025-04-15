let foodOrder = new Promise((resolve, reject) => {
    let foodDelivered = true

    if(foodDelivered){
        resolve("Food arrival successful.")
    }
    else{
        reject("Food arrival was rejected")
    }
})

foodOrder
    .then((message) => console.log(message))
    .catch((error) => console.log(error))

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {return response.json()})
    .then((data) => console.log(data))
    .catch((error) => console.log("Something went wrong", error))



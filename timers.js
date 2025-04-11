//settimeout

function sayHi(name){
    console.log(`Hi, ${name}`)
}

setTimeout(sayHi, 5000, 'Ashiya')

console.log('Good morning')

for(let i = 0; i < 5; i++){
    setTimeout(() => console.log(`i === ${i}`))
}

setTimeout(() => console.log('Hello'), 2000)

/*

for(var i = 0; i < 5; i++){
    setTimeout(() => console.log(`i is ${i}`))
}

let i = 0;

const intervalId = setInterval(() => {
    console.log(`i is ${i}`)
    i++
    if(i === 4) {
        console.log(`${intervalId} is cleared`)
        clearInterval(intervalId)}
}, 500)*/

//both settimeout and setinterval return timerid
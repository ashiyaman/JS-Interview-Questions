//This method

/*let ask = {
    teacher: 'Ashiya',
    who: function() {
        console.log(this.teacher)
    }
}
console.log(ask)
ask.who()                   //implicit binding -> refers to object not property

//Explict binding

function greetingName() {
    let name = 'Shyam'
    console.log(this.greeting + ", " + name + "!")
}

let greeting1 = {
    greeting: 'Hello'
}

let greeting2 = {
    greeting: 'Namaste'
}

greetingName.call(greeting1)
greetingName.call(greeting2)*/

//This keyword

let person1 = {
    name: 'Ashiya',
    age: 32,
    printDetails: function(){
        console.log(this.name + " " + this.age)
    }
}

person1.printDetails()
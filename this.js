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

//using .bind

let name = {
    firstName: 'Ashiya',
    lastName: 'Amanulla'
}

let printFullName = function(age, phone) {
    console.log(this.firstName, this.lastName, age, phone)
}

printFullName.apply(name, [32, '12345'])

let printDetails = function(){
    console.log(this.name + " " + this.age)
}

let person1 = {
    name: 'Ashiya',
    age: 32   
}

let person1Detail = printDetails.call(person1)
console.log(person1Detail)

let person2 = {
    name: 'Rafeeq',
    age: 35
}

printDetails.call(person2)
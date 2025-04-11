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

let printDetails = function(city, designation){
    console.log(this.name + " " + this.age + " " + city + " " + designation)
}

let person1 = {
    name: 'Ashiya',
    age: 32    
}

let person2 = {
    name: 'Anish',
    age: 28
}

let printData = printDetails.bind(person1)
printData()

printDetails.apply(person1, ["Bangalore", "Developer" ])
printDetails.call(person2, "Chennai", "Tester")
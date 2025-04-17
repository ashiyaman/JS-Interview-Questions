var obj1 = {
    address : "Mumbai, India",
    getAddress:function(){
    console.log(this.address);
  }
}

var getAddress = obj1.getAddress;
var obj2 = {name:"akshay", address: "Bangalore"};
obj2.getAddress = obj1.getAddress
console.log(obj2)

console.log(["Banana", "Orange", "Apple", "Mango"].toString())

const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
console.log(fruits)

var obj = {
    name:  "Aman",
    getName:function(){
    console.log(this.name);
  }
}

var getName = obj.getName;
var obj2 = {name:"Akshay", getName };
obj2.getName();

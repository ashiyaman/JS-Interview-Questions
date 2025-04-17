const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const arr = [...array1, ...array2]
console.log(arr)
// Output: [1, 2, 3, 4, 5, 6]

const name = "Dave";
const age = 40;
const myData = { name, age };
console.log(myData);

const person = {
    fullName: function (city, country) {
      console.log(this.firstName + " " + this.lastName + "," + city + "," + country);
    }
  };
  
  const person1 = {
    firstName: "John",
    lastName: "Doe"
  };
  
  person.fullName.call(person1, "Oslo", "Norway");

  const person3 = {
    fullName: function (city, country) {
      console.log(
        this.firstName + " " + this.lastName + "," + city + "," + country
      );
    }
  };
  
  const person2 = {
    firstName: "John",
    lastName: "Dave"
  };
  
  person3.fullName.call(person2, ["Oslo", "Norway"]);
  

  const person4 = {
    firstName: "Mary",
    lastName: "Doe",
    display: function () {
      console.log(this.firstName + " " + this.lastName);
    }
  };
  
  setTimeout(person4.display, 3000);

  const person5 = {
    firstName: "neoG",
    lastName: "Camp",
    display: function () {
      console.log(this.firstName + " " + this.lastName);
    }
  };
  
  let display = person5.display.bind(person5);
  setTimeout(display, 3000);
  
  
  
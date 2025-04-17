//What does the following code output?

{
	var x = 2;
	var y = "2";
	console.log(x == y)
}

{
	var x = 3;
	var y = "3";
	console.log(x + y)
}

{
	var obj = { name: "Akanksha", surname: "Choudhary" };
	var obj = { name: "Tanvi", surname: "Priya" };
	console.log(obj);
}

{
	const obj1 = { color: "blue", item: "top" };
	var obj2 = { color: "yellow", item: "shirt" };
	console.log(obj2);
}

var myData = {
	name: "Parul",
	printName: function(){
        console.log(this)
		console.log(this.name)
	}
}
myData.printName();

var myData1 = {
	name: "Parul",
	printName: function(role){
		console.log(this.name, role)
	}
}
myData1.printName("PA");

function getFavColor(){
	var favColor2 = "Yellow";
  let favColor1 = "red";
}
getFavColor();
console.log(favColor2);




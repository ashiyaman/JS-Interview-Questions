const arr = [1, 2, 3, 4, 5, 6]

const newArray = arr.map(num => num + 1)
console.log(newArray)

const arr1 = arr.forEach(num => num + 2)
console.log(arr1)   	        //undefined

//var vs let vs const

function add(){
    const a  = 10;
    let isNum = true
    if(isNum){
        const a = 20
        console.log(a)
    }
    console.log(a)
}
add()
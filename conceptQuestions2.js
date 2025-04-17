console.log(isNaN("neoG"))  // Returns false*`

console.log(isNaN(false)) // Returns true*`

console.log(isNaN(undefined)) // Returns true*`

function calculateSum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(calculateSum(...numbers));
  
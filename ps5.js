const compressString = (str) => {
    if (!str) return "";

    let compressed = "";
    let count = 1;

    for(let i = 1; i <= str.length; i++){
        if(str[i] === str[i - 1]){
            count += 1
        }
        else{
            compressed += str[i - 1] + count
            count = 1
        }
    }

    return compressed
}

console.log(compressString("aaaabbccc")); // Output: a4b2c3




const urlify = (str) => {
	return str.split(' ').join('%20')
}

console.log(urlify("neog camp is back"));
// Expected Output: neog%20%camp%20%is%20%back

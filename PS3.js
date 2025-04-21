const sortString = (str) => {
    console.log(str.split('').sort().join(''))
}

const numOfVowel = (str, count = 0) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(const char of str){
        for(const vowel of vowels){
            if(char.includes(vowel)){
                count = count + 1
            } 
        }
        
    }
    console.log(count)
}

const convertToArray = (num) => {
    console.log(num.toString().split('').map(Number))
}

const resolvePromise = new Promise((resolve, reject) => {
    setTimeout(resolve('Resolved!'), 1000)
})

sortString('webmaster')
numOfVowel('No pain, no gain')
convertToArray(1234)

resolvePromise.then(result =>
    {console.log(result)})

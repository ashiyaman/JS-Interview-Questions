function x(){
    var a = 1
    function y(){
        console.log(a)
    }
    return y
}
let newfn = x() //y has access to its outer scope
console.log(newfn)
// function scoped/block scoped
// var a = 5
// if(a>4){
//     var b = 5*a
//     console.log(b);
// }
// console.log(b);

// Closures
function one() {
    let a = 5
    let b = 10
    function two() {
        let c = 1
        // console.log(a);
        function three() {
            console.log(a, b, c);
        }
        three()
    }
    two()
}
one()

// call stack and execution context example
var x = 1
a()
b()
console.log(x);
function a (){
    var x = 10
    console.log(x);
}

function b() {
    var x = 100
    console.log(x);
}

// block scoped 
if(true) {
    let b = 100
}
console.log(b)

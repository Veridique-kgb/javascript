let x = 5 
let y = 10
let z = x+y
console.log(z)//15

// non-reusable function
function add_numbers(){
    let x = 5
    let y = 10
    return x+y//15
}

let sum = add_numbers()
console.log(sum)

//reusable function 

function divide_numbers(x,y){
    return x/y
}
let quotient = divide_numbers(10000,334)
console.log(quotient)
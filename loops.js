//display numbers from 1 to 10
// for(let i=1; i<=10; i++){
//     console.log(i)
// }
// outputs
// 1++
// 2++
// 3++
// 4++
// 5++
// 6++
// 7++
// 8++
// 9++
// 10++
// 11
//dispaly numbers 300-200

for(let i=300; i>=200; i--){
    console.log(i)
}

//looping through arrays

let fruits = ["mango","apple","peach","orange","banana"]

//manualy
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4])

//making it simple with code

for(let i=0; i<=4; i++){
    console.log(fruits[i])
}

//displaying numbers from 1 to 10 with while

let i = 1
while(i<=10){
    console.log(i)
    i++
}

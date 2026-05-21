let person = {
    name:"jane Doe",
    aga:29,
    address:"123 kimathi st",
    "is employed":true
}

console.log(person)
console.log(person.name)//jane Doe
console.log(person["is employed"])
console.log(person["address"])

person.name = "Alice"
console.log(person)//[name:"Alice",age:29,address:"123 kimathi st","is employed":true]

console.log(Object.keys(person))//(4) ["name","address","is employed"]

console.log(Object.values(person))//(4) ["Alice",29,"123 kimathi st."true"]

console.log(Object.entries(person))//(4) [array(2),array(2),array(2),array(2)]

(2) ["name","Alice"]


(2) ["age",29]
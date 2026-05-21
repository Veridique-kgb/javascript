// Create an Array
// Create an array named colors with the following elements: 'red', 'green', 'blue'.

let colors = ["red","green","blue"]

// Access and Modify Array Elements
console.log(colors)

// Given the array colors, access the second element and change it to 'pink'. Then, display the modified array.

//replacing
colors[1]="pink"
console.log(colors)//["red","pink","blue"]

// Determine the Length of an Array. Given the array colors, determine its length and store it in a variable lengthOfColors. Then, display lengthOfColors.

// length
lengthOfColors = colors.length
console.log(lengthOfColors)

//Use .pop() Method
// Given the array colors, use the .pop() method to remove the last element from the array. Then, display the modified array.

//pop()
colors.pop()
console.log(colors)//["red","pink"]


// Combine Arrays
// Given two arrays arr1 and arr2, combine them into a single array combinedArray using the .concat() method. Then, remove the first element from combinedArray using the .shift() method. Finally, display the modified combinedArray.

arr1 = ["Aisha","Alice","kate","Queen"]
arr2 = ["Mark","Alex","Andrew","Kamau"]

//concat()
combineArry = arr1.concat(arr2)
console.log(combineArry)//["Aisha","Alice","kate","Queen","Mark","Alex","Andrew","Kamau"]

//shift()
combineArry.shift()
console.log(combineArry)//["Alice","kate","Queen","Mark","Alex","Andrew","Kamau"]

// Extract Subarray
// Given an array “sourceArray”, extract a subarray “extractedArray” from index 2 to index 4 using the .slice() method. Then, modify the extractedArray by replacing its elements with 'x', 'y', and 'z' using the .splice() method. Finally, display both the sourceArray and the modified extractedArray.

sourceArray = ["USA","England","France","Rwanda","Kenya","South Africa"]

//slicing()
extractedArray = sourceArray.slice(2, 5);

//splicing()
extractedArray.splice(0,3,"x","y","z")

console.log(sourceArray)//["USA","England","France","Rwanda","Kenya","South Africa"]
console.log(extractedArray)//["x","y","z"]


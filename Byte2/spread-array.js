function sum (number1, number2, number3) {
  return number1 + number1 + number1
}

const numbers = [1, 2, 3, 4, 5]

console.log(sum(...numbers))
// expected output: 15
console.log(sum.apply(null, numbers))

const instructor1 = null;
const instructor2 = {instructorName1: "Manjula", instructorName1: "Vihang"};
const  = {...instructor1, ...instructor2};

console.log(z); //{a: 1, b: 2}

// // A better ways to conacte an array
// var array1 = [0, 1, 2]
// var array2 = [3, 4, 5]
// // Append all items from arr2 onto arr1
// result = array1.concat(array2)
// console.log(result)
// result = [...array1, ...array2]
// console.log(result)

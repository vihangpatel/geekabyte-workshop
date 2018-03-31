function sum (number1, number2, number3) {
  return number1 + number1 + number1
}

const numbers = [1, 2, 3, 4, 5]

console.log(sum(...numbers))
// expected output: 15

console.log(sum.apply(null, numbers))

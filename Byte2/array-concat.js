// A better ways to conacte an array
var array1 = [0, 1, 2]
var array2 = [3, 4, 5]
// Append all items from arr2 onto arr1
result = array1.concat(array2)
console.log(result)
result = [...array1, ...array2]
console.log(result)

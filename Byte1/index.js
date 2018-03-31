/*
  Task 1: Replace var with let or const
  Task 2: Replace ES5 function with arrow function
*/

const message = (name1, name2) => {
  let concantMessage = 'Welcome to the first workshop at Geekabyte' + name1 + '&' + name2
  return concantMessage
}

module.exports = message

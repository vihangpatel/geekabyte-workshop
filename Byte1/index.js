/*
  Task 1: Change to template literals
*/

const message = (name1, name2) => {
  let concantMessage = 'Welcome to the first workshop at Geekabyte' + ' ' + name1 + ' & ' + name2
  return concantMessage
}

module.exports = message

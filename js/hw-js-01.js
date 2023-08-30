const numbers = [5, 14, 8, 20, 3, 11, 17, 4]

const filterNumber = numbers.filter(num => num > 10 && num % 2 == 0)
const result = filterNumber.reverse()
console.log(result);
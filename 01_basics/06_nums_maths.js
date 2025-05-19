const score = 400
console.log(score)

const balance = new Number(900)
console.log(balance)

console.log(balance.__proto__)
console.log(balance.toString())
console.log(balance.toFixed(2))

const otherNumber=1123.862347
console.log(otherNumber.toPrecision(3))

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'))
console.log(Number.EPSILON)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)


console.log(Math)
console.log(Math.PI)
console.log(Math.abs(-4325))
console.log(Math.round(4.3435,1))
console.log(Math.min(1,23,4,46))
console.log(Math.max(25,45,65,76))
console.log(Math.random())
console.log(Math.random()*100+1);

const min = 10
const max = 30

console.log(Math.floor(Math.random()*(max-min+1)))
const name = "anurag"
const repoCount = 50

// console.log(name+repoCount+"Value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
const gameName = new String("abcd-efgh")

console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(1))
console.log(gameName.indexOf('d'))

const newString = gameName.substring(0,3)
console.log(newString)

const anotherString = gameName.slice(-4,-1)
console.log(anotherString)

const newStringOne = "  ABCDEF " 
console.log(newStringOne.trim())

const url="https://abc.com/abc%20bcd"

console.log(url.replace('%20','/'))
console.log(url.includes("bc"))

console.log(gameName.split('-',2))
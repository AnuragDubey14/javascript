// array

const myArr = [0,1,2,3,4,5]

console.log(myArr[0])

const myHeros=["shaktiman","naagraaj"]

const myArr2=new Array(1,2,3,4)
console.log(myArr2)

//array methods

myArr.push(6) // add new element
console.log(myArr)
console.log(myArr.pop())

myArr.unshift(9) //insert at first position
console.log(myArr)

console.log(myArr.shift()) //pop first element

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))

const newArr=myArr.join()
console.log(typeof newArr)

//slice splice

console.log("A ",myArr)

const myn1=myArr.slice(1,3)
console.log(myn1)


const myn2=myArr.splice(1,3) // extract the element from 1 to 3 original array 
console.log(myn2)
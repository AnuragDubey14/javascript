// Primitive data type

// 7 types (call by value)
// string, Number, Boolean, null, undefined, Symbol, BigInt


// Reference (Non Primitive) type

// Arrays, Objects, Functions

// javascript dynamically typed language


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)

const bigNumber = 1445310n


const heroes=["shaktiman","naagraj","doga"]
let myObj={
    name:"anurag",
    age: 22
}

const myFunction = function(){
    console.log("hello world!")
}

console.log(typeof(myObj))
console.log(myObj.age)








// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory explanation
// stack (Primitive), Heap (Non - primitive)

let myYotubeName = "abcyoutubedotcom"

let anotherName = myYotubeName
anotherName="bcdyoutube.com"

console.log(anotherName);
console.log(myYotubeName);

let user={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo= user

userTwo.upi="abc@ybl"
console.log(user.upi)
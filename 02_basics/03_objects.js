// singleton object
//object.create


// object literals

const mySym=Symbol("key1")
const mySym2=Symbol("Key2")

const jsUser={
    [mySym]:"key1",
    name:"ABCD",
    age:10,
    location:"xyz",
    email:"abc@gmail.com",
    isLoggedIn:false
}

console.log(jsUser.email)

console.log(jsUser["email"])
console.log(jsUser[mySym])

jsUser.email="abcchat@gmail.com"
// Object.freeze(jsUser)
jsUser.email="ahbvab@hotmail.com"
console.log(jsUser.email)
console.log(jsUser)

jsUser.greeting=function(){
    console.log("Hello js user")
}

// console.log(jsUser.greeting)
console.log(jsUser.greeting())


jsUser.greetingTwo=function(){
    console.log(`Hello js user: ${this.name}`)
}
console.log(jsUser.greetingTwo())
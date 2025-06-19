
function sayMyName(){
console.log("A")
console.log("N")
console.log("U")
console.log("R")
console.log("A")
console.log("G")
}

// sayMyName()

function addTwoNumbers(number1,number2){ //parameters - number1, number2
    return number1+number2; 
}
// console.log(addTwoNumbers(3,4)); //argumnents 3,4


// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username="default"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Anurag"));
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){ //spread operator or rest operator ...
    return num1
}
// console.log(calculateCartPrice(2,3,4,5))

const user={
    username:"ABC",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
// handleObject({
//     username:"DEFGH",
//     price:200
// })

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray))
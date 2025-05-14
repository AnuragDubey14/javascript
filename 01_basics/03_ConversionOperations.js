let score = true

console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)

// "33" => 33
// "33abc" => Nan
// true => 1; false => 0

let isLoggedIn = ""
let BooleanIsLoggedIn = Boolean(isLoggedIn)

console.log(BooleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let StringNumber = String(someNumber)
console.log(typeof(StringNumber))


//**************************operations*************************

let value = 3
let negValue = -value

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "hello"
let str2 = " javascript"
let str3 = str1+str2;
console.log(str3);

console.log("1"+2); // 12
console.log(1+"2"); // 12

console.log("2"+1+2); //122
console.log(2+1+"2") // 32

 
console.log(+true); // 1
console.log(true+1); // 2

let num1, num2, num3

num1=num2=num3=2+2;
console.log(num1)

let gameCounter = 100
++gameCounter;
console.log(gameCounter)



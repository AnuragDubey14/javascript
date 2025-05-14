console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

console.log("2">1); //true
console.log("02">1); //true

// data type of variables should be same before comparison

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true

// === value equality check and datatype equality should also be check
console.log("2" === 2) //false
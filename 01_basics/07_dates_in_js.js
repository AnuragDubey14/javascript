let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.getDate())
console.log(myDate.getDay())
console.log(typeof myDate)

let myCreatedDate = new Date(2025,5,15)
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
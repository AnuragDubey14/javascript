let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.getDate())
console.log(myDate.getDay())
console.log(typeof myDate)

let myCreatedDate = new Date(2025,5,15)
console.log(myCreatedDate.toLocaleString())  //month is started from 0 in js

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getFullYear())
console.log(newDate.getMonth()+1)
console.log(newDate.getDate())

console.log(newDate.toLocaleString('default',{
    'weekday':'short'
}))
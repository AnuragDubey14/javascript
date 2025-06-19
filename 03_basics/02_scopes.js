
// var c=300
let a=300

if(true){
let a = 10
const b=20
console.log("INNER: ",a);

}


// console.log(a);
// console.log(b);
// console.log(c);


// NESTED SCOPES

function one(){
    const username="ABCD";
    function two(){
        const age=22;
        console.log(username)
        // return age 
    }
    two()
    // console.log(age)
}

one()
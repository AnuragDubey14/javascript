const marvel_heros=["thor","Ironman","Spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// newarray=marvel_heros.concat(dc_heros) //merge both arrays
// console.log(newarray)


// const allHeros=[...marvel_heros,...dc_heros] spread operator
// console.log(allHeros)

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usableAnotherArray=anotherArray.flat(Infinity)
console.log(usableAnotherArray)


console.log(Array.isArray("ABCDEF"))
console.log(Array.from("ABCDEF"))
console.log(Array.from({name:"ABCD"}))

let score1=200
let score2=300
let score3=400
console.log(Array.of(score1,score2,score3))


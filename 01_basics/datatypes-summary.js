// there are two types of datatypes in js 
//1.Primitive 2. non-primitive or referance type

// # Primitive
// 7 types : string, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id == anotherId);

//const bigNumber = 3456789987655433223789n



// # Reference (Non Primitive)
// 3 types : Array, Objects, Function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    Name: "vennela",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
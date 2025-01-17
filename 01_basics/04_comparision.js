//console.log(2>1);
//console.log(2>=1);
//console.log(2<1);
//console.log(2==1);
//console.log(2!=1);


//console.log("2" > 1);
//console.log("02" > 1);

// try to avoid these kind of comparisions (null and undefined)
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

/* 
The region is that an equality check == and compparision > < >= <= work differently.
Comparision convert null to a number , treating it as 0.
that's why (3) null >= 0 is true and (1) null > 0 is false 
*/

// ===

console.log("2" === 2);
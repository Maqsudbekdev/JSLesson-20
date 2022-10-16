// forEach
// map
// filter
// sort
// replace
// reverse
// push
// pop
// shift 
// unshift
// every 
// some


// splice
// slice
// find
// findIndex
// indexOf
// includes
// contains
// concat

const arr = ["spark " , "damas", "nexia" , "tico", "matiz"]
const twoCars = arr.slice()
console.log(twoCars);

const names  = ["jaloliddin" , "foruhbek", "sarvar", "maqsudbek", "saanjar"];
const selected = names.slice(0,3)
console.log(selected);
const selected2 = names.slice(2,3);
console.log(selected2);
const selected3 = names.splice(2,3)
console.log(names);
console.log(selected3);
const arr2 = ["Merc" , "BMW" , "Honda" , "Toyota" , "Nissan"]
const twoCars2 = arr2.splice(1,2);
console.log(twoCars2);


const arrC1 = [3,2,10,9]
const arrC2 = [10,4,2,11,18]

const j = arrC1.concat(arrC2)
console.log(j);
const k = [...arrC1 , ...arrC2]
console.log(k);

const users = [
    {name: "John", age:17},
    {name: "Doe", age:20},
    {name: "Smith", age:16},
    {name: "Brain", age:18}
]
 
const single17 = users.findIndex(u=>u.age===18);
users.splice(single17,1);
console.log(users);



const str = "Hello".indexOf("H");
console.log(str);

const str1 = "Samsung";
const first  = str1.indexOf("m");
const strArr = str1.split("");
strArr.splice(first,4).join("");
console.log(strArr.join(""));




const str3   = "Bye";
console.log(str3.includes("B"));


const arr4 = ["y" , "p" , "o"];
console.log(arr4.includes("M"));

const arr5 = ["hi", "bye" , "say"]
















const jaloliddin = [1,2,3]
const grow = jaloliddin.reduce((a,b)=> a*b)
console.log(grow);











const people = [
    {name: "jaloliddin" , age:17},
    {name: "sanjar" , age:14},
    {name: "umid" , age:21},
    {name: "jahon" , age:20}
]

const age17 = people.findIndex(n=>n.age===21)
people.splice(age17,1)
console.log(people);


const word = "Salom"
const bir = word.indexOf("a")
const yangiArr = word.split('')
yangiArr.splice(bir,2)
console.log(yangiArr.join(''));




const removeElem = ["Keep", "Remove", "Keep", "Remove", "Keep"]
for(j=1; j<removeElem.length; j++){
    
}






































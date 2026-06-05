const arr=[1,2,3,4,5,6,7,8,9] 
//yo bracket chai use garnu parxa
console.log(arr);

console.log(arr[1]);
const name=["ram","hari","shyam"]
console.log(name[2]);

arr.push(0)
console.log(arr);
//same stack wala concept 
arr.pop()
console.log(arr);

arr.unshift(0)
//yesle chaii num agadi rakhdinxa but not reliable for long num
console.log(arr);

arr.shift(3)
//agadi ko value lai pop gardinxa
console.log();

console.log(arr.includes(1));
//yo num array ma xa ki nai check garxa

console.log(arr.indexOf(4));
//num ko location dinxa

const newarr=arr.join()
console.log(arr);
console.log(newarr);
//join le chaii arr ko value newarr ma haldinxa
//but array chaii sting ma change hunxa

const sp=arr.slice(1,3)
console.log(sp);
//yesle chai 1 location dekhi 2 location samma ko value lai display garauxa

const sp1=arr.splice(1,3)
console.log(arr);

console.log(sp1);
//yesle chaii 1 dekhi 3 samma ko location ma vako data lai nikaldinxa array bata
//nikaleko data lai naya variable ma add gardinxa
//generally asked question in interview

const hero=["spiderman","superman","batman"]

const wep=["chappal","jutta"]
hero.push(wep)
console.log(hero);
console.log(hero[3][1]);

hero.concat(wep)
console.log(hero);
//push ra concat similar hoo 
//push ma array vitra array banxa concat ma chai naya array ma banauxa
const shero=hero.concat(wep)
console.log(shero);
//yeslee eutai array ma haldinxaaa but not efficient 

const allhero = [...hero, ...wep]//... le seperate garne kam garxa
console.log(allhero);
//yesle ni eutai array ma haldina and this is efficient

const newarray=[1,2,3,[4,5,6],7,[6,7]]
const normal=newarray.flat(3)
console.log(normal);
//yesle chaii multuple array lai euta ma merge gardinxa

console.log(Array.from("swornim"));
//yesle chaii object,string,num lai array ma convert gardinxa

console.log(Array.from({name:"swornim"}));
//yesto case ma chai array empty aauxa kina vane yesma declared xaina ki kun wala laii array ma rakhne ho
//name=keys and swornim=string, diff types

let a=122
let b=232
let c=876
console.log(Array.of(a,b,c));
//diff data lai euta array ma rakhnee














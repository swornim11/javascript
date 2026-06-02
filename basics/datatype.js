//primitive datatype
// alert(abuii)  yo node js ma chaldaina browser ma matra chalxa
console.log("Mr.swornim maharjan")
console.log(23+34)

let name="swornim"
let age=19
let isloggedin= false  //boolean

/*
number
bigint yo chaii dheraii integer use garne bela use hunxa
string= ""
boolean => true/false
null; yesto ni garna mildo raixaaa, yesle chaii empty xa vanera bujhauxa
undefined
symbol; unique
*/
//object
console.log(typeof("swornim")) //yesle chai yo k ho vanera dekhauxa jastai int string bla bla..
console.log(typeof(null)) //sabai data type ma use hunxa
console.log(typeof undefined) 
console.log(typeof 123)

//Big int 
let bigint=2835262763827n
console.log(bigint);
//lamo number ko paxadi n rakhyo vane datatype automatic big int hunxa
//else error aauxa

const id=Symbol('123')
console.log(typeof id); //Symbol
console.log(id);



//Reference datatype (non-primitive datatype)
//array ,objects, function

const tt=["dogesh","kirish"];
let obj={  //let garda ni hunxa nagarda ni hunxa
    name: "swornim",
    age:19,
}

//function
const myFunction=function(){
    console.log("hello world");
    
}
console.log(myFunction);
console.log(typeof myFunction);
//non-primitive ko datatype sabai ko function nai auxa

/*
stack -primitive datatype
heap- nonprimitive datatype
*/
//for stack
let name1="Mr.swornim"
let surname= name1
surname="maharjan"//so  LIFO
console.log(name1);
console.log(surname);  //last input maharjan vayo so it prefer maharjan 


//heap
let person1={
    fullname: "Swornim Mrz",
    address: "khokana"
}
let person2=person1;
console.log(person2);

person2.fullname="swornim maharjan"
console.log(person1);
console.log(person2);
//so according to output, heap ma chaii dubaii copy as well as the original ma data change hudo rahexa
//whereas stack ma copy wala ma matra change hunthyo











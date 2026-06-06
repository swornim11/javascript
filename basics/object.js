//objest literals

const sym=Symbol("key")
//if object vitra symbol add garnu paryo vane
const user={ //{}yeslai naii object vanxa
    name:"swornim",
    age:19,
    [sym]:"mykey",
    //big bracket use garena vane symbol bandaina, string banxa
    addr:"khokana",
    email:"swornimmaharjan020@gmail.com",
    isloggedin:false,
    lastlogin:["sunday","monday"]

}
console.log(user.email);
console.log(user["email"]);
//yesarii ni dina milxa cuz email,name haru sabai string ho
console.log(user[sym]);
//display garna lai pani bracket nai use garnu parxa

console.log(typeof user.sym);

user.email="swornim@gmail.com"
console.log(user.email);
//"=" use garera object vittra ko data change ghunxa

//Object.freeze(user);
//yesle chaii object lai freeze pardinxa so that kei change garna khojeni change hudaina
user.email="jhasgfdba@gmail.com"
console.log(user["email"]);

console.log(user);
//freeze garesii kei change hudaina so make sure to unfreeze
user.greeting=function(){
    console.log("hello world");
    //yesko output normal hello world auaxa
};
//greeting is simply used to greet
user.greetingTwo=function(){
    console.log(`hello world,${this.name}`);
    //yesko output chai hello world,swornim vanera auxa
};
console.log(user.greeting());
console.log(user.greetingTwo());

//const tinderuser=new Object() 
//yo dueta ma dubai same ho jun use garda ni hunxa 
//mathi ko walai chai singleton object
const tinderuser={}//non-singleton object

tinderuser.id="12"
tinderuser.name="ram"
tinderuser.isloggedin=false

console.log(tinderuser);
const reguser={
    email:"ram@gmail.com",
    fullname:{
        username:{
            firstname:"swornim",
            lastname:"maharjan"
        }
    }
}
console.log(reguser.fullname.username.firstname);
//console.log(reguser.fullname?.username?.firstname);
//? yesle chai if else wala situation garxa tyo xa ki nai check garera janxa

//obj merging
const ob1={
    1:"a",
    2:"b"
}
const ob2={
    3:"c",
    4:"d"
}
//const ob3={ob1,ob2} //yesle dubaii object xutta xuttai display garauxa

//const ob3=Object.assign(ob1,ob2);
//yesle chaiii dubai object eutaii mai merge garauxa
//tara yesto garda ob1 ma ob2 ko value ayera basxa so 

//const ob3=Object.assign({},ob1,ob2);
//yesle chaii sabai object ko value chai euta random empty object ma rakhdinxa
//so that aru object ma keiii changes nahos

const ob3={...ob1, ...ob2}//array ma jastai
//yesle chaii split garera ob3 ma haldinxa without change
console.log(ob3);
console.log(ob1);

//array vitra multiple object pani banauna milxa
const arr=[
    {
        name:"asbca",
        email:"akwdh@gmail.com"
    },
    {
        name:"sadfdf",
        email:"akasdah@gmail.com"
    },
    {
        name:"dfgbd",
        email:"sdfsafh@gmail.com"
    }
]
console.log(arr);
console.log(arr[1].name);

console.log(Object.keys(tinderuser));
//yesle chaii tinderuser vanne object ko sabai key dinxa

//yesari nai similarly value ko paniii display garauna milxa
console.log(Object.values(tinderuser));
//yo use garda chaii datatype changes to array

console.log(Object.entries(tinderuser));
//yesle chaii key ra value dubai display garauxa

console.log(tinderuser.hasOwnProperty('id'));
//yesle chaii object vitra yo key xa ki nai check garxa

const course={
    courcename:"js",
    price:"9898",
    courseinstructor:"swornim"
}
const {courseinstructor:inst}=course
//yedii name lamo xa vane teslaii feri sano ma ni change garna milxa
//known as object destructure
console.log(inst);

//aps=afno kam aru lai garaune
/*type of aps
1.object
{
    name:"swornim",
    c.name:"html"
}
2.array
[
{},
{},
{}
]  
used in json*/

















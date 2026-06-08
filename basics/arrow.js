const user={
    username:"swornim",
    price:9898,
    welcomemessage:function(){
        console.log(`${this.username} , welcome to website`);
        //this le just current value dinxa
        console.log(this);
        
    }
}
console.log(user.welcomemessage());

//console.log(this); //yesle chaii empty object dinxa, cuz this ma kei value hudaina

function smth(){
    //console.log(this); //yesle chaii this ko vitra k k xa sab dekhauxaaa, k k herna milxa..
    
}
//smth()

function a(){
    name:"swornim"
    console.log(this.name);
    //yesarii rakhyoo vane undefined aauxa
}
a()

const addtwo=(num1,num2) => { //array function
     return num1+num2
}
console.log(addtwo(4,2))

const subtwo=(num1,num2) =>(num1+num2)//known as paranthysis
//yesari rakhyo vane return garirakhnu pardaina
//direct garna milxa
console.log(subtwo(4,1));

//tala ko chaii a short revision..

const array=[2,43,23]
console.log(array);

const obj={
    name:"swornim",
    age:19
}
console.log(obj);
console.log(obj.name);

function fun(){
    myname="swornim"
    age=19
    console.log(`my name is ${myname} and my age is ${age}`);
    
}
fun()

function add(num1,num2){
    return num1+num2
}
console.log(add(4,3));


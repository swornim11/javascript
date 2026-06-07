let a=10
const b=20
//var c=30 //dont use var
//var le scope lai matlab gardaina so js ma var use hudaina

if(true){
    //condition vitra ko lai chai block scope
    let a=238
    console.log("block scope 'a'=",a);
    
}
//condition vanda bahira lai global scope vanxa 

console.log(a);
console.log(b);
//console.log(c);

function one(){
    const username="swornim"
    function two(){
        const web="youtube"
        console.log(username);
        
    }
    //console.log(web); //web function ko bahira vayea error aauxa

    two()
    
}
one()
//so in conclusion function vitra ko print hunxa tara function haira gayepaxii error aauxa

if (true){
    const username="Mr swornim"
    if(username=="Mr swornim"){
        const web="facebook"
        console.log(username+web);
        
    }
    //console.log(web); yo run hudaina cuz yesko scope already end vaisakyo, (function bahira)
    
}
//console.log(username); yo pani same

console.log(addone(5));
//function use garda print jata garda ni kei error aaudaina
function addone(num){
    return num+1
}

//but function variable ma halyo vane chai function paxi matra print garna pauxa
//else error aauxa
const addtwo=function(num){
    return num+2
}
console.log(addtwo(5));






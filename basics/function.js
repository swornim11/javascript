function myname(){
    console.log("S");
    console.log("W");
    console.log("O");
    console.log("R");
    console.log("N");
    console.log("I");
    console.log("M");
}
//definaiton of function
myname() //function ma print yesari garxa

function add(num1,num2){
    console.log(num1+num2);
    
}

function sub(n1,n2){
    let result=n1+n2
    return result
}
const result=sub(5,2)
console.log("sub=",result);
//jun method le garda ni hunxa
console.log("subtraction=",sub(8,3));

function mul(n1,n2){
    return n1*n2;
}
console.log("multiplication=",mul(5,5));
//afnai tarika le garna milxa
//bujhepaxi jun method use garda ni hunxa similar to C

function loginuser(username){
    //yesmaii username="abc" name define gardiyo vane if condition vitra kahila jadaina
    //ani console ma username ko arko data ni deko xa vane overwrite gardinxa
    if(username==undefined){ // !username,yesari ni lekhna milxa
        console.log("please enter a username");
        return
        //return garyo vane, yo if statement true vayepaxi tala nai jadaina
        //use garena vane yo conditino true huda ni tala ni janxa
    }
    return `${username} just logged in`
    
}
console.log(loginuser("swornim"))
//output: swornim just logged in
console.log(loginuser());
//output: please enter a username,


 

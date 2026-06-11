//for loop
let a=0
while(a<=10){
    console.log(`the number is ${a}`);
    a =a+2
    
}
let array=['ram','hari','shyam']
let arr=0
while(arr<array.length){
    console.log(array[arr]);
    arr=arr+1
}

//do while loop
let score=1
do {
    console.log(`score is ${score}`);
    score++
    
    
} while (score<=10);

//for of
const ar=[1,2,3,4,5]
for(const num of ar){
    console.log(num);
    
}
//easier that while or do while loop

const greeting="hello world"
for(const greet of greeting){
    console.log(`here we go again ${greet}`);
    //hello world ko harek character ek ek choti print hunxa
}


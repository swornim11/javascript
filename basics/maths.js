const score=298
console.log(score);


const balance = new Number(100)
console.log(balance);
//number=100 vanera dekhauxa

console.log(balance.toString());
//yesle chai value string ma change gardinxa

console.log(balance.toFixed(2));
//decimal paxi ko dueta number dinxaaa
//ahila 100 paxi kei xaina so decimal paxi 00 haldinxa

const num=123.762
console.log(num.toPrecision(3));
//yesle chai round off gardinxa

const cur=100000
console.log(cur.toLocaleString('en-NP'));
//yesle chaii number system anusar change gardinxa
//output=100,000

//maths ko diff sign haru ni use garna milxa as a function/pre-defined 
//jastai pi sin tan square root
console.log(Math.abs(-3));
console.log(Math.ceil(3.1));
//ceiling valuee dinxa
console.log(Math.round(4.7));

console.log(Math.max(3,2,5,6,2,1,4,9,4));
//yeta vako data ko max value dinxaaa
//similarly min ko pani xa

console.log(Math.random());
//yesle chai random value dinxa 0-1 ko bich ma 
console.log(Math.random()*10);
//yesle chai 0-1 lai 0-9 ko random numb ma convert gardinxa

//aba ferii hamlai decimal ma chaidaina vaneee
console.log(Math.floor(Math.random()*10));
//yesle chaii decimal number lai hataidinxa ani 0-9 samma ko num matra dinxa

//if hamlai aba 10-20 ko bich ko num chaiyo vane
const min=10
const max=20
console.log(Math.floor((Math.random()*(max-min+1))+10));

//aba for example dice ko lagi
console.log(Math.floor((Math.random()*6)+1));  //situation anusar  ni adjuust garnu pardo raixa













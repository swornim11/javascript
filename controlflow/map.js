//map
const map=new Map()
map.set('np',"nepal")
map.set('us',"usa")
console.log(map);

for (const key of map){
    console.log(key);
    //xutta xuttai aauxa usa ra nepal
}

for (const [key,value] of map){
    console.log(key,':-',value);
    //array bata bahira print gardinxa
}

//for object
const object={
    js:'javascript',
    cpp:'C++',
    py:'python'
}
for(const key in object){
    console.log(key);
    //yesle js cpp py haru print gardinxa
}
for(const key in object){
    console.log(object[key]);
    //yesle js cpp py haru ko fullform print gardinxa
}
const program=["js","css","python","c"]
for(const key in program){
     console.log(program[key]);
     
}

const name=["ram","hari","shyam"]
name.forEach(function(val){
    console.log(val);
    
})
    
function printme(item){
    console.log(item);
    
}
name.forEach(printme)
//yesle simply print garne kam garxaaa
//kind of extra but kam aauxa

const mycode=[{ //object inside array
    lang:"java",
    file:"js"
},
{
    lang:"python",
    file:"py"
},
{
    lang:"css",
    file:"c++"
}] 
for (const key in mycode){
    console.log(mycode[key]);
    //object ko data dinxa
}
//dubai le same output dinxaaa
//diff method
mycode.forEach(function(val){
    console.log(val);
    
})
const coding=["js","ruby","java","js"]
const value=coding.forEach((item) =>{
    //console.log(item);//direct yesari rakhda ni vayo or
    return item

})
console.log(value); //yesari return garera garda ni vayo

const mynum=[1,2,3,4,5,6,7,8]
const newnums=mynum.filter((num)=>num>5)
console.log(newnums);//greater than 5 value dinxa

//for scope
const nnum=mynum.filter((num)=>{
    return num<4
})
console.log(nnum);
//yo method chai multiple object inside array wala situation ma kaam aauxa eg
const book=[
    {
        name:"maths",price:900
    },
    {
        name:"english",price:800
    },
    {
        name:"nepali",price:500
    }
];
let bookuser=book.filter((bk)=> bk.name==="maths")
console.log(bookuser);


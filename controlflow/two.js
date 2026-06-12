const mynums=[1,2,3]
const mytotal=mynums.reduce(function(acc,currval){
console.log(`acc: ${acc} and currval:${currval}`);
return acc+currval

},0) //,0 nalekhda ni hunxa tara kahila kaii kunai number bata suru garna man xa vane yesari garne
console.log(mytotal);
//simply sabai number ko addition

//yo multiple object ma pani kam aauxa eg

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
const sum= book.reduce((acc,item)=> acc+ item.price,0)
console.log(sum);

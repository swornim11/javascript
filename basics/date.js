let mydate= new Date()
console.log(mydate);
//date ko lafi but not readable

console.log(mydate.toString());
//full data dinxa

console.log(mydate.toDateString());
//name ma dinxa clear

console.log(mydate.toLocaleString());
//date re time dinxa

console.log(mydate.toLocaleTimeString());
//yesle chai time matra dinxa
//interview question, date is a object
console.log(typeof mydate);

//aru date pani output ma dekhauna milxa let garera
let ndate=new Date(2026,0,12) //months chai 0 bata suru hunxa so 0=jan
console.log(ndate.toDateString());
//yesle chaii hamlai chaine date dinxa

console.log(Date.now());
//yesle ahila ko time laii mili-seconds ma dinxa

console.log(Date.now()/1000);
//yesle chai second ma dinxa
console.log(Math.floor(Date.now()/1000));
//yesle chai second ma dinxa decimal hatayera

let newdate=new Date()
console.log(newdate.getTime());
console.log(newdate.getFullYear());
console.log(newdate.getDay());
//yesle chaii euta single data matra dinxaaa
//day, time,year,month bla bla
console.log(newdate.getMonth()+1);
//months ma chai +1 garnu parxa cuz months computer le 0 dekhi count garnu parxa















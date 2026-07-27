const clock =document.getElementById('clock')
//const clock = document.querySelector(#'clock')  yo use garda ni hunxa

let date = new Date();
console.log(date.toLocaleDateString());

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)

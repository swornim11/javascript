const buttons= document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){ //button ma hune kam
    console.log(button)
    button.addEventListener('click',function(e){//event, k kam garne ho dekhauxa
        //yesma maila click ko satta mouseover halyo vane curser le xoko color aauxa
      console.log(e);
      console.log(e.target);
      if(e.target.id ==='grey'){
        body.style.backgroundColor = e.target.id; //simply 'grey'
      }//yesle chaii grey color ma thichyo vane screen grey color ma convert gardinxa
      //so similarly
      if(e.target.id ==='white'){
        body.style.backgroundColor = e.target.id; //simply 'white'
      }if(e.target.id ==='blue'){
        body.style.backgroundColor = e.target.id; //simply 'blue'
      }if(e.target.id ==='yellow'){
        body.style.backgroundColor = e.target.id; //simply 'yellow'
      }
      if(e.target.id ==='red'){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id ==='pink'){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id ==='green'){
        body.style.backgroundColor = e.target.id;
      }

    })
});
//hello hi how r uh i am fine thank you
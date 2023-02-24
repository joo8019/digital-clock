function updateTime(){
let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let am = document.getElementById("am");
    
    if(hours >= 12){
        am.innerHTML = "PM";
    }else{
        am.innerHTML = "AM";
    }
   let greeting=document.getElementById("greeting");


    if(hours>6 && hours<=11){
        greeting.innerText="GOOD MORNING!!";
     }
     if(hours>11 && hours<16){
        greeting.innerText="GOOD AFTERNOON !!";
     }
     
     if(hours>=16 && hours<20){
        greeting.innerText="GOOD EVENING!!";
     }
     
     if(hours>=20 && hours<24){
        greeting.innerText="GOOD NIGHT!!";
     }
     if(hours> 12){
         hours = hours -12;
     }


    document.getElementById("hr").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;

}
setInterval(updateTime,1000);

       let button = document.getElementById("button");
       button.addEventListener("mouseover", function () {
           this.innerText = "Party Time";
       })
       button.addEventListener("mouseout", function () {
           this.innerText = "Set Alarm";
       })

      

  



let date=new Date();
let hours=date.getHours();
let greeting=document.getElementById("greeting");
console.log(greeting)



button.addEventListener("click", function(){
    //    let dateTime = new Date();
    //    let hours = dateTime.getHours();

       let wakeup = document.getElementById("wakeup");
       let lunch = document.getElementById("lunch");
       let evening = document.getElementById("evening");
       let night = document.getElementById("night");
       if(parseInt(wakeup.value)===hours){
           document.getElementById("message").innerText = "GRAB SOME HEALTHY BREAKFAST!!!";  
           document.getElementById("img2").style.backgroundImage= "url('./Component30 - 1(1).svg')";
       }

      
       else if(parseInt(lunch.value)===hours){
           document.getElementById("message").innerText = 
           "LET'S HAVE SOME LUNCH !!"; 
           document.getElementById("img2").style.backgroundImage="url('./afternoon.svg')"; 
       }
       else if(parseInt(evening.value)===hours){
        document.getElementById("message").innerText = 
        "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"; 
        document.getElementById("img2").style.backgroundImage="url('./evening.png')";  
    }

    
    else if(parseInt(night.value)===hours){
        document.getElementById("message").innerText = 
        "CLOSE YOUR EYES AND GO TO SLEEP";  
        document.getElementById("img2").style.backgroundImage="url('./sleep.jpg')"; 
    }

    let timing=document.getElementsByClassName("timing");
    timing[0].innerText=wakeup.options[wakeup.selectedIndex].text
    timing[1].innerText=lunch.options[lunch.selectedIndex].text
    timing[2].innerText=evening.options[evening.selectedIndex].text
    timing[3].innerText=night.options[night.selectedIndex].text
        })

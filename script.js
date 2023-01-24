function startgame(){
    pickthimble();
    setTimeout(shuffling,6000);
    
}

function getrandom(){
    let random = Math.floor(Math.random()*3);
    return random;
}

function pickthimble(){
    document.getElementById("playbtn").style.pointerEvents - "none";
    let random = getrandom();
    let thimble = document.getElementById(`thimble${random}`);
    let ball = document.getElementById("thimbleball");

    ball.setAttribute("class",`thimble_ball-position-${random}`);

    thimble.classList.add("thimbleup");

    setTimeout(function(){
        thimble.classList.remove("thimbleup");
    },3800);

    setTimeout(function(){
        thimble.classList.remove(`thimble_ball-position-${random}`);
    },4300);
}

let counter = 0;
let shuffle;

function enablethimbles(){
    let remove = document.getElementsByClassName("thimble");

    for(i=0; i < remove.length; i++){
        remove[i].removeAttribute("disabled");
  }
}

function disablethimbles(){
    let add = document.getElementsByClassName("thimble");
    for(i=0; i < add.length; i++){
        add[i].setAttribute("disabled","disabled");
    }
}

function shufflethimble(){
    let random1 = getrandom();
    let random2 = getrandom();

    if (random1 != random2){
        let thimble1 = document.getElementById(`thimble${random1}`);
        let thimble2 = document.getElementById(`thimble${random2}`);

        let tempclass1 = thimble1.getAttribute("class");
        let tempclass2 = thimble2.getAttribute("class");

        thimble1.setAttribute("class", tempclass2);
        thimble2.setAttribute("class", tempclass1);
        
        counter = counter + 1;

        if(counter > 14){
        clearInterval(shuffle);
        reset();
        counter = 0;
        enablethimbles();

        
    
    }}
    else{
        shufflethimble();
    }
}

function shuffling(){
    shuffle = setInterval(shufflethimble,500);
    }

function selectedthimble(x){
    disablethimbles();
    let random = getrandom();
    let winningthimble = document.getElementById(`thimble${random}`);
    let selectedthimble = document.getElementById(`${x}`); 
    let ballpos = document.getElementById(`thimbleball`);
    
    ballpos.setAttribute("class", `thimble_ball-position-${random}`);

    selectedthimble.classList.add("thimbleup");
     
    setTimeout(function(){

    if(winningthimble != selectedthimble){
        setTimeout(function(){
            selectedthimble.classList.remove("thimbleup");
               },2000)
    setTimeout(function(){
    winningthimble.classList.add("thimbleup");
       },2500)
    alert("perdu!!! lol");
    
    setTimeout(function(){
        winningthimble.classList.remove("thimbleup");
           },3000)
    
           setTimeout(function(){
            
               },4500)

               document.getElementById("playbtn").style.pointerEvents - "all";

   }

   else{
    alert("vous avez gagner!!!");
    setTimeout(function(){
selectedthimble.classList.remove("thimbleup");
},2000)

   setTimeout(function(){
    
       },2500)

document.getElementById("playbtn").style.pointerEvents - "all";

   }


    },3500)


}

function reset(){
    document.getElementById("thimble0").setAttribute("class", "thimble thimble0");
    document.getElementById("thimble1").setAttribute("class", "thimble thimble1");
    document.getElementById("thimble2").setAttribute("class", "thimble thimble2");
    
}


function rollDice (){
    var diceOne = Math.floor(Math.random()*6)+1;
    var diceTwo = Math.floor(Math.random()*6)+1;
      
    document.getElementById("bulletNumber").removeAttribute("class");
    document.getElementById("bulletNumber").classList.add("bullet"+diceOne);
    document.getElementById("bulletNumberTwo").removeAttribute("class");  
    document.getElementById("bulletNumberTwo").classList.add("bullet"+diceTwo);
      
      
    
    console.log (diceOne);
    console.log (diceTwo);
    
    if (diceOne === diceTwo) {
      document.querySelector(".win-text p").innerHTML="It's a tie!";
      document.querySelector(".diceOne h1").innerHTML=diceOne;
      document.querySelector(".diceTwo h1").innerHTML=diceTwo;
    } else if (diceOne > diceTwo) {
      document.querySelector(".win-text p").innerHTML="First dice wins!";
        document.querySelector(".diceOne h1").innerHTML=diceOne;
      document.querySelector(".diceTwo h1").innerHTML=diceTwo;
    }
    else {
      document.querySelector(".win-text p").innerHTML="Second dice wins!";
        document.querySelector(".diceOne h1").innerHTML=diceOne;
      document.querySelector(".diceTwo h1").innerHTML=diceTwo;
    }
    }
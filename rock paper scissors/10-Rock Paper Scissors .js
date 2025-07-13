 let results=
     JSON.parse(localStorage.getItem('results'));
     if(!results){ results={
        wins:0,
        loses:0,
        ties:0
     };

     } 
     
 function updateScore(){
    document.querySelector('.js-score').innerHTML=`Wins: ${results.wins}, Loses: ${
    results.loses}, Ties: ${
    results.ties}`
 }
     updateScore();
    
    
      document.querySelector('.js-score').innerHTML=
`Wins: ${results.wins} Loses: ${results.loses} 
 Ties: ${results.ties}`;



        function playGame(playerMove){ 
           pickComputerMove(); 
           let playermoveimg='';
        let result='';
             if(playerMove==='Scissors')
             {if(computerMove==='Scissors') {result='Tie';
             }
 if(computerMove==='Paper') {result='You Win';
   }
 if(computerMove==='Rock') {result='You Lose';
   
 }

}
 else if(playerMove==='Paper')
             {if(computerMove==='Scissors') {result='You Lose';
            }
 if(computerMove==='Paper'){ result='Tie';
    
 }
 if(computerMove==='Rock'){
    result='You Win';
    
 } 

 }
else{if(computerMove==='Scissors'){result='You Win';
   
} 
 if(computerMove==='Paper') {result='You Lose';
   
 }
 if(computerMove==='Rock') {result='Tie';
   
 }}
 if(result==='You Win') {results.wins+=1;}
 if(result==='You Lose') {results.loses+=1;}
 if(result==='Tie') {results.ties+=1;}
 document.querySelector('.js-result').innerHTML=result;

 localStorage.setItem('results',JSON.stringify(results));

  updateScore();
  document.querySelector('.js-moves').innerHTML=`  You <img src="${playerMove}-emoji.png" alt="">
        <img src="${computerMove}-emoji.png" alt=""> Computer `;}
 function pickComputerMove(){
let randomNumber=Math.random();
  
    if(randomNumber<=1.0/3){
     computerMove='Rock';
 }
 else if(randomNumber<=2.0/3){
    computerMove='Paper';
 }
 else{
     computerMove='Scissors';
 }
return computerMove;}
let isAutoPlaying=false;
let intervalid;
function autoPlay(){ 
   if(!isAutoPlaying){
    document.querySelector('.Auto-play-button').innerHTML='Stop';
   intervalid=setInterval(function(){ const playerMove=pickComputerMove();
    playGame(playerMove);
   },1000);
isAutoPlaying=true;}
else{
clearInterval(intervalid);
isAutoPlaying=false;
document.querySelector('.Auto-play-button').innerHTML='Auto play';
}
}
document.querySelector('.rock-button').addEventListener('click',()=>{playGame('Rock')});
document.querySelector('.paper-button').addEventListener('click',()=>{playGame('Paper')});
document.querySelector('.scissors-button').addEventListener('click',()=>{playGame('Scissors')});
document.querySelector('body').addEventListener('keydown',(event)=>{
   if(event.key==='r')playGame('Rock');
   if(event.key==='p')playGame('Paper');
   if(event.key==='s')playGame('Scissors');
})
document.querySelector('body').addEventListener('keydown',(event)=>{if(event.key==='a')autoPlay();

})
document.querySelector('.reset-button').addEventListener('click',()=>{Reset();
    updateScore();})
document.querySelector('body').addEventListener('keydown',(event)=>{if(event.key==='Backspace'){
  Reset();
    updateScore();
}

})
function Reset(){
 results.wins=0;
        results.ties=0;
        results.loses=0;
    localStorage.removeItem('results');
}


   
var database,form,game,player;
var gameState=0;
var playerCount;
var allPlayers;
 var car1,car2,car3,car4;
 var cars;
function setup(){
  database = firebase.database();
  
  createCanvas(displayWidth-20,displayHeight-20);
game=new Game();
game.getState();
game.start();
 
}

function draw(){
 if(playerCount===4){
   game.updateState(1);
 }
  if(gameState===1){
    clear();
    game.play();
  }
}


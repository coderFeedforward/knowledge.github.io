//import(item);
var GPC = 0;
var needNewItem = true;
var tran = 0;
var tran2 = 0;
var grothPoints = 0; 


function preload(){
  person = loadImage("person.png");
  bullit = loadImage("bullit.png");
  itempic = loadImage("knoledgePic2.png");
}


 
var numBUllits = 10;
var bullitsX = [];
var bullitsY = [];
var bullitH = 20;
var bullitW = 40;

var HP = 10;
var playerX = 50;
var playerY = 220;
var playerH = 100;
var playerW = 50;

var items = [];




function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < numBUllits; i++){
    bullitsX.push(1700 + i*20);
    bullitsY.push(random(-250, 250));
    //itemmm = new item(300,300,50,50);
  }
  



  
}

function draw() {
  GPC++;
  background(300,100,0);
  fill(0,100,0);
  rect(0,height/2 - 50,width,height);
  

  

  angleMode(DEGREES);
  
  push();
  translate(-tran,0);
  tran+= 0.05;
  fill(255,255,0);
  ellipse(100,100,50,50);
  pop();
  
  // cacti + items  
  push();
  translate(-tran2,0);
  tran2+= 1;
  fill(150,100,90);
  rect(400,200,50,50);
  pop();
  
  if(needNewItem){
    items.push(new item(random(0, width),random(0, height),100,100));
    needNewItem = false;
  }

  items[items.length -1].draw();


  if(items[items.length-1].isOverlaping(playerX,playerY,playerW,playerH)){
    grothPoints++;
    fill(1);
    text("you gain experiance", width/2, height/2);
    needNewItem = true;
    
  }
  //itemmm.x --;
  //itemmm.draw();

  
  //player
  
  fill(200,0,0);  
  
  image(person, playerX,playerY,playerW,playerH);
  
  // object
  
  for(var i = 0; i < numBUllits; i++){
    rect(bullitsX[i],bullitsY[i],20,7);
    image(bullit,bullitsX[i],bullitsY[i],bullitW,bullitH);
    bullitsX[i] -=10;
  }
  
  
  

  
  for(var j = 0; j < numBUllits; j++){
  if(bullitsX[j] == -10){
    bullitsX[j] = 1000 ;//+random(-150, 150);
    //IF BULLIT OUT OF SCREAN THAN MOVE BACK 
    bullitsY[j] = bullitsY[j] + random(-250, 250);
  }

  }
  movement();
  
  endGame(HP);
  
  
  // colishion
for(var z = 0; z < numBUllits; z++){
  if(bullitsY[z] > playerY && bullitsY[z] < playerY + playerH){
            if(bullitsX[z] > playerX && bullitsX[z] < playerX + playerW){
              HP = HP - 1;
              console.log(HP)
              bullitsX[z] = 1200;
      }
  }
  }
    
  
  
  if(grothPoints > 10){
    background(0,0,255);
    textSize(40);
    fill(0);
    stroke(70);
    text("you win !!!", width/2, height/2);
  }

  
} // end draw 



function endGame(HP){
  if( HP < 0){
    background(255,0,0);
    textSize(40);
    fill(0);
    stroke(70);
    text("GAME OVER", width/2, height/2);
    
  }
}











function movement(){
    if(keyCode == UP_ARROW ){
      
      playerY -=5;
      
  }
      if(keyCode == DOWN_ARROW){
      
      playerY += 5;
      
  }
 
      
        if(keyCode == RIGHT_ARROW){
      
          playerX += 5;
      
      
  }
   if(!(playerX > width)){
        if(keyCode == LEFT_ARROW){
      
      playerX -= 5;
      
  }
   }
  if(playerX < 0){
    playerX = 0;
  }
  //if(playerX + 50 > width){
    //playerX = width - 50;
  //}
  if(playerY > height- 50){
    playerY = height - 50;
  }
  if(playerY < 0){
    playerY = 0 ;
  }

}
  
  function keyReleased() {
    keyCode = ALT;
  }


class item{
  
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.Pwidth = w;
    this.Phighth = h;
    this.kill = false;
  }

  
  draw(){
    if(this.kill == false){
      fill(255,0,0);
      image(itempic, this.x, this.y, this.Pwidth, this.Phighth);
    }
    
  }
  
  isOverlaping(otherLeftPos, otherTopPos, otherWidth, otherHightth){
    var OtherRightPos = otherLeftPos + otherWidth;
    var OtherBottomPos = otherTopPos + otherHightth;
    if((this.x <= OtherRightPos && OtherRightPos <= this.x + this.Pwidth)  || 
       (this.x <=  otherLeftPos && otherLeftPos <= this.x + this.Pwidth)  ) {
      
      
      
        if( (this.y <= otherTopPos && otherTopPos <=  this.y + this.Phighth) || 
           (this.y <= OtherBottomPos && OtherBottomPos <=  this.y + this.Phighth)  ){
            print("hi");
            this.kill = true;
            return(true);
        }else{
          print("no");
        }
    }else{
      print("no");
    }
    return false;
    
  }
  
  

  
  
} // end of class 


//REMEMBER TO SAVE WORK !!!!

/*   *** PLAN ***
1) fix the end game thing [X]
2) make it so you can colect objcts []
3) make is so you get bigger when you get objects []
4) make it so you get enuph credits you can win/graduate[]
4.5) make re set buttion []
5) mak backgrownd estedic []
5.5) display life points[]
6) make side mishions []
7) make explination buttion with 500 word right up. []
8) make harts to colect []

*/

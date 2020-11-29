var points = 0;

function setup() {
  createCanvas(400, 400);
  fillup = new item(200,200,50,50);
  gorg = new item(230,260,50,50);
}

function draw() {
  background(0,0,255);
  
  fillup.draw();
  gorg.draw();
  fillup.isOverlaping(gorg.x,gorg.y,gorg.Pwidth,gorg.Phighth);
}

class item{
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.Pwidth = w;
    this.Phighth = h;
  }

  
  draw(){
    fill(255,0,0);
    rect(this.x, this.y, this.Pwidth, this.Phighth);
  }
  
  isOverlaping(otherLeftPos, otherTopPos, otherWidth, otherHightth){
    var OtherRightPos = otherLeftPos + otherWidth;
    var OtherBottomPos = otherTopPos + otherHightth;
    if((this.x < OtherRightPos && OtherRightPos <this.x + this.Pwidth)  || 
       (this.x < otherLeftPos && otherLeftPos <this.x + this.Pwidth)  ) {
      
      
      
        if( (this.y < otherTopPos && otherTopPos <  this.y + this.Phighth) || 
           (this.y < OtherBottomPos && OtherBottomPos <  this.y + this.Phighth)  ){
            print("hi");
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
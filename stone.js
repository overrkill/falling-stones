class stone{
  constructor(x,y,d){
  this.pos=createVector(x,y);
  this.size=d;
  this.vel=createVector(0,random(2,7));
  this.acc=createVector(0,0);
  }
  update(){
    this.pos.x+=this.vel.x;
    this.pos.y+=this.vel.y;
    this.vel.add(this.acc);
  }
  show(){
   image(st,this.pos.x,this.pos.y,this.size,this.size);
  }
  mousehit(arr,shippos,sz){
  let dd = dist(shippos.x,shippos.y,this.pos.x,this.pos.y);
  if( dd<this.size/2+sz/2)
  {
  if(this.size>=10){
  let a = new stone(this.pos.x-this.size,this.pos.y,this.size/2);
    a.vel=createVector(-1,-1)
    a.acc=createVector(-1,-1)
   let b = new stone(this.pos.x+this.size,this.pos.y,this.size/2);
   b.acc=createVector(1,-1)
    b.vel=createVector(1,-1);
    arr.push(a);
    arr.push(b);
  }
  return true;
  }
  else{
  return false;
  }
  }
  boundary(){

    if(this.pos.y+this.size/2>=height ){
      return true;
    }
  }
}

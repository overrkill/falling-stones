let ston=[];
let extra=[];
let state="waiting";
let img,bg,ship;
let ft,st;
let score=0;
let hscore=0;
let video;
let poseNet;
let pose;
let skeleton;
let y1=0;
let y2;
let scrollSpeed=4;
let d;
let shippos;
let lasersound;
//setup
function preload(){
  bg=loadImage("assets/bg.jpg");
  ship=loadImage("assets/ship.png");
  ft=loadFont("assets/rubik.ttf");
  st=loadImage("assets/stone.png");
  lasersound=loadSound("assets/laser.wav");
}
function setup() {
  let cv=createCanvas(640, 480);
  cv.parent("#cnv");
  video=createCapture(VIDEO);
  video.hide();
 poseNet=ml5.poseNet(video,{flipHorizontal: true},modelLoaded);
 poseNet.on('pose',gotPoses);
   fill(255,0,0);
  angleMode(DEGREES);
y2=-height;
  textFont(ft);
}
//checking if got a pose
function gotPoses(poses){

   if (poses.length > 0) {
   pose = poses[0].pose;
   //skeleton = poses[0].skeleton;

}}

//debug model loaded
function modelLoaded() {
  console.log('poseNet ready');
}

//gameplay on key presses
function keyPressed(){
if(key=="p"){
if(pose){
 //let balls=random(8,13);
 //for(i=0;i<balls;i++){
  //let size=random(30,70);
  //ston[i] = new stone(random(20,width-130),random(-height/2,-10),size );}
  score=0;
state="play";}
else{
    state="loading";

}
};
}
//draw stuff

function draw() {
  //image(bg,0,0,640,480);

  scrollbg();
  skelt();
  if (state=="play"){

    playGame(shippos,50);
  }
  else if(state=="over"){
    ston=[];
    extra=[];
    textSize(70);
    fill(0,0,0);
    stroke(255);
    strokeWeight(4);
    textAlign(CENTER);
    text("GAME OVER",width/2,height/2);
  }
  else if(state=="win"){
    extra=[];
    fill(0,0,0);
    stroke(255);
    strokeWeight(4);
    textSize(80);
    textAlign(CENTER);
    text("YOU WON!!",width/2,height/2);

  }
  else if(state=="loading"){
    textSize(40);
    fill(0,0,0);
    stroke(255);
    strokeWeight(4);
    text("loading... check your camera press p/start again ",100,100,500,500);
  }
  else{
    textSize(40);
    fill(0,0,0);
    stroke(255);
    strokeWeight(4);
    text("press p or start to play the game",100,100,500,500);
  }
}

//scroll the background
function scrollbg(){
  image(bg, 0, y1, width, height);
  image(bg, 0, y2, width, height);

  y1 += scrollSpeed;
  y2 += scrollSpeed;

  if (y1 > height){
    y1 = -height;
  }
  if (y2 > height){
    y2 = -height;
  }
}

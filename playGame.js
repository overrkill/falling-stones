function playGame(shippos,d){

    //loadbg
  //draw rect around mouse pointer
  /*noFill();
  stroke(255);
  rect(mouseX,mouseY,50,50);
  fill(255,0,0);*/
  //render balls
  if(random()<0.03){
    let size=random(30,70);
    let apl=new stone(random(20,width-130),random(-height/2,-10),size );
    ston.push(apl);
  }
  if(ston.length>0){
  for(i=0;i<ston.length;i++){
  if(ston[i]){

     if(ston[i].boundary()){
   state="over";
       break;
  }
  ston[i].show();

    if(ston[i].mousehit(extra,shippos,d)){
      lasersound.play();
      score+=1;
      hscore=max(score,hscore);
      mainscore.innerText=score;
      mainhighscore.innerText=hscore;
    ston.splice(i,1);


  }
  else{ston[i].update();}

  }
  }
  }
//  else{
  //state="win";

  //}

  //show splits
  for(j =0;j <extra.length;j++){
    extra[j].show();
    extra[j].update();
}

}

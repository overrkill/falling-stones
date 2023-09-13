const mainhighscore=document.getElementById("highscore");
const mainscore=document.getElementById("score");
function play(){
  if(pose){
  
    score=0;
  state="play";
}
else{
  state="loading";
}
}
//add comment new
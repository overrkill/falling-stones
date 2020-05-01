
function skelt(){
  if (pose) {

  let eyeR = pose.rightEye;
  let eyeL = pose.leftEye;
  d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);
  shippos=createVector(constrain(pose.nose.x-50,0,width-100),constrain(pose.nose.y-50,height/2,height-100));

  image(ship,shippos.x,shippos.y,100,100);
  /*
  image(head,pose.nose.x-2*d,pose.nose.y-2*d,d*3,d*3);
  image(hlmt,pose.nose.x-2.5*d,pose.nose.y-4*d,d*3.3,d*3);
  //if(d<20){
  for (var i = 0; i < pose.keypoints.length; i++) {
  let x=pose.keypoints[i].position.x;
  let y=pose.keypoints[i].position.y;
  fill(0);
  stroke(255);
  ellipse(x,y,20);

  }
  for (let i = 0; i < skeleton.length; i++) {
     let a = skeleton[i][0];
     let b = skeleton[i][1];
     strokeWeight(4);
     stroke(255);
     line(a.position.x, a.position.y,b.position.x,b.position.y);
   }
  */
 //}
}
}

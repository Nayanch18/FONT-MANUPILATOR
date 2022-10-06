difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,450);
    canvas.position(560, 105);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


}
function modelLoaded() {
    console.log('PoseNet Is Intialized And Loaded');
}

function draw(){
    background('#5196e3');


document.getElementById("font-size").innerHTML="Font size of the text will be ="+difference+"px";
    fill("#00ff0a");
    stroke("#F90093");
   textSize(difference)
   text('NAYAN',50,250)
}

function gotPoses(results,error) {
    if(error){
        console.error(error)
    }
    if (results.length > 0) {
        console.log(results);   
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX=" + leftWristX + "rightWristX" + "difference = " + difference)
    }
}


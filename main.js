var leftX=0;
var leftY=0;
var rightX=0;
var rightY=0;

song="";



function preload(){
    song = loadSound("music_pushya.mp3");
}
 
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftX=results[0].pose.leftWrist.x;
        leftY=results[0].pose.leftWrist.y;
        rightX=results[0].pose.rightWrist.x;
        rightY=results[0].pose.rightWrist.y;
        console.log("Left Wrist X = "+leftX);
        console.log("Left Wrist Y = "+leftY);
        console.log("Right Wrist X = "+rightX);
        console.log("Right Wrist Y = "+rightY);
    }
}

function draw(){
    image(video,0,0,600,500);
    fill("#CC00FF");
    stroke("#09FBD3");
    circle(leftX,leftY,20);
    Number_Left_Y=Number(leftY);
    Left_y_without_decimals=floor(Number_Left_Y);
    Left_y_for_volume=Left_y_without_decimals/500;
    song.setVolume(Left_y_for_volume);
    document.getElementById("result_volume").innerHTML=Left_y_for_volume;
}

function P_dj(){
     song.play();
     song.setVolume(Left_y_for_volume);
     song.rate(1);
}

function modelLoaded(){
    console.log("YaY ! your first DJ App's model is loaded.....")
}

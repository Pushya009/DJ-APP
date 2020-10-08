song="";

function preload(){
    song=loadSound("DJ Snake - Taki Taki (Lyrics) ft. Selena Gomez, Ozuna, Cardi B-64 (2).mp3");
}
 
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()
}

function draw(){
    image(video,0,0,600,500);
}

function P_dj(){
     song.play();
}
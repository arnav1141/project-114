moustacheX=0;
moustacheY=0;
function preload(){
moustache=loadImage('https://i.postimg.cc/wTRtDyKx/moustache-PNG.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video ,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        moustacheX=results[0].pose.nose.x-35;
        moustacheY=results[0].pose.nose.y+5;
        console.log("nose x="+moustacheX);
        console.log("nose y="+moustacheY);
    }
}

function draw(){
image(video,0,0,300,300);
image(moustache,moustacheX,moustacheY,70,50);
}

function take_snapshot(){
    save("mustache_me.png");
}
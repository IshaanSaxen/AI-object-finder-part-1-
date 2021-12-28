objects = [];
status = "";
video = ""

function preload()
{

}

function modelLoaded()
{

}
function draw()
{

}

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video = video.size(400, 400);
    video = video.hide(); 
}
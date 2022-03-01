function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}


function setup(){
canvas = createCanvas(300, 260);
canvas = canvas.center()
background("#92d1b3")
}

function draw(){
    strokeWeight(12);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}

function classifyCanvas(){

}
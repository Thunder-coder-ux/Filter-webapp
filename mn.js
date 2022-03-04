function preLoad(){

}

function setup(){
    canvas = createCanvas(351, 351);
    canvas.center();
}

function draw(){
image(video, 0, 0, 351, 351);
}

function takeSnapshot(){
    save('Filterly_img.png');
}
bg_img="";
status = null;

function preload() {
    bg_img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(800, 450);
    canvas.parent('canvas_div');
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Detecting Objects";
}

function modelLoaded() {
    console.log('Model loaded');
    status = true;
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
}

function draw() {
    image(bg_img,0,0, 800, 450);
    fill('#ff0');
    textSize(18);
    text('Dog', 110, 75);
    text('Cat', 360, 125);
    noFill()
    stroke('#ff0')
    rect(100, 55, 400, 375);
    rect(350, 100, 375, 345);
    objectDetector.detect(bg_img, gotResults);
}
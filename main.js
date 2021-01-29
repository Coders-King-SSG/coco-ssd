function preload() {
    bg_img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 450);
    canvas.parent('canvas_div');
}

function draw() {
    image(bg_img, 640, 450);

}
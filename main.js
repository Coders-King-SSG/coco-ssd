bg_img = "";
status = "";
objects = [];
var r, g, b;

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
    objectDetector.detect(bg_img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        objects = results;
    }
}

function draw() {
    image(bg_img, 0, 0, 800, 450);
    if (status != "") {
        document.getElementById('status').innerHTML = "Detected objects";
        // objects.forEach(elm => {
        //     confidence = floor(elm[i].confidence * 100);
        //     r = round(random(0, 255));
        //     g = round(random(0, 255));
        //     b = round(random(0, 255));
        //     color = `rgb(${r}, ${g}, ${b})`;
        //     fill(color);
        //     textSize(18);
        //     txt = elm[i].label +'\t('+ confidence + '% sure)';
        //     text(txt, elm[i].x, elm[i].y);
        //     noFill();
        //     stroke(color);
        //     rect(elm[i].x, elm[i].y, elm[i].width, elm[i].height);
        // });
        for (i = 0; i < objects.length; i++) {
            confidence = floor(elm[i].confidence * 100);
            r = random(0, 255);
            g = random(0, 255);
            b = random(0, 255);
            color = `rgb(${r}, ${g}, ${b})`;
            fill(color);
            textSize(18);
            txt = elm[i].label + '\t(' + confidence + '% sure)';
            text(txt, elm[i].x, elm[i].y);
            noFill();
            stroke(color);
            rect(elm[i].x, elm[i].y, elm[i].width, elm[i].height);
        }
    }
}
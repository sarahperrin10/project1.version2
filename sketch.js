
let img1;
let img2;
let img3;
let img4;
let img5;
let amt;
let startColor;
let newColor;
var isOverHoop;
var A;
var B;
var x = 100;
var y = 100;
var speed = 2
var song;
let c = 0.0;
let d = 0.0;

function preload (){
    img1 = loadImage ('images/zion.png');
    img2 = loadImage ('images/basketball.png');
    img3 = loadImage ('images/hoop.png');
    img4 = loadImage ('images/tent.png');
    img5 = loadImage ('images/coachk.png');
    soundFormats('mp3', 'ogg');
    song = loadSound('sounds/Crowdcheers.mp3');
}


function setup (){
    createCanvas(800, 600);
    textAlign (CENTER);
    A = 400;
    B = 400;
    song.play();
    startColor = color(0,26,87);
    newColor = color(random(255),random(255),random(255));
    amt = 0;
    background(startColor);
}

function draw (){
    background(lerpColor(startColor, newColor, amt));
    amt += 0.04;
    if(amt >= 1){
    amt = 0.0;
    startColor = newColor;
    newColor = color(random(255),random(255),random(255));
  }
    
    var distance = dist(mouseX, mouseY, A , B);
    
    if (distance < 75){
        isOverHoop = true;}
        else {
        isOverHoop = false;    
        }
    
    if (isOverHoop == true)
    {
        A = random(150, 700);
        B = random(150, 500);
    }
        else {}
    
    y += speed;
    if (y > height){
        y = 0;
    }
    x += speed;
    if (x > width){
        y = 0;
    }
    for (var i=0; i <50; i++){
        image (img4, 10, 10+i*40, img4.width/5, img4.height/5);
        }  
    for (var i=0; i <50; i++){
        image (img4, 740, 10+i*40, img4.width/5, img4.height/5);
        }  
    for (var i=0; i <50; i++){
        image (img5, 10+i*50, 10, img5.width/8, img5.height/8);
        }  
    for (var i=0; i <50; i++){
        image (img5, 10+i*50, 540, img5.width/8, img5.height/8);
        }  
    
   push ();
    c = c + 0.07;
    d = Math.abs(cos(c) * 5);
    translate (400,100);
    scale (d);
    fill (255, 255, 255);
    text ("Get the ball in the hoop!",0,0);
    pop ();

    if (mouseIsPressed){
        song.pause();
        fill (0);
        rect (0,0, width, height);
        }
image (img1, mouseX, mouseY, img1.width/2, img1.height/2);
image (img2, mouseX, mouseY, img2.width/3, img2.height/3);
image (img3, A, B, img3.width/3, img3.height/3);

}



let img1;
let img2;
let img3;
let tent_img;
let duke_img;
let amt;
let startColor;
let newColor;
let duke = [];
let duke_num = 50;
let tent = [];
let tent_num = 50;
var isOverHoop;
var A;
var B;
var song;
let c = 0.0;
let d = 0.0;

function preload (){
    img1 = loadImage ('images/zion.png');
    img2 = loadImage ('images/basketball.png');
    img3 = loadImage ('images/hoop.png');
    tent_img = loadImage ('images/tent.png');
    duke_img = loadImage ('images/coachk.png');
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
    
    for (let i = 0; i<duke_num; i++){
        duke[i] = new Duke(random(0,width), random(0, height),duke_img.width/7,duke_img.height/7, random(0.02,10));
    }
    for (let i = 0; i<tent_num; i++){
        tent[i] = new Tent(random(0,width), random(0, height),tent_img.width/5,tent_img.height/5, random(0.02,10));
    }
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
    
       
    for(let i=0; i<duke_num; i++){
        duke[i].display();
        duke[i].move();
    }

    for(let i=0; i<tent_num; i++){
        tent[i].display();
        tent[i].move();
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

class Duke {
    constructor(tempX, tempY, tempW, tempH, tempSpeed){
        this.x = tempX;
        this.y = tempY;
        this.w = tempW;
        this.h = tempH;
        this.speed = tempSpeed;
    }

    move(){
        this.x = this.x + this.speed;
        if(this.x > width){
            this.x = 0;
        }
    }

    display(){
        image (duke_img, this.x, this.y, this.w, this.h);

    }
}

class Tent {
    constructor(tempX, tempY, tempW, tempH, tempSpeed){
        this.x = tempX;
        this.y = tempY;
        this.w = tempW;
        this.h = tempH;
        this.speed = tempSpeed;
    }

    move(){
        this.x = this.x + this.speed;
        if(this.x > width){
            this.x = 0;
        }
    }

    display(){
        image (tent_img, this.x, this.y, this.w, this.h);

    }
}

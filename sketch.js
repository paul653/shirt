let modelObj;
let textureImg;
let video;

function preload() {
  modelObj = loadModel('tshirt.obj', true);
  textureImg = loadImage('yellow.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  video = createCapture(VIDEO);
  video.size(1280, 720);
  video.hide(); 
}

function draw() {
  background("#F8F3D9");
  ambientLight(230); 
  scale(1, -1, 1);
  scale(3);
  rotateY(frameCount * 0.02);
  texture(video);
  noStroke();
  model(modelObj);
}

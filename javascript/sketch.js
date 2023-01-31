let canvas;
let button;
let slider;

let displayState = 0;

function preload() {
  bg = loadImage('3d/texture/papertexture-2061710_1920.jpeg');//background the paper texture
  material = loadImage('3d/texture/3d_manga-standard_BaseColor.png');//texture of the model
  //the 5 model
  A = loadModel('3d/A.obj', true);
  I = loadModel('3d/I.obj', true);
  U = loadModel('3d/U.obj', true);
  P = loadModel('3d/P.obj', true);
  T = loadModel('3d/T.obj', true);
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

   createEasyCam();

  addGUI();
}

function draw() {
  background(250, slider.value(), 232);
  noStroke();
  //clear();
  // lights();
  //  ambientLight(255);
  //  directionalLight(255,255,255, 0.25, 0.25, 0);
  //  pointLight(255,255,255, 300,300, 1000);
  // ambientMaterial(slider.value(), 0, 100);

  texture(material);
  if(displayState == 0){
    model(A);
  }else if(displayState == 1){
    model(I);
  }else if(displayState == 2){
    model(U);
  }else if(displayState == 3){
    model(P);
  }else if(displayState == 4){
    model(T);
  }
  
}

function addGUI()
{
  //add a slider
  slider = createSlider(200,255, 100);
  slider.addClass("slider");
  //Add the slider to the parent gui HTML element
  slider.parent("gui-container");

  //add a button
 
      button = createButton("Change to I");
 

 
  button.addClass("button");

  //Add the play button to the parent gui HTML element
  button.parent("gui-container");
  
  //Adding a mouse pressed event listener to the button 
  button.mousePressed(handleButtonPress); 

}

function handleButtonPress()
{
    
  if(displayState < 4)
  {
    displayState++;
  }else{
    displayState = 0;
  }

  if(displayState == 0)
  {
      button.html("Change to I");
  }else if(displayState == 1){
      button.html("Change to U");
  }else if(displayState == 2){
      button.html("Change to P");
  }else if(displayState == 3){
      button.html("Change to T");
  }else if(displayState == 4){
    button.html("Change to A");
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
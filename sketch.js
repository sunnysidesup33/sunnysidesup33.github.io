let shared;
let moves;
let moved;
let colorFill = 240;
let colorSlider1, colorSlider2, colorSlider3;
let colorDiv;
let brushRadius;
let sizeSlider;
let poly;
let img;
let donlod;

function preload() {
  // connect to the party server
  partyConnect("wss://demoserver.p5party.org", "hello_cdn");

  // begin loading shared object
  shared = partyLoadShared("shared", { moves: [] });

  img = loadImage('assets/paper.jpg');
}

function setup() {
createCanvas(windowWidth/2, windowHeight);
  
  background(colorFill);
  image(img, 0, 0, windowWidth/2, windowHeight);
  noStroke();
  partyToggleInfo(true);
  // saveCanvas(c, 'Our_Creation', 'jpg');

  // colorMode(HSB)
  colorSlider1 = createSlider(10, 255, 0);
  colorSlider1.position(50, 150);
  colorSlider1.addClass("redSlider");
  colorSlider1.style('width', '100px');

  let rDiv = createDiv('R:');
  rDiv.style('font-size', '12px');
  rDiv.position(30, 155);

  colorSlider2 = createSlider(0, 255, 100);
  colorSlider2.position(50, 180);
  colorSlider2.addClass("greenSlider");
  colorSlider2.style('width', '100px');

  let gDiv = createDiv('G:');
  gDiv.style('font-size', '12px');
  gDiv.position(30, 183);

  colorSlider3 = createSlider(0, 255, 100);
  colorSlider3.position(50, 210);
  colorSlider3.addClass("blueSlider");
  colorSlider3.style('width', '100px');

  let bDiv = createDiv('B:');
  bDiv.style('font-size', '12px');
  bDiv.position(30, 213);

  colorDiv = createDiv(' ');
  colorDiv.size(100, 50); //displayed color
  colorDiv.position(50, 250)

  brushRadius = createDiv(' ');
  
  sizeSlider = createSlider(10, 45, 20);
  sizeSlider.position(50, 320);
  sizeSlider.addClass("radiusSlider")
  // sizeSlider.class('range');
  sizeSlider.style('width', '100px');

  // donlod = createButton('Save'); //undefined
  // button.mousePressed(donlodCanvas);

}

// function donlodCanvas(){
// saveCanvas('painting', 'jpg');
// }


function mouseDragged() {
  shared.moves.push({ //undefined
    x: mouseX,
    y: mouseY,
  });
}

function draw() {
  let valR = colorSlider1.value();
  let valG = colorSlider2.value();
  let valB = colorSlider3.value();
  let col = color(valR, valG, valB);

  // let rNum = createDiv(valR);
  // rNum.position(155, 155);

  colorDiv.style('background', col);

  let brushSize = sizeSlider.value();
  
  brushRadius.size(brushSize, brushSize);
  brushRadius.position(47, 350);
  brushRadius.style('transform-origin: 0% 50%;');
  brushRadius.style('background-color: none');
  brushRadius.style('border: 2px solid black')
  brushRadius.style('border-radius: 50px');

  if (shared.moves.length < 1) {
    return;
  }

  // let move = shared.moves.shift();
  let moved = shared.moves[0];

  // background("#ffcccc");
  fill(col.levels[0] + random(-15, 15) , col.levels[1] + random(-15, 15) , col.levels[2] + random(-15, 15) , 150);

  // read shared data
  for (i=0; i<3; i++){
  rotate(random(PI * 0.01));
  circle(moved.x, moved.y, brushSize);
  // rect(moved.x, moved.y, brushSize, brushSize); 
  
  
  //   push();
  //   translate(mouseX, mouseY);
  //   rotate(random(PI * 2));
  //   beginShape();
  //   for (m = 0; m < PI * 2; m += 1) {
  //     r = random(20, 50);
  //     let a = cos(m) * r;
  //     let b = sin(m) * r;
  //     vertex(moved.x.a, moved.y.b);
  //   }
  //   endShape(CLOSE);
  //   pop();
  //   }
  shared.moves = shared.moves.slice(1, shared.moves.length);
  }

function keyPressed(){
  if(keyCode === 82){
    background(colorFill);
  } 
}
}


// function draw() {
//   background(30)

//   if (mouseIsPressed) {
//     var line = new MyLine()
//       lines.push(line)
//   }

//   for (var line of lines) { //undefined
//     line.show()
//   }
// }

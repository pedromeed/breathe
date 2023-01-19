let angle = 0;
let w = 35;// numero de "mini ondas"
let ma;
let maxD;

let frames = 200;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  ma = atan(cos(QUARTER_PI));
  maxD = dist(0, 900, 500, 500);
}

function keyPressed() {
  if (key == " ") {
    const options = {
      units: "frames",
      delay: 2
    }
    saveGif("beesandbombs.gif", frames, options);
  }
}

function draw() {
  background("#6a00f4");
  
 
  
  //ortho(-500, 500, 500, -500, 0, 500);
  //ortho(-500, 500, 500, -500, 0, 500); // parametros de espaço
  rotateX(ma);
  rotateY(-QUARTER_PI);
  //rotateY(frameCount / 500)

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);//posiçao centrado
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 50, 200));//ondulaçao
      translate(x - width / 2, 0, z - height / 2);
      normalMaterial(); // se eu tirar esta funçao, a imagem fica aprenas com o stroke num estilo desenho
      //box(w, h, w);
      //rect(w,h,w,h,w,h);
      //sphere(h,w) // fica muito interessante e grande
      
     
      rotateX(40)
      
      rotateY(frameCount / 100)
      //fill(456,7,)
    
      torus(h, w) // fica muito interessante e grande
      //ellipsoid(w, h, w);
      pop();
    }
  }

  angle -= TWO_PI / frames;
}
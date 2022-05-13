points = [];
let img;
let pixelDone;

var referencia;
let pixel_2_cm_ratio;
let longitud_calculada;

function preload(){
  img = loadImage('juaan.jpeg');
}


function setup() {
  createCanvas(1280, 720);
  image(img,0,0,width,height);
  createP("Ingresa el valor de la referencia en cm: ");
  referencia = createInput("");
  pixelDone = false;
}

function draw() {
  image(img,0,0);

  if( points.length % 2 == 0 && points.length >= 2){
    for(let i = 0; i < points.length; i = i + 2){
      strokeWeight(4);
      point(points[i],points[i+1]);
    }   
  }
  if( points.length % 2 == 0 && points.length >= 4){
    for(let i = 0; i < points.length; i = i + 4){
       strokeWeight(2);
      line(points[i],points[i+1],points[i+2],points[i+3]);
    }   
  }
  if( points.length % 2 == 0 && points.length >= 8 && pixelDone == false && referencia.value() != ""){
  pixel_2_cm_ratio = Math.sqrt(Math.pow(points[2]-points[0],2)+Math.pow(points[3]-points[1],2))/float(referencia.value());
  longitud_calculada = Math.sqrt(Math.pow(points[6]-points[4],2)+Math.pow(points[7]-points[5],2))/float(pixel_2_cm_ratio);
  createP("La longitud Calculada es:" + str(longitud_calculada) + "cm");
  pixelDone = true;
  }
  text((str(mouseX)+ "," +str(mouseY)),10,20);
}
  
function mouseClicked() {
  if (points.length < 8){
  append(points, mouseX);
  append(points, mouseY);
  createP("("+str(mouseX)+","+str(mouseY)+")")
  }
}
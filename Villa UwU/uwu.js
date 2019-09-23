var vu= document.getElementById("villa");
var papel=vu.getContext("2d");
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT:39,
};
var vaca={
  url: "cosasuwu/vaca.png",
  ward: false
};
var pollo={
  ward: false
};
var fondo={
  url: "cosasuwu/tile.png",
  ward: false
};
var lobito={
  url: "cosasuwu/lobito.png",
  ward: false
};
var cantidadv=aleatoria(1,10);
var a=250,b=400,mov=5,contv=0;
var estado=false;
fondo.imagen= new Image(); //tipo fondo var imagen
fondo.imagen.src= fondo.url;
fondo.imagen.addEventListener("load",cargarfondo);
vaca.imagen= new Image(); //tipo vaca var imagen
vaca.imagen.src= vaca.url;
vaca.imagen.addEventListener("load",cargarvaca);
pollo.imagen = new Image();
pollo.imagen.src = "cosasuwu/pollo.png";
pollo.imagen.addEventListener("load",cargarpollo);
lobito.imagen=new Image();
lobito.imagen.src= lobito.url;
lobito.imagen.addEventListener("load",cargarlobito);

document.addEventListener("keydown",posicionlobo);

function cargarfondo(){
  fondo.ward= true;
  dibujar();
}
function cargarvaca(){
  vaca.ward= true;
  dibujar();
}
function cargarpollo(){
  pollo.ward = true;
  dibujar();
}
function cargarlobito(){
  lobito.ward= true;
  dibujar();
}
function dibujar(){
  if(fondo.ward==true&&estado==false){
    papel.drawImage(fondo.imagen,0,0);
  }
  if(vaca.ward==true&&estado==false){
    for(var i=0;i<cantidadv;i++){
      var xv=aleatoria(0,6);
      var yv=aleatoria(0,6);
      xv=xv*60;
      yv=yv*60;
      papel.drawImage(vaca.imagen,xv,yv);
    }

  }
  if(pollo.ward==true&&estado==false){
    var cantidadp=aleatoria(1,10);
    for(var i=0;i<cantidadp;i++){
      var xp=aleatoria(0,420);//420 porque la imagen es 80x80 y rl papel es 500x500
      var yp=aleatoria(0,420);
      papel.drawImage(pollo.imagen,xp,yp);
    }
  }

  if(lobito.ward){
    papel.drawImage(lobito.imagen,a,b);
  }

}
function matenerposicion(){

  dibujar();
}

function aleatoria(min,max){
    var resultado= Math.floor(Math.random()*(max-min+1))+min
    return resultado;
    //Math.floor()=redondea hacia abajo
    //Math.ceil()=redondea hacia arriba
    //Math.random()=saca un numero random de 0,0001 a 0.9999
}

function posicionlobo(evento){
  switch (evento.keyCode) {
    case teclas.UP:
    papel.drawImage(lobito.imagen,a,b);
    b=b-mov;
    estado=true;
    dibujar();
    break;
    case teclas.DOWN:
    papel.drawImage(lobito.imagen,a,b);
    b=b+mov;
    estado=true;
    dibujar();
    break;

    case teclas.LEFT:
    papel.drawImage(lobito.imagen,a,b);
    a=a-mov;
    estado=true;
    dibujar();
    break;

    case teclas.RIGHT:
    papel.drawImage(lobito.imagen,a,b);
    a=a+mov
    estado=true;
    dibujar();
    break;
}
}
function inutilizar(){
  return true;
}

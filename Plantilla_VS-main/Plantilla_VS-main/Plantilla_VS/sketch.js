//Declarar variables con objetos
var player;
//Funcion de configuracion
function setup() {
  //Diseño de area de juego
  createCanvas(400,400);
  //Diseñoi de objeto 
 player = createSprite(200,200,50,50);

}

//Funcion de dibujo
function draw() 
{
  //Establecer color de fondo
  background(51);
  if(keyDown("a")) {
    player.position.x = player.position.x + 1;
    background("blue");
  }
//Codigo para proyectar objetos
drawSprites();
}


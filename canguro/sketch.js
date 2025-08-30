//variables globales
var fondo,fondoObjeto;
var kanguro1,kanguro2,kanguro3,kanguroJugador,kanguroRun;
var pisoInvisible, ObstaculosDeSuelo;
var estadoDelJuego = "play";

function preload(){
    fondo = loadImage("./Imagenes/bg.png");
    kanguroRun = loadAnimation("./Kanguro/kangaroo1.png","./Kanguro/kangaroo2.png","./Kanguro/kangaroo3.png");
}

function setup(){
    createCanvas(1666,1000);
    fondoObjeto = createSprite(750,425);
    fondoObjeto.addImage("fondo",fondo);
    fondoObjeto.scale= 0.42
    kanguroJugador = createSprite(150,675);
    kanguroJugador.addAnimation("Runing",kanguroRun);
    kanguroJugador.scale= 0.2
}

function draw(){
    background("#000000");
    drawSprites();

    if(estadoDelJuego == "play"){
    console.log("entramos al modo play")
    //hacer que el kanguroJugador salte al presionar la barra espaciadora
    if(keyDown("space") && kanguroJugador.y <= 675){
        //kanguroJugador.y = 260
        kanguroJugador.velocityY=-20
        console.log("si funciona el codigo");
    }
    //agregar gravedad
    kanguroJugador.velocityY = kanguroJugador.velocityY + 1;

    //ObstaculosDeSuelo();
    //automaticJump();
    //evitar que el kanguroJugador caiga
    pisoInvisible=createSprite(150,775,500,15);
    pisoInvisible.visible=false;
    kanguroJugador.collide(pisoInvisible);
    /*if (grupoDeObstaculosDelPiso.isTouching(kanguroJugador)){
        estadoDelJuego = "end";
        console.log("si funciono?");
    }*/
}
}
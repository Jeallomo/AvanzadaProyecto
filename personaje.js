var UP = 38,
    DOWN = 40,
    LEFT = 37,
    RIGHT = 39;
var izquierda = false,
    derecha = false,
    arriba = false,
    abajo = false;
var cnv = document.getElementById("canvas");
var ctx = cnv.getContext("2d");
var p1 = {
    x: 10,
    y: 10
};
var personaje = new Image();
personaje.src = "personaje.png"

update();

//Escucha si tenemos teclas presionadas o no

window.addEventListener("keydown", keydownHandler);
window.addEventListener("keyup", keyupHandler);

//Vemos que letras SI estan presionadas

function keydownHandler(e) {
    var key = e.keyCode;
    if (key === LEFT && key !== RIGHT) {
        izquierda = true;
    }
    if (key === RIGHT && key !== LEFT) {
        derecha = true;
    }
    if (key === UP && key !== DOWN) {
        arriba = true;
    }
    if (key === DOWN && key !== UP) {
        abajo = true;
    }
}

//Vemos que letras NO estan presionadas

function keyupHandler(e) {
    var key = e.keyCode;
    if (key === LEFT && key !== RIGHT) {
        izquierda = false;
    }
    if (key === RIGHT && key !== LEFT) {
        derecha = false;
    }
    if (key === UP && key !== DOWN) {
        arriba = false;
    }
    if (key === DOWN && key !== UP) {
        abajo = false;
    }
}

//Movimiento basico del personaje

function move() {
    if (izquierda) {
        p1.x -= 10;
    }
    if (derecha) {
        p1.x += 10;
    }
    if (arriba) {
        p1.y -= 10;
    }
    if (abajo) {
        p1.y += 10;
    }
}

//Renderizamos la creacion del personaje y su sprite

function render() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.drawImage(personaje, p1.x, p1.y)


    //Manejo de colisiones contra la pared del videojuego

    if (p1.x < 0) {
        p1.x += 2;
    }
    if (p1.x + 34 > cnv.width) {
        p1.x -= 2;
    }
    if (p1.y + 54 > cnv.height) {
        p1.y -= 2;
    }
    if (p1.y < 0) {
        p1.y += 2;
    }
}

////////////////////////////Creacion de enemigos/////////////////////////////////

var ballRadius = 13;
var x = cnv.width / 2;
var y = cnv.height - 40;
var dx = 3;
var dy = -3;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {

    drawBall();

    if (x + dx > cnv.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > cnv.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

//Inicializamos todo

function update() {
    requestAnimationFrame(update, cnv);
    render();
    move();
    draw();
}



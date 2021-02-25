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

var vidas = 15;

var widthPesonaje = 34;
var heightPersonaje = 54;
var personaje = new Image();
personaje.src = "personaje.png"

var n = 0;
var l = document.getElementById("puntaje");

var gameOver = false;

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
    var velocidad = 10;
    if (izquierda) {
        p1.x -= velocidad;
    }
    if (derecha) {
        p1.x += velocidad;
    }
    if (arriba) {
        p1.y -= velocidad;
    }
    if (abajo) {
        p1.y += velocidad;
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
/*
var ballRadius = 13;
var x = cnv.width / 2;
var y = cnv.height - 40;
var y1 = cnv.height - 600;
var x1 = cnv.height - 490;
var dx = 3;
var dy = -3;
var dx1 = 5;
var dy1 = -5;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBall1() {
    ctx.beginPath();
    ctx.arc(x1, y1, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#eee";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    drawBall1();
    drawBall();

    if (x + dx > cnv.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > cnv.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    if (x1 + dx1 > cnv.width - ballRadius || x1 + dx1 < ballRadius) {
        dx1 = -dx1;
    }
    if (y1 + dy1 > cnv.height - ballRadius || y1 + dy1 < ballRadius) {
        dy1 = -dy1;
    }
    x += dx;
    y += dy;
    x1 += dx1;
    y1 += dy1;
}
*/
//Inicializamos todo

const width = canvas.width;
const height = canvas.height;

//definir numeros de forma aleatoria
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// constructoe de las pelotas

function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

//dibijamos las pelotas

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

//definimos los metodos de las pelotas

Ball.prototype.update = function() {
  if((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  if((this.x + this.size) === p1.x && p1.y) {
    this.velX = -(this.velX);
  }

  this.x += this.velX;
  this.y += this.velY;
};

//deteccion de colosion contra si mismas

Ball.prototype.collisionDetect = function() {
  for(let j = 0; j < balls.length; j++) {
    if(!(this === balls[j])) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')';
        
      }
    }

    //Colision con el jugador
    if (balls[j].x > p1.x && balls[j].x < p1.x + widthPesonaje && balls[j].y > p1.y && balls[j].y < p1.y + heightPersonaje) {
      vidas--;
    }
  }
};

//Cantidad de enemigos

let balls = [];

while(balls.length < 5) {
  const size = random(10,15);
  let ball = new Ball(

    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    'rgb(' + random(20,250) + ',' + random(20,250) + ',' + random(20,250) +')',
    size
  );
  balls.push(ball);
}

//dibujamos las pelotas de forma constante

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);

  for(let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();

function update() {
    if(!gameOver){
        requestAnimationFrame(update, cnv);
        render();
        move();
        updateVidas();
    }
   // draw();
}

function updateVidas(){
  var str = "";
   
  for(let i=0; i<vidas; i++){
    str+="<img src=\"vida.png\" class=\"corazon\">";
  }
  document.getElementById("vidas").innerHTML = str;
  
  if(vidas <= 0){
      gameOver = true;
      sendForm();
  }
}

function sendForm(){
    var punts = n;
    var nombre = prompt('Game Over, Digite su nombre: ','');
    document.getElementById("form").innerHTML = "<input type=\"hidden\" name=\"puntos\" value=\"" + n + "\">" + "<input type=\"hidden\" name=\"nombre\" value=\"" + nombre + "\">";
    
    
    var theForm = document.forms['form'];
     if (!theForm) {
         theForm = document.form;
     }
     
    location.href = "../" + "FinalProjectAvanzada/" + "ServletPuntaje?nombre=" + nombre + "&"+ "puntaje=" + punts;
    //theForm.submit();
}

window.setInterval(function(){
  l.innerHTML = "Puntuacion: " + n;
  n++;
},250);


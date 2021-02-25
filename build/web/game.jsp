<%-- 
    Document   : index
    Created on : 15/02/2021, 12:00:08 PM
    Author     : Jesus Lozada
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles/diseños.css">
        <title>Document</title>
    </head>
    <body>
    <div class="pantalla">
        <div id="vidas"></div>
        <div id="puntaje">Puntuacion: 0</div>
        <canvas id="canvas" height="700" width="1200" ></canvas>
    </div>
    <script src="personaje.js"></script>
        <form action="ServletPuntaje" method="POST" id="form" name="form">
        </form>
    </body>
</html>

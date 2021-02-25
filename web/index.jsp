<%-- 
    Document   : index
    Created on : 15/02/2021, 12:00:08 PM
    Author     : Jesus Lozada
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
    <div class="pantalla">
        <div id="vidas"></div>
        <div id="puntaje">Puntuacion: 0</div>
        <canvas id="canvas" height="700" width="1200" ></canvas>
    </div>
    <script src="personaje.js"></script>
        <form action="ServletPuntaje" method="POST" id="form" name="form">
            <input type="hidden" name="puntaje" value="15">
            <input type="hidden" name="nombre" value="nombre">
            <input type="submit" value="enviar">
        </form>
    </body>
</html>

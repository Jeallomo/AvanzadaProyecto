<html>
    <head>
        <title>Hello :D!</title>
        <link href="styles\style.css" rel="stylesheet" type="text/css">
        <script type="text/javascript" src="scrip.js"></script>
    </head>

    <body>
    <img src="Imagenes/1.gif" >


    <div id="jugar">
        <input value="" class="butonJ" type="submit" onclick="game()">
    </div>

    <div id="Ins">
        <input value="" class="butonIns" type="button" id="boton1" onclick="show('contenido1','back')">
    </div>

    <div id="imIns">
        <img src= "Imagenes/Ins.jpg" class="oculto" id="contenido1">

        <div id="Back">
            <input value="" class="btonback" id="back" onclick="show('contenido1','back')">
        </div>
    </div>  
    </body>

    <script>
        function game(){
            location.href = "../" + "FinalProjectAvanzada/" + "game.jsp";
        }
        
        function show(id,id1){
          
           console.log("macon de mierda");
           var objeto=document.getElementById(id)
           var objeto1=document.getElementById(id1)
           if(objeto.style.display=="block"){
            objeto.style.display="none";
            objeto1.style.display="none";
           }
           else{
            objeto.style.display="block";
            objeto1.style.display="block";
           }
               
   };
   </script> 
</html>
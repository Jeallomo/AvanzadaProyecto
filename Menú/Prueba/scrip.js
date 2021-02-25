function mostrar(id)
        {
            var objeto=document.getElementById(id)
            if(objeto.style.display=="block")
                objeto.style.display="none";
            else
                objeto.style.display="block";
        }

function ocultar(id)
      {
         var objeto=document.getElementById(id)
            objeto.style.display="none";
      }
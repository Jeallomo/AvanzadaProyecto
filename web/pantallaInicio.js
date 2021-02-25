function leerGET(){ 
                //obtiene la cadena de variables y valores es decir url despues del ?
                var cadGET = location.search.substr(1,location.search.length); 
                //rompe la cadena para separar pares variable=valor
                var arrGET = cadGET.split("&"); 
                var asocGET = new Array(); 
                var variable = ""; 
                var valor = ""; 
                for(i=0;i<arrGET.length;i++){ 
                    var aux = arrGET[i].split("="); 
                    variable = aux[0]; 
                    valor = aux[1]; 
                    asocGET[variable] = valor; 
                } 
                return asocGET; 
            } 

            function escribir(){
                var paresVarValor = leerGET(); 
                document.getElementById("div_nombre1").innerHTML=paresVarValor["nombre1"];
                document.getElementById("div_apellido1").innerHTML=paresVarValor["apellido1"];
                document.getElementById("div_correo1").innerHTML=paresVarValor["correo1"];

                document.getElementById("div_nombre2").innerHTML=paresVarValor["nombre2"];
                document.getElementById("div_apellido2").innerHTML=paresVarValor["apellido2"];
                document.getElementById("div_correo2").innerHTML=paresVarValor["correo2"];

                document.getElementById("div_nombre3").innerHTML=paresVarValor["nombre3"];
                document.getElementById("div_apellido3").innerHTML=paresVarValor["apellido3"];
                document.getElementById("div_correo3").innerHTML=paresVarValor["correo3"];

                document.getElementById("div_nombre4").innerHTML=paresVarValor["nombre4"];
                document.getElementById("div_apellido4").innerHTML=paresVarValor["apellido4"];
                document.getElementById("div_correo4").innerHTML=paresVarValor["correo4"];
            }
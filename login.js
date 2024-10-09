
function validarDatos() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;
    
    if (usuario === "pablo" && clave === "2356") 
        {alert("Bienvenido");
         
        } else {
        alert("Datos ingresados incorrectos");
        }
    
        return false; // Prevenir el envío del formulario
        }


        function guardarTurno(event) {
            event.preventDefault(); // Evita que el formulario se envíe
            alert("TURNO GUARDADO"); // Muestra el mensaje
        }


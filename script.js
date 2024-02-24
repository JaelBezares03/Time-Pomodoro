var minutos = document.getElementById('minutes');
var contadorMinutos =25;
var segundos =  document.getElementById("seconds"); 
var contadorSegundos = 60;

//ActualizarContador hace que el contadorSegundos se le vaya restando una unidad
//sin embargo todavia no es dinamico
function actualizarContador() {
    contadorSegundos -= 1;
    segundos.textContent = contadorSegundos;
}

//esta variable hace que al funcion se cambie cada segundo
var intervalo = setInterval(actualizarContador,1000);

setTimeout(function() {
    clearInterval(intervalo); // Detenemos el intervalo
    console.log("Temporizador detenido.");
    contadorSegundos = 61;
    actualizarContador()
    intervalo = setInterval(actualizarContador,1000);

  }, 61000);


var minutosElemento = document.getElementById('minutes');
var contadorMinutos = 25;
var segundosElemento = document.getElementById("seconds");
var contadorSegundos = 59;

function iniciarTemporizador(min) {
    var segundosRestantes = min * 60;
    var intervalo = setInterval(function() {
        var minutes = Math.floor(segundosRestantes / 60);
        var seconds = segundosRestantes % 60;

        minutosElemento.textContent = (minutes < 10 ? '0' + minutes : minutes);
        segundosElemento.textContent = (seconds < 10 ? '0' + seconds : seconds);

        if (segundosRestantes === 0) {
            clearInterval(intervalo);
            console.log('temporizador terminado');
        } else {
            segundosRestantes--;
        }
    }, 1000);
}

iniciarTemporizador(25);

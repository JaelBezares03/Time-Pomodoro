var minutosElemento = document.getElementById('minutes');
var contadorMinutos = 25;
var segundosElemento = document.getElementById("seconds");
var contadorSegundos = 59;
var intervalo;

function iniciarTemporizador(min) {
    clearInterval(intervalo);
    var segundosRestantes = min * 60;
     intervalo = setInterval(function() {
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

function pararTemporizador(){
    clearInterval(intervalo);
}

// // en ya parte de abajo ya estoy empezando a poner las partes de las secciones 
var secciones = document.querySelectorAll('.partes');
var btnFocus = document.getElementById('focus');
var btnBreack = document.getElementById('breack');
var btnLongBreack = document.getElementById('long_breack');

var body = document.getElementById('body');
var btnStart = document.getElementById('start')
var btnStop = document.getElementById('stop');

function cambiarBoton() {
    if (btnStart.classList.contains('btn_activo')) {
        btnStart.classList.remove('btn_activo');
        btnStart.classList.add('btn_escondido');
        btnStop.classList.remove('btn_escondido');
        btnStop.classList.add('btn_activo');
    } else if (btnStart.classList.contains('btn_escondido')){
      btnStart.classList.remove('btn_escondido');
      btnStart.classList.add('btn_activo');
      btnStop.classList.remove('btn_activo');
      btnStop.classList.add('btn_escondido');
    };
};


    // btnStart.addEventListener('click', function(){
    //     btnStart.classList.remove('btn_activo');
    //     btnStop.classList.add('btn_activo');
    // });
    
    // btnStop.addEventListener('click', function(){
    //     btnStop.classList.remove('btn_activo');
    //     btnStart.classList.add('btn_activo');
    // });
    
    


btnStop.addEventListener('click', function () {
    pararTemporizador();
    cambiarBoton();
});
btnStart.addEventListener('click', function(){
   
    iniciarTemporizador(25);
      cambiarBoton()
});



btnFocus.addEventListener('click', function(){
  
  
    btnFocus.classList.add('activo');
    btnBreack.classList.remove('breack');
    btnLongBreack.classList.remove('long_breack');
    minutosElemento.textContent='25';
    segundosElemento.textContent = '00'
    body.style.backgroundColor='#3a86ff'
    pararTemporizador()
    btnStart.addEventListener('click', function(){
        iniciarTemporizador(25);
          cambiarBoton()
    });
    btnStop.addEventListener('click', function () {
        pararTemporizador();
        cambiarBoton();
    });
 
});
btnBreack.addEventListener('click', function(){
    
    btnFocus.classList.remove('activo');
    btnBreack.classList.add('breack');
    btnLongBreack.classList.remove('long_breack');
    
    body.style.backgroundColor='#CBF3F0'
    minutosElemento.textContent ='05'
    segundosElemento.textContent = '00'
    pararTemporizador()
    btnStart.addEventListener('click', function(){
        iniciarTemporizador(5);
          cambiarBoton()
    });
    btnStop.addEventListener('click', function () {
        pararTemporizador();
        cambiarBoton();
    });

});
btnLongBreack.addEventListener('click',function(){
    
    btnFocus.classList.remove('activo');
    btnBreack.classList.remove('breack');
    btnLongBreack.classList.add('long_breack');
    
    body.style.backgroundColor='#8338ec'
    minutosElemento.textContent = '15';
    segundosElemento.textContent = '00'
    pararTemporizador()
    btnStart.addEventListener('click', function(){
        iniciarTemporizador(15);
          cambiarBoton()
    });
    btnStop.addEventListener('click', function () {
        pararTemporizador();
        cambiarBoton();
    });
    
});

// btnStart.addEventListener('click', function(){
//     btnStart.classList.remove('btn_activo');
//     btnStop.classList.add('btn_activo');
// });

// btnStop.addEventListener('click', function(){
//     btnStop.classList.remove('btn_activo');
//     btnStart.classList.add('btn_activo');
// });





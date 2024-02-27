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
            alert('Tiempo terminado');

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
 
    function changeButton() {
        if (btnStart.style.display === 'block') {
            btnStart.style.display = 'none';
            btnStop.style.display = 'block'
        } else {
            btnStart.style.display = 'block';
            btnStop.style.display = 'none'
        }
    };
    

   
    btnStart.addEventListener('click', function(){
       
        iniciarTemporizador(25);
          changeButton();
    });
    btnStop.addEventListener('click', function(){
        pararTemporizador()
        changeButton();
    }) 
    
    

btnFocus.addEventListener('click', function(){
    btnStop.style.display = 'none'
    btnStart.style.display = 'block';

    btnFocus.classList.add('activo');
    btnBreack.classList.remove('breack');
    btnLongBreack.classList.remove('long_breack');
    minutosElemento.textContent='25';
    segundosElemento.textContent = '00'
    body.style.backgroundColor='#86bbd8'
    pararTemporizador()
    btnStart.addEventListener('click', function(){
        iniciarTemporizador(25);
          cambiarBotonStart()
    });
    btnStop.addEventListener('click', function () {
        
        pararTemporizador();
        cambiarBoton();
    });
 
});
btnBreack.addEventListener('click', function(){
    btnStop.style.display = 'none'
    btnStart.style.display = 'block';

    btnFocus.classList.remove('activo');
    btnBreack.classList.add('breack');
    btnLongBreack.classList.remove('long_breack');
    
    body.style.backgroundColor='#6a994e'
    minutosElemento.textContent ='05'
    segundosElemento.textContent = '00'
    pararTemporizador();
    btnStart.addEventListener('click', function(){
        
        iniciarTemporizador(5);
          
    });
    btnStop.addEventListener('click', function () {
        pararTemporizador();
        cambiarBoton()
    });
 
});
btnLongBreack.addEventListener('click',function(){
    btnStop.style.display = 'none'
    btnStart.style.display = 'block';
    btnStop.addEventListener('click', function () {
        pararTemporizador();
       
    });
    btnStart.addEventListener('click', function(){
        iniciarTemporizador(15);
    });
  

    btnFocus.classList.remove('activo');
    btnBreack.classList.remove('breack');
    btnLongBreack.classList.add('long_breack');
    
    body.style.backgroundColor='#8338ec'
    minutosElemento.textContent = '15';
    segundosElemento.textContent = '00'
    pararTemporizador();


});

var input = document.getElementById('inputTaks');

var ul= document.getElementById('listado');

var btnAgregarTarea = document.getElementById('addTask');


function agregarTarea(){
    var tarea = input.value;
    if (tarea !== ''){
        var li = document.createElement("li");
        li.classList.add('lista');
        var divjuntos = document.createElement("div");
        divjuntos.classList.add('juntos')
        var divcontenedor = document.createElement("div");
        divcontenedor.classList.add('contenedor_svg')
        var p = document.createElement("p");
        p.textContent=tarea;
        var imgcircle = document.createElement("img");
        imgcircle.src="circle-svgrepo-com.svg"
        imgcircle.classList.add('svg');
        var imgcancel = document.createElement("img"); 
        imgcancel.src="cancel-svgrepo-com.svg"
        imgcancel.classList.add('svg_cancel')
        var divcancel = document.createElement('div')
        divcancel.classList.add('contenedor_svg_cancel')
        
        
        ul.appendChild(li);
        li.append(divjuntos,divcancel);
        divjuntos.append(divcontenedor,p)
        divcontenedor.append(imgcircle);
        divcancel.append(imgcancel);
        input.value='';
    }
}
btnAgregarTarea.addEventListener('click',agregarTarea)


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('svg')) {
    event.target.src = 'checkmark-svgrepo-com.svg';
   
       
}});

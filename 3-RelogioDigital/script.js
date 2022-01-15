function relogio(){

var display = document.querySelector('.display')

var now = new Date();

var hours = corrigeHorario( now.getHours()) + ':' +corrigeHorario(now.getMinutes()) + ':' + corrigeHorario(now.getSeconds());

display.textContent = hours
}

function corrigeHorario(numero){
    if(numero < 10){
        numero = '0' + numero;
    }
     return numero
}

setInterval(relogio,1000)
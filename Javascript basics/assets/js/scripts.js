let count = 0;

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    count++;
    currentNumberWrapper.innerHTML = count;
    validar_negativo();
}

function decrement() {
    count--;
    currentNumberWrapper.innerHTML = count;
    validar_negativo();
}

function validar_negativo() {
    if(Number(currentNumberWrapper.innerHTML) <= -10){
        
       document.querySelector('#subtrair').disabled = true;
       document.querySelector('#esconde').classList.remove('esconde');
    }
    else if(Number(currentNumberWrapper.innerHTML) >= 10){
        document.querySelector('#adicionar').disabled = true;
       document.querySelector('#esconde').classList.remove('esconde');
    }

    else{
    document.querySelector('#adicionar').disabled = false;
    document.querySelector('#subtrair').disabled = false;
    document.querySelector('#esconde').classList.add('esconde');
    }
}

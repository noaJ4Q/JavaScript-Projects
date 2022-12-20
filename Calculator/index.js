
function clear(){
    document.getElementById('clear-control').onclick = function(){
        document.getElementById('result').innerHTML = 0;
    }
}

function getNumber(){
    return document.getElementById('result');
}

function numbersButton(){

    let numeroInput = document.getElementsByClassName('number-controls');
    let numero = getNumber();

    if(numero != '0'){
        document.getElementById('result').innerHTML = numero+numeroInput;
    }

}

function getResult(){
}


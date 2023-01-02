const pantalla = document.querySelector("#result");
const controles = document.querySelectorAll(".control");
let calculado;

controles.forEach(element => {
    element.onclick = () => {
        if (element.id == "clear"){
            pantalla.innerText = "";
        }
        else if (element.id == "equal" && pantalla.innerText != ""){
            pantalla.innerText = eval(pantalla.innerText);
            calculado = true;
        }
        else if (calculado){
            pantalla.innerText = element.value;
            calculado = false;
        }
        else{
            pantalla.innerText += element.value;
            calculado = false;
        }
    }
});
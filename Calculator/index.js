const pantalla = document.getElementById("result");
const controles = document.querySelectorAll("button");

controles.forEach(element => {
    element.onclick = () => {
        if (element.id == "clear"){
            pantalla.innerText = "0";
        }
        else if (element.id == "equal" && pantalla.innerText != "0"){
            pantalla.innerText = calcular(pantalla.innerText)
        }
        else{
            pantalla.innerText += element.value;
        }
    }
});
const controles = document.getElementsByClassName("control");

for (let i = 0; i < controles.length; i++){
    controles[i].addEventListener("click", function(){
        document.getElementById("result").innerHTML = controles[i].value;
    })
}
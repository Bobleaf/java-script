let menuElemento = document.getElementById("menuElemento");

function tornarCirculo(){
menuElemento.classList.add("circle");
menuElemento.classList.remove("square")
}

function tornarQuadrado(){
menuElemento.classList.add("square");
menuElemento.classList.remove("circle")
}

function tornarFormato(){
menuElemento.classList.toggle("circle");
menuElemento.classList.toggle("square");
}

function verificarClasse(){
    if(menuElemento.classList.contains("circle")){
        console.log("O elemento possui a classe circle");
    } else{
console.log("O elemento possui a class square");
}
}
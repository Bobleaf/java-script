//getatriburte - obter o valor do atrubuto/elemento (valor da linha).

//setattribute - definir ou modificar o valor.

function changeImagem(){
    const img = document.getElementById("myImagem");
    //Aqui conseguimos armazenar o conteudo da IMG.

    const observerImge = img.getAttribute("src");
//aqui pegamos o atributo src da imagem de basicamente diz o caminho de origem da imagem.
    
if(observerImge === "git01.png" ){
   //se a origem atual da imagem for iguala git01.png 
   img.setAttribute("src","git02.jpg");//usado o setatt
   img.setAttribute("alt", "imagem github 2");
}else{//caso contrario fazer o processo inverso.
img.setAttribute("src","git01.png")
img.setAttribute("alt", "imagem github 1")
}
}
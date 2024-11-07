//$(document).ready: Função que garante que o código dentro dela exacute 
//some após o html completo da página estar carregando.
$(document).ready(function(){
    //seleciona o conteiner carousel e aplica a função slick
    //que ativa o carrocel com as configurações abaixo
    $('.carousel').slick({

        //slidesToShow: número de cards exibidos ao mesmo tempo no carrossel
        slidesToShow: 3, //Exibe 3 cards ao mesmo tempo

        //slidesToScroll: define quantos cards serão deslizados ao mover o carrossel
        slidesToShow:1, //move 1 card por vez ao deslizar

        //infinite: quando true, o carrossel retorna ao inicio automaticamente
        infinite: true, //mantem o carrossel em rotação continua
//dots: quando true, ativa os pontos de navegação abaixo do carrosel
        dots:true,//adiciona pontos de navegação para os usuários
//arrows: exibe settas de navegação na laterais do carrosel
        arrows:true,// ativa as setas para navegar entre os cards
    });
});
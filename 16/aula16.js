//inicialização o efeito scrollreveal na primeira seção 

ScrollReveal().reveal('#section1',{
    duration:1000,//duração do efeito em milissegundos, define a velocidade da transição
    origin: 'bottom',//origem do efeito: o conteudo virá de baixo para cima
    distance: '50px', //Distancia que o elemento"viajam" antes de aparecer
});

//configurando o efeito Scrollreveal na segunda seção
ScrollReveal().reveal('#section2',{
    duration:1000,//duração do efeito em milissegundos, define a velocidade da transição
    origin: 'left',//origem do efeito: o conteudo virá de baixo para cima
    distance: '50px', //Distancia que o elemento"viajam" antes de aparecer
});
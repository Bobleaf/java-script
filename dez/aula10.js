let matrizVendas = [
    [100, 200, 300],//loja a indice 0
    [400, 500, 50],//loja b  indice 1
    [700, 400, 450],//loja c indice 2
];

console.log(matrizVendas)
console.log(matrizVendas[2])//loja a

matrizVendas[0][1]= 800,//indico no indice 0 loja a e buscando o indice interno do elemento.
matrizVendas[1][2]=900,
matrizVendas[2][0]=360,



console.log(matrizVendas[2]) //fazendo a impressão da loja a no terminal




console.log(`o valor é ${matrizVendas[1][0] + matrizVendas[1][1] + matrizVendas[1][2]}`)
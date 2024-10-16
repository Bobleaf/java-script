let aspasSimples = 'Estamos criando uma String com aspas simples';
//String em resumo são Texto que podemos ser ultilizados no Javascript e para ultiliza-lo podemos usar com aspas simples, duplas, ou string template.

let aspasDuplas = "string com aspas Duplas";
//Exemplo de string com aspas duplas.

let templateLiteral = `Srtring interpolation allows embedding expressions like ${1 + 1}.`;
console.log(templateLiteral)
//Essa é uma string template,basicamente usados em casos onde há a necessidade de realizar uma ação aritimetica (como no exemplo) ou quando guardamos algumas variavel dentro dela.
//O simbolo ${} em JavaScript é usado para interpolar variaveis, ou seja para retornar o valor dela.

//Veja abaixo exemplo de como e quando usar as crases
let nome = 'Igor';
let idade = 24;//numero usados sem aspas (simples ou duplas),

let mensagem = `olá, meu nome é ${nome}, e tenho ${idade} anos`;

console.log(mensagem)

let primeiroNome = 'John';
let ultimoNome = 'Doe';
let nomeCompleto = primeiroNome + ' ' + ultimoNome; //usado o +
let nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`; //Using template literal

// console.log(nomeCompletoTemplate);
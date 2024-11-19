let nome = "marcos";
let ultimoNome = "silva";
let CPF = 20040065475;
let conta = 'corrente';
let Banco = " ITAU";
let nomeCompletoTemplate = `${nome} ${ultimoNome}`

let mensagem = `Boa tarde, senhor ${nomeCompletoTemplate} você esta acessando a conta ${conta} do banco ${Banco}, a senha da sua conta é ${CPF}  `;

console.log(mensagem);

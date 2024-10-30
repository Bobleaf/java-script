const input = document.getElementById("taskInput");
const ul = document.getElementById("taskList");

//Aqui estamos criando uma função oara ser atribuida dentro do Botão adicionar tarefas.
function addTask() {
if(input.value !== "")//Aqui informamos que se(if) o input for diferente de vazio (!== ""), ele irá criar um elemento (createElement) de 'li', o texto que ela possui é igual o input value, ou seja o valor do input que será digitado.
{
    const li = document.createElement("li");
    li.textContent = input.value; //Traduzindo esta linha estamos criando um texto para lista, e este textp será o valor preenchido pelo usuário dentro do input.

    //Aqui estamos criando um botão para remover esses itens de (li).
    const removerBotao = document.createElement("button");

    //chamamos nossa const remover botao e inserindo um texto chamado "remover"
    removerBotao.textContent = "Remover";

    //criamos aqui uma função que ao clicar neste botão ele irá executar uma função de remover o filho da anossa ul ou seja a 'li
    removerBotao.onclick = function() {
        ul.removeChild(li);// a função é pegar o elemento filho da ul, que no caso é a nossa "li" e remove-lá.
    };
    ul.appendChild(li); //estamos aducuonando um filho para a nossa (ul).
    li.appendChild(removerBotao); //aqui, chamamos  nossa const "li " e estamos aducuinando a ela um filho (appenchild).

    input.value = ""; //usado para limpar o campo de impute apos ter adicionado o item de lista
    
} else {//caso o campo imput estilo vazio, ele irá aparecer está mensagem de alerta.
    alert("Por favor, insira uma tarefa.")
}

}
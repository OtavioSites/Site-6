progressoAtual = 0;

function atualizar(valor){
    const bar = document.getElementById("bar");

    progressoAtual = Math.max(0, Math.min(100, progressoAtual + valor));

    bar.style.width = progressoAtual + "%";


}

function Aumentar(){
    setInterval(function(){
    let botao = document.getElementsByClassName("button")[0];
    botao = ExtractValue(botao.textContent);
    
    atualizar(+botao)
    }, 100)
}


function Diminuir(){
    let botao = document.getElementsByClassName("button")[1];
    botao = ExtractValue(botao.textContent);

    atualizar(-botao)
    console.log(botao)
}




function ExtractValue(valor){
    valor = valor.replace(/\D/g, '')

    return isNaN(valor)? 0 : valor;


}
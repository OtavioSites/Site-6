progressoAtual = 0;
let spanLimite = parseInt(document.getElementsByClassName("quantificador")[2].innerHTML);
function atualizar(valor){
    const bar = document.getElementById("bar");

    progressoAtual = Math.max(0, Math.min(100, progressoAtual + valor));

    bar.style.width = progressoAtual + "%";


}

function porcentagemQuantificador(){
    m
}

function limite(limite){
    
    limite = Math.max(0, Math.min(limite));
    

    

}




function ExtractValue(valor){
    valor = valor.replace(/\D/g, '')

    return isNaN(valor)? 0 : valor;


}
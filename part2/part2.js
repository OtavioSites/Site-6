progressoAtual = 0;
let spanLimite = parseInt(document.getElementsByClassName("quantificador")[2].innerHTML);
function atualizar(valor){
    const bar = document.getElementById("bar");

    progressoAtual = Math.max(0, Math.min(100, progressoAtual + valor));

    bar.style.width = progressoAtual + "%";


}

function porcentagemQuantificador(){
    const input = document.getElementById("valor").valueAsNumber;
    if(input > spanLimite){
        atualizar(atualizar(100))
    }else{
        
    }
}

function limite(limite){
    
   return limite = Math.max(0, Math.min(spanLimite));
    

    

}




function ExtractValue(valor){
    valor = valor.replace(/\D/g, '')

    return isNaN(valor)? 0 : valor;


}
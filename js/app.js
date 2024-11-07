function comprar () {

    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    
  
    //let disponivelInferior = document.getElementById('qtd-inferior');
    if (tipo.value == 'backstage') {
        comprarBackStage(qtd);
    }

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    }
    if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    }
    if (tipo.value == 'inferior') {
        comprarInferior(qtd);
    }
    
    document.getElementById('qtd').value = ''

}

function comprarBackStage (qtd) {
    let qtdBackStage = parseInt(document.getElementById('qtd-backstage').textContent);
    if (qtd >qtdBackStage) {
        alert ('Quantidade indisponível para o tipo backstage.');
    } else {

        qtdBackStage = qtdBackStage - qtd;
        document.getElementById('qtd-backstage').textContent = qtdBackStage;
        alert ('Compra realizada com sucesso!');
    }
    
}


function comprarPista (qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd >qtdPista) {
        alert ('Quantidade indisponível para o tipo pista.');
    } else {

        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert ('Compra realizada com sucesso!');
    }

}

function comprarSuperior (qtd) {

    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert ('Quantidade indisponível para o tipo Superior.');
    }    else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior
        alert ('Compra realizada com sucesso');
    }

} 

function comprarInferior (qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if ( qtd > qtdInferior) {
        alert ('Quantidade indisponível para o tipo Inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert ('Compra realizada com sucesso');

    }
    
}
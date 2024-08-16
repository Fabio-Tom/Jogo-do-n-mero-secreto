let listaDosNumerosSorteados = [];
let numeroLimite = 10;
function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDosNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDosNumerosSorteados = [];
    }
    
    if (listaDosNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
} else {
    listaDosNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
}
}
let tentativas = 1
let numeroAleatorio = gerarNumeroAleatorio();
function exibirMensagemNaTela(tag,texto){
    let mensagemNaTela = document.querySelector(tag);
    mensagemNaTela.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    exibirMensagemNaTela('h1', 'Jogo do número secreto');
    exibirMensagemNaTela('p', 'Escolha o número de 1 a 10');
}
exibirMensagemInicial()
function verificarChute () {
    console.log(numeroAleatorio)
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio) {
        exibirMensagemNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Vc acertou com ${tentativas} ${palavraTentativa}`;
        exibirMensagemNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroAleatorio) {
            exibirMensagemNaTela('p', 'O número é menor');
        } else {
            exibirMensagemNaTela('p', 'O número é maior')
        }
        tentativas = tentativas + 1
        limparCampo()
    }
    
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    }
function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



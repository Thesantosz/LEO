const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para criar e embaralhar o baralho
function criarEEmbaralharBaralho() {
    const simbolos = ['🍎', '🍌', '🍇', '🍊', '🍉', '🍓', '🍒', '🍍'];
    let baralho = [...simbolos, ...simbolos]; // Duplicar para criar pares
    for (let i = baralho.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baralho[i], baralho[j]] = [baralho[j], baralho[i]]; // Troca com  o método Fisher-Yates
    }
    return baralho;
}

// Função para exibir o tabuleiro com cartas reveladas ou ocultas
function exibirTabuleiro(baralho, revelado) {
    let saida = '';
    for (let i = 0; i < baralho.length; i++) {
        saida += revelado[i] ? `${baralho[i]}    ` : '❓    ';
        if ((i + 1) % 5 === 0) {
            saida += '\n';
        }
    }
    console.log(saida);
}

// Função para exibir o tabuleiro pronto (com todas as cartas reveladas)
function exibirTabuleiroPronto(baralho) {
    let saida = '';
    for (let i = 0; i < baralho.length; i++) {
        saida += `${baralho[i]}    `;
        if ((i + 1) % 5 === 0) {
            saida += '\n';
        }
    }
    console.log('\nTabuleiro Pronto (Todas as cartas reveladas):');
    console.log(saida);
}

// Função principal do jogo
async function jogar() {
    const baralho = criarEEmbaralharBaralho();
    const revelado = Array(baralho.length).fill(false);
    let paresEncontrados = 0;
    const totalPares = baralho.length / 2;
    
    const numeroSecreto = 100; // Número secreto que revela o tabuleiro e zera o jogo
    
    while (paresEncontrados < totalPares) {
        exibirTabuleiro(baralho, revelado);
        
        // Pergunta ao jogador qual carta ele quer escolher
        const escolha = await fazerPergunta('Escolha a primeira carta (0 a 15), ou digite 100 para revelar o tabuleiro: ');
        
        // Verifica se o jogador escolheu o número secreto
        if (Number(escolha) === numeroSecreto) {
            console.log("Você escolheu o número secreto! O jogo será zerado...");
            exibirTabuleiroPronto(baralho);  // Exibe o tabuleiro completo
            console.log("Jogo zerado! Você perdeu.");
            rl.close();  // Fecha o jogo
            return;  // Encerra a função e o jogo
        }

        // Caso contrário, processa a escolha normalmente
        revelado[escolha] = true;
        exibirTabuleiro(baralho, revelado);

        const segundaEscolha = await fazerPergunta('Escolha a segunda carta (0 a 15): ');
        revelado[segundaEscolha] = true;

        // Verifica se as cartas correspondem
        if (baralho[escolha] === baralho[segundaEscolha]) {
            console.log('Você encontrou um par!');
            paresEncontrados++;
        } else {
            console.log('Não é um par. Tente novamente.');
            revelado[escolha] = false;
            revelado[segundaEscolha] = false;
        }
    }

    console.log('Parabéns! Você encontrou todos os pares!');
    rl.close();
}

// Função para ler a entrada do usuário
function fazerPergunta(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resposta => resolve(resposta)));
}

// Inicia o jogo
jogar();

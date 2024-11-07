const ask = require('readline-sync');

// Função para criar e embaralhar o baralho
function criarEEmbaralharBaralho() {
    const simbolos = ['🎃', '👻', '🕸️', '🕷️', '🦇', '🍬', '🖤', '🧛‍♂️']
    let baralho = [...simbolos, ...simbolos]; // Duplicar para criar pares
    for (let i = baralho.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baralho[i], baralho[j]] = [baralho[j], baralho[i]]; // Troca
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
function jogar() {
    const baralho = criarEEmbaralharBaralho();
    const revelado = Array(baralho.length).fill(false); // Array para controlar as cartas reveladas
    let paresEncontrados = 0;
    const totalPares = baralho.length / 2; // Total de pares a serem encontrados
    
    const numeroSecreto = 100; // Número secreto que revela o tabuleiro e zera o jogo
    
    while (paresEncontrados < totalPares) {

        exibirTabuleiro(baralho, revelado);
        
        // Pergunta ao jogador qual carta ele quer escolher
        let escolha = ask.questionInt('Escolha a primeira carta (0 a 15): ');
        
        // Verifica se o jogador escolheu o número secreto
        if (escolha === numeroSecreto) {
            console.log("Você escolheu o número secreto! O jogo será zerado...");
            exibirTabuleiroPronto(baralho);  // Exibe o tabuleiro completo
            console.log("Jogo zerado! Você trapaceou!");
            return;  // Encerra o jogo
        }

        // Valida se a escolha está no intervalo correto e se a carta já foi revelada
        if (escolha < 0 || escolha >= baralho.length || revelado[escolha]) {
            console.log('Escolha inválida ou carta já revelada. Tente novamente.');
            return;
        }
        
        revelado[escolha] = true; // Marca a primeira carta como revelada
        exibirTabuleiro(baralho, revelado); // Exibe o tabuleiro após a primeira escolha
        
        let segundaEscolha = ask.questionInt('Escolha a segunda carta (0 a 15): ');

        // Valida a segunda escolha
        if (segundaEscolha < 0 || segundaEscolha >= baralho.length || revelado[segundaEscolha]) {
            console.log('Escolha inválida ou carta já revelada. Tente novamente.');
            revelado[escolha] = false; // Desmarca a primeira carta
            return;
        }
        
        revelado[segundaEscolha] = true; // Marca a segunda carta como revelada
        exibirTabuleiro(baralho, revelado); // Exibe o tabuleiro após a segunda escolha

        // Verifica se as cartas correspondem
        if (baralho[escolha] === baralho[segundaEscolha]) {
            console.log('Você encontrou um par!');
            paresEncontrados++;
        } else {
            console.log('Não é um par. Tente novamente.');
            revelado[escolha] = false;
            revelado[segundaEscolha] = false; // Vira as cartas novamente
        }
    }

    console.log('Parabéns! Você encontrou todos os pares!');
}

// Inicia o jogo
jogar();

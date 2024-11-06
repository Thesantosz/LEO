const readline = require('readline');

/*const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para criar e embaralhar o baralho
function createAndShuffleDeck() {
    const symbols = ['🍎', '🍌', '🍇', '🍊', '🍉', '🍓', '🍒', '🍍'];
    let deck = [...symbols, ...symbols]; // Duplicar para criar pares
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Troca
    }
    return deck;
}

// Função para exibir o tabuleiro
function displayBoard(deck, revealed) {
    let output = '';
    for (let i = 0; i < deck.length; i++) {
        output += revealed[i] ? `${deck[i]}    ` : '❓    ';
        if ((i + 1) % 5 === 0) {
            output += '\n';
        }
    }
    console.log(output);
}

// Função principal do jogo
async function playGame() {
    const deck = createAndShuffleDeck();
    const revealed = Array(deck.length).fill(false);
    let pairsFound = 0;
    const totalPairs = deck.length / 2;

    while (pairsFound < totalPairs) {
        displayBoard(deck, revealed);
        const firstChoice = await askQuestion('Escolha a primeira carta (0 a 15): ');
        revealed[firstChoice] = true;

        displayBoard(deck, revealed);
        const secondChoice = await askQuestion('Escolha a segunda carta (0 a 15): ');
        revealed[secondChoice] = true;

        // Verifica se as cartas correspondem
        if (deck[firstChoice] === deck[secondChoice]) {
            console.log('Você encontrou um par!');
            pairsFound++;
        } else {
            console.log('Não é um par. Tente novamente.');
            revealed[firstChoice] = false;
            revealed[secondChoice] = false;
        }
    }

    console.log('Parabéns! Você encontrou todos os pares!');
    displayBoard(deck, revealed);
    rl.close();
}

// Função para ler a entrada do usuário
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, answer => resolve(answer)));
}

// Inicia o jogo
playGame();*/
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
        [baralho[i], baralho[j]] = [baralho[j], baralho[i]]; // Troca
    }
    return baralho;
}

// Função para exibir o tabuleiro
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

// Função principal do jogo
async function jogar() {
    const baralho = criarEEmbaralharBaralho();
    const revelado = Array(baralho.length).fill(false);
    let paresEncontrados = 0;
    const totalPares = baralho.length / 2;

    while (paresEncontrados < totalPares) {
        exibirTabuleiro(baralho, revelado);
        const primeiraEscolha = ask('Escolha a primeira carta (0 a 15): ');
        revelado[primeiraEscolha] = true;

        exibirTabuleiro(baralho, revelado);
        const segundaEscolha = await fazerPergunta('Escolha a segunda carta (0 a 15): ');
        revelado[segundaEscolha] = true;

        // Verifica se as cartas correspondem
        if (baralho[primeiraEscolha] === baralho[segundaEscolha]) {
            console.log('Você encontrou um par!');
            paresEncontrados++;
        } else {
            console.log('Não é um par. Tente novamente.');
            revelado[primeiraEscolha] = false;
            revelado[segundaEscolha] = false;
        }
    }

    console.log('Parabéns! Você encontrou todos os pares!');
    exibirTabuleiro(baralho, revelado);
    rl.close();
}

// Função para ler a entrada do usuário
function fazerPergunta(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resposta => resolve(resposta)));
}

// Inicia o jogo
jogar();


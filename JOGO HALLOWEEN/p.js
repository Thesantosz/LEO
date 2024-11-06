let ask = require('readline-sync');

let tabuleiroAtualizado = []

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
function jogar() {
    const baralho = criarEEmbaralharBaralho();
    const revelado = Array(baralho.length).fill(false); //fill preencher os elementos de um array com um determinado valor. Essa função é muito útil quando precisamos criar um array com
                                                       // valores repetidos ou quando queremos substituir todos os elementos de um array por um único valor.
    let paresEncontrados = 0;
    const totalPares = baralho.length / 2; //apenas as figuras em sua copia
    
    const numeroSecreto = 100; // Número secreto que revela o tabuleiro e zera o jogo
    
    while (paresEncontrados < totalPares) {

        exibirTabuleiro(baralho, revelado);
        
        // Pergunta ao jogador qual carta ele quer escolher
        const escolha = ask.question('Escolha a primeira carta (0 a 15) ');
        
        // Verifica se o jogador escolheu o número secreto
        if (escolha === numeroSecreto) {
            console.log("Você escolheu o número secreto! O jogo será zerado...");
            exibirTabuleiroPronto(baralho);  // Exibe o tabuleiro completo
            console.log("Jogo zerado! Voce trapaceou!");
            rl.close();  // Fecha o jogo
            return;  // Encerra a função e o jogo
        }

        // Caso contrário, processa a escolha normalmente

        revelado[escolha] = true; //ira pegar o numero que o usuario escolher e ver na array se ele bate com o igual
        exibirTabuleiro(baralho, revelado);   //-------------o revelado tem os valores todos iguais a false, assim que o usuario escolhe um ele vira true

        const segundaEscolha = ask.question('Escolha a segunda carta (0 a 15): ');
        revelado[segundaEscolha] = true; //-------------- se o numero que ele escolher e os dois forem true ele acertou

        // Verifica se as cartas correspondem
        if (baralho[escolha] === baralho[segundaEscolha]) {
            console.log('Você encontrou um par!');
            paresEncontrados++;
        } else {
            console.log('Não é um par. Tente novamente.');
            revelado[escolha] = false;
            revelado[segundaEscolha] = false; //----------após ele errar os dois escolhidos viram false denovo
        }
    }

    console.log('Parabéns! Você encontrou todos os pares!');
    rl.close();
}

// Função para ler a entrada do usuário


// Inicia o jogo
jogar();

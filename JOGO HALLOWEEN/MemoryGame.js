const ask = require('readline-sync')

// Função para criar e embaralhar o baralho
function criarEEmbaralharBaralho() {
    const simbolos = ['🎃', '👻', '🕸️', '🕷️', '🦇', '🍬', '🖤', '🧛‍♂️']
    let baralho = [...simbolos, ...simbolos]; 
    for (let i = baralho.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baralho[i], baralho[j]] = [baralho[j], baralho[i]]  //esse metodo se chama Fisher yates, ele embaralha a array
    }
    return baralho
}

// Função para exibir o tabuleiro com cartas reveladas ou ocultas
function exibirTabuleiro(baralho, revelado) {
    let saida = ''
    for (let i = 0; i < baralho.length; i++) {
        saida += revelado[i] ? `${baralho[i]}    ` : '❓    '
        if ((i + 1) % 5 === 0) {
            saida += '\n'
        }
    }
    console.log(saida)
}
// Função para exibir o tabuleiro pronto (com todas as cartas reveladas)
function exibirTabuleiroPronto(baralho) {
    let saida = ''
    for (let i = 0; i < baralho.length; i++) {
        saida += `${baralho[i]}    `
        if ((i + 1) % 5 === 0) {
            saida += '\n'
        }
    }
    console.log('\nReady Board (All cards revealed):')
    console.log(saida)
}

// Função principal do jogo
function jogar() {
    const baralho = criarEEmbaralharBaralho()
    const revelado = Array(baralho.length).fill(false) // Array para controlar as cartas reveladas
    let paresEncontrados = 0
    const totalPares = baralho.length / 2 // Total de pares a serem encontrados
    
    const numeroSecreto = 100 // Número secreto que revela o tabuleiro e zera o jogo
    
    while (paresEncontrados < totalPares) {

        exibirTabuleiro(baralho, revelado)
        
        // Pergunta ao jogador qual carta ele quer escolher
        let escolha = ask.questionInt('Pick the first card (0 to 15): ')
        
        // Verifica se o jogador escolheu o número secreto
        if (escolha === numeroSecreto) {
            console.log("You've chosen the secret number! The game will be reset...")
            exibirTabuleiroPronto(baralho)  // Exibe o tabuleiro completo
            console.log("Game zero! You cheated!")
           return
       }

        // Valida se a escolha está no intervalo correto e se a carta já foi revelada
        if (escolha < 0 || escolha >= baralho.length || revelado[escolha]) {
            console.log('Invalid choice or card already revealed. Please try again.')
            return
        }
        
        revelado[escolha] = true
        exibirTabuleiro(baralho, revelado)
        
        let segundaEscolha = ask.questionInt('Pick the second card (0 to 15): ')

        // Valida a segunda escolha
        if (segundaEscolha < 0 || segundaEscolha >= baralho.length || revelado[segundaEscolha]) {
            console.log('Invalid choice or card already revealed. Please try again.')
            revelado[escolha] = false
            return
        }
        
        revelado[segundaEscolha] = true
        exibirTabuleiro(baralho, revelado)

        // Verifica se as cartas correspondem
        if (baralho[escolha] === baralho[segundaEscolha]) {
            console.log('You have found a pair!')
            paresEncontrados++
        } else {
            console.log('It is not a pair. Please try again.')
            revelado[escolha] = false
            revelado[segundaEscolha] = false
        }
    }

    console.log('Congratulations! You have found all the pairs!')
}
jogar()

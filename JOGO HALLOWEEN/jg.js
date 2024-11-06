let escopo = []

let ask = require('readline-sync');


function Menu(){

    let click = ask.question("CLIQUE ENTER PARA ENTRAR!")
}

function estrutura(){

  console.log(`
      
                        ${'1)', cartas[arrayNumeros[1]]}                ${'2)', cartas[arrayNumeros[2]]}                   ${'3)', cartas[arrayNumeros[3]]}                   ${'4)', cartas[arrayNumeros[4]]}   ${'5)', cartas[arrayNumeros[9]]}    
                                  
                        
                        ${'6)', cartas[arrayNumeros[5]]}                   ${'7)', cartas[arrayNumeros[6]]}                   ${'8)', cartas[arrayNumeros[7]]}            ${'9)', cartas[arrayNumeros[8]]}          ${'10)', cartas[arrayNumeros[10]]}                   
      
      
      `)
}
function Embaralhar(){

    let carta1 
    let carta2
    let carta3
    let carta4
    let carta5
    let carta6
    let carta7
    let carta8
    let carta9
    let carta10

    let cartas = [carta1, carta2, carta3, carta4, carta5, carsta6, carta7, carta8, carta9, carta10]
    
    
    function embaralhar() {
    // Cria um array com números de min a max
    const numbers = [];
    for (let i = 0; i <= 10; i++) {
        numbers.push(i);
    }

    // Embaralha o array usando o algoritmo Fisher-Yates
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Retorna os primeiros 'count' números do array embaralhado
    console.log(numbers)
}

// Exemplo de uso
const uniqueNumbers = embaralhar();
console.log(embaralhar);


    function TelaDeJogo(){

      console.log(`
      
      ${carta1}                ${carta2}                   ${carta3}                   ${carta4}   ${carta5}    
         1
      
      ${carta6}                   ${carta7}                   ${carta8}            ${carta9}          ${carta10h}                   


`)
    }

}

/*

      console.log(`
      
                        ${carta1}                ${carta2}                   ${carta3}                   ${carta4}   ${carta5}    
                           1
                        
                        ${carta6}                   ${carta7}                   ${carta8}            ${carta9}          ${carta10h}                   
      
      
      `)*/

      const cardsArray = [
        { name: 'ghost', emoji: '👻' },
        { name: 'pumpkin', emoji: '🎃' },
        { name: 'cat', emoji: '🐱' },
        { name: 'bat', emoji: '🦇' },
        { name: 'candy', emoji: '🍬' },
        { name: 'skull', emoji: '💀' },
        { name: 'spider', emoji: '🕷️' },
        { name: 'witch', emoji: '🧙' }
      ];
      
      // Duplicar e embaralhar cartas
      let gameCards = [...cardsArray, ...cardsArray];
      gameCards = gameCards.sort(() => Math.random() - 0.5);
      
      const gameBoard = document.getElementById('gameBoard');
      let firstCard, secondCard;
      let flippedCards = 0;
      
      // Função para criar o tabuleiro
      function createBoard() {
        gameCards.forEach((card, index) => {
          const cardElement = document.createElement('div');
          cardElement.classList.add('card');
          cardElement.dataset.name = card.name;
          cardElement.dataset.emoji = card.emoji;
          cardElement.innerText = '?';
          cardElement.addEventListener('click', flipCard);
          gameBoard.appendChild(cardElement);
        });
      }
      
      // Função para virar a carta
      function flipCard() {
        if (this === firstCard) return;
        this.classList.add('flip');
        this.innerText = this.dataset.emoji;
      
        if (!firstCard) {
          firstCard = this;
        } else {
          secondCard = this;
          checkMatch();
        }
      }
      
      // Função para verificar correspondência
      function checkMatch() {
        const isMatch = firstCard.dataset.name === secondCard.dataset.name;
      
        if (isMatch) {
          disableCards();
        } else {
          unflipCards();
        }
      }
      
      // Função para desativar cartas corretas
      function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
        flippedCards += 2;
      
        if (flippedCards === gameCards.length) {
          setTimeout(() => alert('Parabéns! Você completou o jogo!'), 500);
        }
      }
      
      // Função para desvirar cartas incorretas
      function unflipCards() {
        setTimeout(() => {
          firstCard.classList.remove('flip');
          secondCard.classList.remove('flip');
          firstCard.innerText = '?';
          secondCard.innerText = '?';
          resetBoard();
        }, 1000);
      }
      
      // Função para resetar as variáveis das cartas
      function resetBoard() {
        [firstCard, secondCard] = [null, null];
      }
      
      // Iniciar o jogo
      createBoard();
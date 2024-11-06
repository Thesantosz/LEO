let escopo = []

let ask = require('readline-sync');


function Menu(){

    let click = ask.question("CLIQUE ENTER PARA ENTRAR!")
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
    
    while(lugares <= 10){

    let numeroSorteado = Math.random(Math.random(Math.random(Math.random())))
    let arrayNumeros = []
    arrayNumeros.push[numeroSorteado] //numeros sorteados irão ser adicionador numa array de numeros
    }

    function TelaDeJogo(){
        
        if(cartas !== 0){
        for(let i = 0; i < escopoGlobal.length; i++) { 
            console.log(` ${i}     | NOME: ${escopoGlobal[i].nome}  |   ENDEREÇO: ${escopoGlobal[i].endereço}  |  TELEFONE: ${escopoGlobal[i].telefone} | CAPACIDADE: ${escopoGlobal[i].capacidade}  |  CIDADE: ${escopoGlobal[i].cidade}`)
        }
}

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
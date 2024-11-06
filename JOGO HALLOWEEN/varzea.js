
function criarEEmbaralharBaralho() {
    const simbolos = ['🍎', '🍌', '🍇', '🍊', '🍉', '🍓', '🍒', '🍍'];
    let baralho = [...simbolos, ...simbolos]; // Duplicar para criar pares
    for (let i = baralho.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baralho[i], baralho[j]] = [baralho[j], baralho[i]]; // Troca
    }
    return baralho;
}


function jogar() {
    const baralho = criarEEmbaralharBaralho();
    const revelado = Array(baralho.length).fill(false);
    console.log(revelado)

}

jogar()
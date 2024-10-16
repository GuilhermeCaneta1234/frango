const container = document.querySelector('.container');

// Array com os dados dos jogos (nome e imagem)
const jogos = [
    { nome: 'Pac-Man', imagem: 'pacman.png' },
    { nome: 'Mario Bros', imagem: 'luigi.jpeg' },
    { nome: 'Pitfall', imagem: 'p.jpg' },
    { nome: 'Enduro', imagem: 'enduro.png' },
    { nome: 'Donkey Kong', imagem: 'donkey.jpeg' },
    { nome: 'Galaxy', imagem: 'pikac.png' },
    { nome: 'Tennis', imagem: 'te.webp' },   
    // ... adicione os demais jogos aqui ...
];

// Função para criar um elemento da grade
function criarGameBox(jogo) {
    const gameBox = document.createElement('div');
    gameBox.classList.add('game-box');
    gameBox.innerHTML = `<img src="${jogo.imagem}" alt="${jogo.nome}"><h2>${jogo.nome}</h2>`;
    return gameBox;
}

// Preenchendo a grade
jogos.forEach(jogo => {
    container.appendChild(criarGameBox(jogo));
});
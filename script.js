const games = [
    {
        title: "Neon Engine",
        url: "games/neon/index.html"
    },
    {
        title: "No Mans Sky",
        url: "games/nms/index.html"
    }
];

const grid = document.getElementById('game-grid');
const display = document.getElementById('game-display');

games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
        <h3>${game.title}</h3>
        <button onclick="loadGame('${game.url}')">PLAY</button>
    `;
    grid.appendChild(card);
});

function loadGame(url) {
    display.innerHTML = `<iframe src="${url}"></iframe>`;
}
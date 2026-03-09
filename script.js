const games = [
    { title: "Neon Engine", url: "games/neon/index.html", description: "High-speed arcade survival." },
    { title: "No Mans Sky", url: "games/nms/index.html", description: "Explore the galaxy. 🎮 W/S: Thrust, A/D: Turn, Space: Boost, F: Shoot, L: Land, G: Map, I: Station, U: Upgrade" },
    { title: "Neon Runner 3D", url: "games/runner/index.html", description: "Dodge obstacles in a neon world." },
    { title: "Baldi's Basics", url: "games/baldi/index.html", description: "Can you escape the school?" },
    { title: "Run 3", url: "games/run3/index.html", description: "Run through the space tunnel!" },
    { title: "HyperSpace", url: "games/hyperspace/index.html", description: "Speed through the stars!" },
    { title: "Subway Runner", url: "games/subway/index.html", description: "Ultimate 3D running action!" },
    { title: "AI Clicker", url: "games/clicker/index.html", description: "The ultimate clicking challenge." },
    { title: "Orbital Defender", url: "games/orbital/index.html", description: "Protect the core! Use Mouse to aim/shoot." },
    { title: "Cyber Drift", url: "games/drift/index.html", description: "Stay on the track! Hold Mouse to turn." },
    { title: "Gravity Switch", url: "games/gravity/index.html", description: "Gemini Original: Click to flip gravity!" },
    { title: "Neon Breakout", url: "games/breakout/index.html", description: "Gemini Original: Classic arcade action." }
];

const grid = document.getElementById('game-grid');
const display = document.getElementById('game-display');

games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
        <h3>${game.title}</h3>
        <p style="font-size: 12px; color: #aaa;">${game.description}</p>
        <button onclick="loadGame('${game.url}')">PLAY</button>
    `;
    grid.appendChild(card);
});

function loadGame(url) {
    display.innerHTML = `<iframe src="${url}" style="width:100%; height:600px; border:none;"></iframe>`;
}

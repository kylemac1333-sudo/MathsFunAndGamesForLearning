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
    { title: "Asteroids", url: "games/asteroids/index.html", description: "Retro space shooter. 🎮 Arrows to Move, Space to Shoot." },
{ title: "BitLife Arcade", url: "games/bitlife/index.html", description: "Text-based life simulator. 🎮 Make your choices!" },
{ title: "Basket Random", url: "games/basket/index.html", description: "One-button physics basketball." },
{ title: "Chess AI", url: "games/chess/index.html", description: "Classic Chess vs AI." },
{ title: "Connect 3", url: "games/connect3/index.html", description: "Match three neon gems." },
{ title: "Eggy Car", url: "games/eggy/index.html", description: "Don't drop the egg! 🎮 Arrows to drive." },
{ title: "Friday Night Funkin'", url: "games/fnf/index.html", description: "Rhythm battle! 🎮 Arrow keys." },
{ title: "Flight Sim", url: "games/flightsim/index.html", description: "3D flight training." },
{ title: "Geometry Dash", url: "games/gd/index.html", description: "Jump and fly through danger." },
{ title: "OvO 2", url: "games/ovo/index.html", description: "Parkour platformer." },
{ title: "Moto X3M", url: "games/moto/index.html", description: "Bike racing stunts." },
{ title: "Pac-Man", url: "games/pacman/index.html", description: "The arcade legend." }
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


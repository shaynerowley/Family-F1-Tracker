
// Example F1 Family League logic
const familyPicks = {
    "Kim": ["Aston Martin", "Haas", "Leclerc", "Sainz", "Yuki", "Hadjaar"],
    "Shayne": ["Ferrari", "Alpine", "Max", "Piastri", "Antonelli", "Lawson"],
    "Matt": ["McLaren", "RB", "Alonso", "Hamilton", "Ocon", "Doohan"],
    "Laura": ["Mercedes", "Sauber", "Russell", "Gasly", "Botoleto", "Bearman"]
};

document.getElementById('last-updated').innerText = "Last updated: " + new Date().toLocaleString();

// Placeholder function (to be replaced with live API call)
function renderLeaderboard() {
    const container = document.getElementById('leaderboard');
    container.innerHTML = '<h2>Leaderboard (Static)</h2>';
    Object.keys(familyPicks).forEach(name => {
        container.innerHTML += `<p><strong>${name}</strong>: ${familyPicks[name].join(', ')}</p>`;
    });
}

renderLeaderboard();

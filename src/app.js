
// Family picks & points
const familyPicks = {
    "Kim": ["Aston Martin", "Haas", "Leclerc", "Sainz", "Yuki", "Hadjaar"],
    "Shayne": ["Ferrari", "Alpine", "Max Verstappen", "Piastri", "Antonelli", "Lawson"],
    "Matt": ["McLaren", "RB", "Alonso", "Hamilton", "Ocon", "Doohan"],
    "Laura": ["Mercedes", "Sauber", "Russell", "Gasly", "Bortoleto", "Bearman"]
};

document.getElementById('last-updated').innerText = "Last updated: " + new Date().toLocaleString();

async function getNextRace() {
    const res = await fetch("https://ergast.com/api/f1/current/next.json");
    const data = await res.json();
    const race = data.MRData.RaceTable.Races[0];
    document.getElementById('next-race').innerHTML = `<div class='race-widget'><h2>Next Race: ${race.raceName}</h2><p>${race.Circuit.circuitName} | ${race.date} ${race.time}</p></div>`;
}

async function getResultsAndRender() {
    const res = await fetch("https://ergast.com/api/f1/current/last/results.json");
    const data = await res.json();
    const results = data.MRData.RaceTable.Races[0].Results;

    const container = document.getElementById('leaderboard');
    container.innerHTML = '<h2>Leaderboard</h2>';

    let leagueTotal = 0;

    Object.keys(familyPicks).forEach(name => {
        let totalPoints = 0;
        let breakdown = '';
        familyPicks[name].forEach(pick => {
            let pickPoints = 0;
            results.forEach(result => {
                if (result.Driver.familyName === pick || result.Constructor.name === pick) {
                    const pos = parseInt(result.position);
                    if (pos === 1) pickPoints = 25;
                    else if (pos === 2) pickPoints = 18;
                    else if (pos === 3) pickPoints = 15;
                    else if (pos === 4) pickPoints = 12;
                    else if (pos === 5) pickPoints = 10;
                    else if (pos === 6) pickPoints = 8;
                    else if (pos === 7) pickPoints = 6;
                    else if (pos === 8) pickPoints = 4;
                    else if (pos === 9) pickPoints = 2;
                    else if (pos === 10) pickPoints = 1;
                }
            });
            totalPoints += pickPoints;
            breakdown += `<li>${pick}: ${pickPoints} pts</li>`;
        });
        leagueTotal += totalPoints;
        container.innerHTML += `
            <div class='player-card'>
                <div class='header' onclick="this.nextElementSibling.classList.toggle('show')">
                    <strong>${name}</strong> - ${totalPoints} pts
                </div>
                <ul class='breakdown'>${breakdown}</ul>
            </div>`;
    });

    document.getElementById('league-total').innerHTML = `<p><strong>Total League Points:</strong> ${leagueTotal}</p>`;
}

getNextRace();
getResultsAndRender();

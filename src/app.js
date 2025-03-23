
// Family picks
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
    document.getElementById('next-race').innerHTML = `<h2>Next Race: ${race.raceName} (${race.Circuit.circuitName})</h2><p>${race.date} | ${race.time}</p>`;
}

async function getLatestResults() {
    const res = await fetch("https://ergast.com/api/f1/current/last/results.json");
    const data = await res.json();
    const results = data.MRData.RaceTable.Races[0].Results;
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = '<h2>Latest Race Results</h2>';
    Object.keys(familyPicks).forEach(name => {
        let points = 0;
        results.forEach(result => {
            if (familyPicks[name].includes(result.Driver.familyName) || familyPicks[name].includes(result.Constructor.name)) {
                // Apply F1 points system
                const pos = parseInt(result.position);
                if (pos === 1) points += 25;
                else if (pos === 2) points += 18;
                else if (pos === 3) points += 15;
                else if (pos === 4) points += 12;
                else if (pos === 5) points += 10;
                else if (pos === 6) points += 8;
                else if (pos === 7) points += 6;
                else if (pos === 8) points += 4;
                else if (pos === 9) points += 2;
                else if (pos === 10) points += 1;
            }
        });
        leaderboard.innerHTML += `<p><strong>${name}</strong>: ${points} pts</p>`;
    });
}

getNextRace();
getLatestResults();

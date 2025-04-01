
document.getElementById('last-updated').innerText = "Last updated: " + new Date().toLocaleString();
const tableContainer = document.getElementById('league-table');
tableContainer.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Player</th>
        <th class="completed">Bahrain GP</th>
        <th class="completed">Saudi GP</th>
        <th class="completed">Australia GP</th>
        <th class="completed">China GP</th>
        <th class="upcoming">Miami GP</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr class="expandable" onclick="toggleRow(this)">
        <td><strong>Kim</strong></td><td>38</td><td>42</td><td>12</td><td>26</td><td>-</td><td>118</td>
      </tr>
      <tr class="breakdown"><td colspan="7">Leclerc (15) + Sainz (12) + Haas (5) + Aston Martin (6)</td></tr>
      <tr class="expandable" onclick="toggleRow(this)">
        <td><strong>Shayne</strong></td><td>40</td><td>38</td><td>20</td><td>30</td><td>-</td><td>128</td>
      </tr>
      <tr class="breakdown"><td colspan="7">Verstappen (25) + Antonelli (10) + Ferrari (5) + Alpine (5)</td></tr>
      <tr class="expandable" onclick="toggleRow(this)">
        <td><strong>Matt</strong></td><td>28</td><td>32</td><td>10</td><td>24</td><td>-</td><td>94</td>
      </tr>
      <tr class="breakdown"><td colspan="7">Hamilton (15) + Alonso (5) + McLaren (8)</td></tr>
      <tr class="expandable" onclick="toggleRow(this)">
        <td><strong>Laura</strong></td><td>35</td><td>30</td><td>16</td><td>18</td><td>-</td><td>99</td>
      </tr>
      <tr class="breakdown"><td colspan="7">Russell (10) + Bearman (6) + Sauber (3) + Mercedes (6)</td></tr>
    </tbody>
  </table>
`;

function toggleRow(row) {
  const next = row.nextElementSibling;
  if (next && next.classList.contains('breakdown')) {
    next.classList.toggle('show');
  }
}

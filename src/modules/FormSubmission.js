// Function to handle form submission
document.getElementById('score-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const playerName = document.getElementById('player-name').value;
  const playerScore = document.getElementById('player-score').value;

  if (playerName && playerScore) {
    // Create a new list item for recent score
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${playerName}:</strong> ${playerScore}`;

    // Add the list item to the recent score list
    const recentScoreList = document.getElementById('recent-score-list');
    recentScoreList.appendChild(listItem);

    // Clear the input fields
    document.getElementById('player-name').value = '';
    document.getElementById('player-score').value = '';

    // Store the data in local storage (In future update replacing with API call)
    localStorage.setItem('recentScore', JSON.stringify({ name: playerName, score: playerScore }));
  }
});
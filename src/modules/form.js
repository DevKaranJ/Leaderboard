// Import the submitScore function from api.js
import { submitScore } from './api.js';
// Import the renderScores function from leaderboard.js
import { renderScores } from './leaderboard.js';

// Event listener for the form submission
document.getElementById('score-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const playerName = document.getElementById('player-name').value;
  const playerScore = document.getElementById('player-score').value;

  const result = await submitScore(playerName, playerScore);

  if (result.result === 'success') {
    // Clear the form inputs
    document.getElementById('player-name').value = '';
    document.getElementById('player-score').value = '';

    // Update the leaderboard
    renderScores();
  } else {
    alert(result.message);
  }
});

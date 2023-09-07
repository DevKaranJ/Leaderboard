// Import the fetchScores function from api.js
import { fetchScores } from './api.js';

// Function to render the list of recent scores
const renderScores = async () => {
  const recentScoreList = document.getElementById('recent-score-list');
  recentScoreList.innerHTML = ''; // Clear the existing list

  const scores = await fetchScores();

  scores.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${score.user}: ${score.score}`;
    recentScoreList.appendChild(listItem);
  });
};

// Event listener for the Refresh button
document.getElementById('refresh-button').addEventListener('click', () => {
  renderScores();
});

export { renderScores };

const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RnKbpaBQTMy4ZFjEty89/scores/';

// Function to fetch scores from the API
const fetchScores = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.result;
  } catch (error) {
    // console.error('Error fetching scores:', error);
    return [];
  }
};

// Function to submit a new score to the API
const submitScore = async (playerName, playerScore) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: playerName,
        score: playerScore,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    // console.error('Error submitting score:', error);
    return { result: 'error', message: 'Unable to submit score' };
  }
};

export { fetchScores, submitScore };

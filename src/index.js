import './style/styles.css'; // import the stylesheet
import { renderScores } from './modules/leaderboard.js'; // import the renderScores function
import './modules/form.js'; // import the module that handles the form submission

// Render the initial list when the page loads
renderScores();
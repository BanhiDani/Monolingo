
// backend/ai/FakeAIService.js

const AIService = require("./AIService");

// Fake AI: egyszerű szabályalapú válaszok
class FakeAIService extends AIService {
  reply({ language, level, message }) {
    // Alap válasz
    let response = `(${language.toUpperCase()} - ${level.toUpperCase()}) `;

    // Nagyon egyszerű "logika"
    if (!message || message.trim() === "") {
      response += "Please write a message.";
    } else {
      response += `You said: "${message}"`;
    }

    return response;
  }
}

module.exports = FakeAIService;

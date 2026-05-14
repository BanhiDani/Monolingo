
// backend/ai/FakeAIService.js

const AIService = require("./AIService");

/*
FakeAI = pedagógiai SPECIFIKÁCIÓ
Nem "okos", hanem KONTROLLÁLT.
Ez alapján fogjuk majd a Gemini promptot megírni.
*/
class FakeAIService extends AIService {
  reply({ language, level, message }) {
    if (!message || message.trim() === "") {
      return this.emptyMessage(language);
    }

    const normalizedLevel = level.toLowerCase();

    const feedback = this.feedbackForLevel(normalizedLevel, message);
    const advice = this.adviceForLevel(normalizedLevel);
    const example = this.exampleForLevel(normalizedLevel);

    return `
(${language.toUpperCase()} ${normalizedLevel.toUpperCase()})

Feedback:
${feedback}

Advice:
${advice}

Example:
${example}

Your sentence:
"${message}"
`.trim();
  }

  // ===== FEEDBACK =====
  feedbackForLevel(level, message) {
    switch (level) {
      case "a1":
        return "The sentence is understandable, but very basic.";
      case "a2":
        return "The meaning is clear, but grammar accuracy is important.";
      case "b1":
        return "Good communication, minor grammar or wording issues may appear.";
      case "b2":
        return "Well expressed, now focus on natural phrasing and precision.";
      case "c1":
        return "Advanced usage, focus on nuance and stylistic choices.";
      case "c2":
        return "Near-native level, only subtle improvements possible.";
      default:
        return "General feedback.";
    }
  }

  // ===== ADVICE =====
  adviceForLevel(level) {
    switch (level) {
      case "a1":
        return "Use short, simple sentences with basic verbs.";
      case "a2":
        return "Pay attention to correct verb tenses and word order.";
      case "b1":
        return "Try to be clearer and more specific in your expressions.";
      case "b2":
        return "Think about how a native speaker would phrase this.";
      case "c1":
        return "Work on tone, register, and idiomatic expressions.";
      case "c2":
        return "Focus on precision, style, and subtle meaning differences.";
      default:
        return "Keep practicing.";
    }
  }

  // ===== EXAMPLE =====
  exampleForLevel(level) {
    switch (level) {
      case "a1":
        return "I like coffee.";
      case "a2":
        return "I went to the store yesterday.";
      case "b1":
        return "I decided to stay home because the weather was bad.";
      case "b2":
        return "I was considering changing jobs, but the risks seemed too high.";
      case "c1":
        return "Although the proposal appears promising, it lacks sufficient evidence.";
      case "c2":
        return "The argument, while superficially convincing, fails under closer scrutiny.";
      default:
        return "";
    }
  }

  emptyMessage(language) {
    return `(${language.toUpperCase()})
Please write a sentence so I can give you feedback.`;
  }
}

module.exports = FakeAIService;

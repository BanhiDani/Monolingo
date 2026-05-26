
// backend/ai/GeminiAIService.js

const AIService = require("./AIService");
const FakeAIService = require("./FakeAIService");

// ⚠️ Node >=18 esetén van fetch
// Ha nincs, majd later fixeljük
class GeminiAIService extends AIService {
  constructor(apiKey) {
    super();
    this.apiKey = apiKey;
    this.fakeAI = new FakeAIService();
  }

  async reply({ language, level, message }) {

    // 1️⃣ prompt generálás (FakeAI-tól)
    const { prompt, fallback } = this.fakeAI.reply({
      language,
      level,
      message,
    });

    try {
      // 2️⃣ Gemini API hívás
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: prompt }],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      // 3️⃣ Válasz kinyerése
      const aiText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!aiText) {
        throw new Error("No AI response");
      }

      return aiText;

    } catch (error) {
      console.error("Gemini error:", error);

      // 4️⃣ fallback használat
      return fallback;
    }
  }
}

module.exports = GeminiAIService;

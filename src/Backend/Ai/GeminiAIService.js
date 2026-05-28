
// backend/ai/GeminiAIService.js

const AIService = require("./AIService");
const FakeAIService = require("./FakeAIService");

class GeminiAIService extends AIService {
  constructor(apiKey) {
    super();
    this.apiKey = apiKey;
    this.fakeAI = new FakeAIService();
  }

  async reply({ language, level, message }) {

    // 1️⃣ Prompt + fallback a FakeAI-tól
    const { prompt, fallback } = this.fakeAI.reply({
      language,
      level,
      message
    });

    try {
      // 2️⃣ Gemini API hívás (FONTOS: jó model!)
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`,
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
      console.log(JSON.stringify(data, null, 2));
      console.log(data); // DEBUG – nézheted mit ad vissza

      // 3️⃣ AI szöveg kiszedése (biztonságosan)
      let aiText = null;

      if (
        data.candidates &&
        data.candidates.length > 0 &&
        data.candidates[0].content &&
        data.candidates[0].content.parts &&
        data.candidates[0].content.parts.length > 0 &&
        data.candidates[0].content.parts[0].text
      ) {
        aiText = data.candidates[0].content.parts[0].text;
      }

      // 4️⃣ VISSZATÉRÉS → STRING
      
if (aiText) {
  return aiText;
} else {
  return fallback.fallback; // 🔥 EZ A LÉNYEG
}


    } catch (error) {
      console.error("Gemini error:", error);
      return fallback;              // ✅ fallback minden hibára
    }
  }
}

module.exports = GeminiAIService;


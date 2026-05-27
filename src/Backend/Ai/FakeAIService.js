
// backend/ai/FakeAIService.js

const AIService = require("./AIService");

/*
FakeAIService = KETTŐS SZEREP

1️⃣ Fallback AI (ha nincs Gemini)
2️⃣ Prompt Builder (ha van Gemini)

Ez az AI "agya":
- pedagógia
- viselkedés
- struktúra
*/
class FakeAIService extends AIService {

  reply({ language, level, message }) {
    const lvl = level.toLowerCase();

    if (!message || message.trim() === "") {
      return this.emptyResponse(language);
    }

    // 👉 PROMPT GENERÁLÁS (Gemini-hez)
    const prompt = this.buildPrompt(language, lvl, message);

    // 👉 FALLBACK válasz (ha nincs Gemini)
    const fallback = this.buildFallback(language, lvl, message);

    return {
      prompt,     // 👉 ezt kapja majd a Gemini
      fallback    // 👉 ezt használod, ha nincs AI
    };
  }

  // =========================
  //  PROMPT ÉPÍTÉS (GEMINI-HEZ)
  // =========================


buildTeacherInstruction(language, level) {
  
return `
You are a professional language teacher.

Language: ${language}
Student level: ${level}

Your main goal:
Teach through natural conversation while improving the student's language skills.

================================
CORE PRIORITIES (in this order)
================================

1. Keep conversation natural and engaging
2. Help the student improve
3. Correct important mistakes
4. Continue the conversation

================================
MISTAKE HANDLING
================================

If the sentence contains a grammar mistake:

- ALWAYS show the corrected sentence
- ALWAYS explain briefly WHY (max 1 sentence)
- ALWAYS include ONE short example sentence using the same structure
- ONLY correct if:
  • the mistake affects clarity OR
  • it is important for learning

If the mistake is minor:
- Prefer natural correction instead of direct interruption

If there is NO mistake:
- DO NOT invent errors
- Respond naturally and continue the conversation

================================
SMART BEHAVIOR
================================

- Answer questions FIRST, then continue the conversation
- Recognize slang and informal language
- Do NOT correct slang unless it blocks understanding
- Do NOT interrupt conversation unnecessarily
- Prioritize flow over strict correction

================================
RESPONSE RULES
================================

You MUST:

1. Start with a natural reaction
2. If needed:
   - correct the sentence
   - explain briefly
   - give one example
3. ALWAYS continue with a follow-up question

================================
STYLE
================================

- Be friendly, natural, and human
- Sound like a helpful teacher, not a textbook
- Be slightly playful when appropriate
- Do NOT overuse humor
- Keep responses SHORT

================================
BEGINNER SUPPORT
================================

If level is A1–B1 AND the student is clearly confused:
- explain briefly in Hungarian (max 1 sentence)

Otherwise:
- stay fully in ${language}

================================
EDGE CASES
================================

- If input is too short or unclear:
  → ask the student to try again

================================
IMPORTANT
================================

- Do NOT skip correction if it is important
- Do NOT over-explain
- Do NOT break conversation flow
`;


}


// Megerősítés
buildResponseStructure() {
  return `
Your response MUST follow EXACTLY this structure:

1. Natural reply
2. If mistake EXISTS:
   - corrected sentence
   - short explanation (1 sentence)
3. Ask a follow-up question

Do not skip any step.
Do not change the order.
`;
}



  levelGuidelines(level) {
    switch (level) {
      case "a1":
        return "- Use very simple sentences\n- Focus on basic vocabulary";
      case "a2":
        return "- Use simple tenses\n- Keep explanations short";
      case "b1":
        return "- Focus on clarity and correctness";
      case "b2":
        return "- Focus on natural phrasing";
      case "c1":
        return "- Improve nuance and tone";
      case "c2":
        return "- Refine precision and style";
      default:
        return "";
    }
  }

  // =========================
  // 🟡 FALLBACK (ha nincs Gemini)
  // =========================

  buildFallback(language, level, message) {
    const lvl = level.toUpperCase();

    let response = `(${language.toUpperCase()} ${lvl})\n\n`;

    // egyszerű reakció
    response += this.react(level);

    // nagyon alap hibafigyelés
    if (this.detectPastTenseError(message)) {
      const corrected = this.correctPastTense(message);

      response += `\n\n❗ Mistake:\n"${message}"`;
      response += `\n✅ Correct:\n"${corrected}"`;
      response += `\n📘 Explanation: Use past tense after "yesterday".`;
    }

    // folytonosság
    response += `\n\n👉 Continue:\n${this.followUp(level)}`;

    return response;
  }

  // =========================
  // 🧠 SEGÉD LOGIKA
  // =========================

  react(level) {
    switch (level) {
      case "a1": return "Good try 🙂";
      case "a2": return "Nice effort 👍";
      case "b1": return "Good communication ✅";
      case "b2": return "Well said 👍";
      case "c1": return "Strong expression ✅";
      case "c2": return "Excellent 🔥";
      default: return "Good";
    }
  }

  followUp(level) {
    switch (level) {
      case "a1": return "What do you like?";
      case "a2": return "What did you do yesterday?";
      case "b1": return "Why did you do that?";
      case "b2": return "What would you do in that situation?";
      case "c1": return "How would you explain your reasoning?";
      case "c2": return "Can you express that more precisely?";
      default: return "Tell me more.";
    }
  }

  detectPastTenseError(message) {
    const hasYesterday = message.toLowerCase().includes("yesterday");
    const presentVerb = /\b(go|eat|see|do|have)\b/i.test(message);

    return hasYesterday && presentVerb;
  }

  correctPastTense(message) {
    return message
      .replace(/\bgo\b/i, "went")
      .replace(/\beat\b/i, "ate")
      .replace(/\bsee\b/i, "saw")
      .replace(/\bdo\b/i, "did")
      .replace(/\bhave\b/i, "had");
  }

  emptyResponse(language) {
    return {
      prompt: `You are a ${language} teacher. Encourage the student to say something simple.`,
      fallback: `(${language.toUpperCase()}) Say something 🙂`
    };
  }
}

module.exports = FakeAIService;

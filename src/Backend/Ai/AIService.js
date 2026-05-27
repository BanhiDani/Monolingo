
// backend/ai/AIService.js

// Ez az absztrakt AI "szerződés"
// Minden AI-nak tudnia kell válaszolni egy üzenetre
class AIService {
  reply({ language, level, message }) {
    // Ezt a metódust a gyerekosztályoknak kell megvalósítani
    throw new Error("reply() method must be implemented");
  }
}

module.exports = AIService;
``

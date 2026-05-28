
// backend/server.js

// ===== IMPORTOK =====
const express = require("express");
const FakeAIService = require("./Ai/FakeAIService");
const cors = require("cors");
require("dotenv").config();

// ===== APP LÉTREHOZÁS =====
const app = express();


// ===== MIDDLEWARE =====
app.use(cors()); 
app.use(express.json());

// ===== AI PÉLDÁNY =====

const GeminiAIService = require("./ai/GeminiAIService");

const aiService = new GeminiAIService(process.env.GEMINI_API_KEY)


// ===== HEALTH CHECK =====
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend is running"
  });
});

// ===== CHAT ENDPOINT =====
app.post("/api/chat", async (req, res) => {
  const { language, level, message } = req.body;

  const reply = aiService.reply({
    language,
    level,
    message
  });

  res.json({ reply });
});

// ===== SERVER INDÍTÁS =====
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
``

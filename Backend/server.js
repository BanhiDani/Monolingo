
// backend/server.js

// ===== IMPORTOK =====
const express = require("express");
const FakeAIService = require("ai/FakeAIService");
const cors = require("cors");

// ===== APP LÉTREHOZÁS =====
const app = express();


// ===== MIDDLEWARE =====
app.use(cors()); 
app.use(express.json());

// ===== AI PÉLDÁNY =====
const aiService = new FakeAIService();

// ===== HEALTH CHECK =====
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend is running"
  });
});

// ===== CHAT ENDPOINT =====
app.post("/api/chat", (req, res) => {
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

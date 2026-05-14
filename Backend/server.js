
// backend/server.js

// 1. Express betöltése
const express = require("express");

// 2. Express alkalmazás létrehozása
const app = express();

// 3. Middleware a JSON adatok kezelésére
app.use(express.json());

// 4. Teszt végpont (életjel)
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend is running"
  });
});

// 5. Szerver indítása
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});


// POST /api/chat - frontend üzenetek fogadása
app.post("/api/chat", (req, res) => {
  const { language, level, message } = req.body;

  res.json({
    reply: `Received (${language}, ${level}): ${message}`
  });
});

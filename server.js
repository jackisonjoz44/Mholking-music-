require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

/* ===== MIDDLEWARE ===== */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ===== BASIC TEST ROUTE ===== */
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend is running successfully 🚀"
  });
});

/* ===== API ROUTES ===== */
// Example placeholder (you can expand later)
app.get("/api/health", (req, res) => {
  res.json({ health: "good" });
});

/* ===== SERVER START ===== */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

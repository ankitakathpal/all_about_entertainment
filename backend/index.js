
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false
  }
});

db.connect(err => {
  if (err) {
    console.error("MySQL Error:", err);
  } else {
    console.log("MySQL Connected");
  }
});


app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  const sql = `
    INSERT INTO contact_messages (name, email, phone, message)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [name, email, phone, message], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Message saved successfully" });
  });
});

app.post("/api/book-artist", (req, res) => {
  const { artistName, name, phone, eventType, eventDate, budget, message } = req.body;

  const sql = `
    INSERT INTO artist_bookings
    (artist_name, name, phone, event_type, event_date, budget, message)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [artistName, name, phone, eventType, eventDate, budget, message],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Booking saved successfully" });
    }
  );
});

app.get("/", (req, res) => {
  res.send("Backend Running");
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
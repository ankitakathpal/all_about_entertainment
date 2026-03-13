const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "mysql-1d517a8a-allabout1.f.aivencloud.com",
  port: 28159,
  user: "avnadmin",
  password: "AVNS_ULzjfu-Ljna-TATP4A-",
  database: "all_about",
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
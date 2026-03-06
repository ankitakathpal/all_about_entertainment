
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const { google } = require("googleapis");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "all_about"
});

db.connect(err => {
  if (err) {
    console.error("MySQL Error:", err);
  } else {
    console.log("MySQL Connected");
  }
});

/* CONTACT FORM */
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


/* ARTIST BOOKING FORM */
app.post("/api/book-artist", async (req, res) => {
  const { artistName, name, phone, eventType, eventDate,budget, message } = req.body;

  const sql = `
    INSERT INTO artist_bookings
    (artist_name, name, phone, event_type, event_date, budget, message)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [artistName, name, phone, eventType, eventDate,categoty, budget, message],
    async (err) => {
      if (err) return res.status(500).json(err);

      try {
        await saveToGoogleSheets({
          artistName,
          name,
          phone,
          eventType,
          eventDate,
          categoty,
          budget,
          message,
        });

        res.json({ message: "Booking saved successfully" });

      } catch (sheetError) {
        console.error("Google Sheets Error:", sheetError);
        res.json({ message: "Saved to DB but Sheet failed" });
      }
    }
  );
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});

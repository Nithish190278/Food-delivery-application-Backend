
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());


app.use("/images", express.static(path.join(__dirname, "public/images")));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", 
  database: "chaithanya", 
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to MySQL database.");
  }
});

const JWT_SECRET = process.env.JWT_SECRET || "FoodApp";

// API: User Sign-Up
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const checkQuery = "SELECT * FROM users WHERE email = ?";
    db.query(checkQuery, [email], async (err, results) => {
      if (err) return res.status(500).json({ error: "Database error" });

      if (results.length > 0) {
        return res.status(400).json({ error: "Email already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const insertQuery = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
      db.query(insertQuery, [name, email, hashedPassword], (err) => {
        if (err) return res.status(500).json({ error: "Failed to register user" });

        res.status(200).json({ message: "User registered successfully" });
      });
    });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// API: User Sign-In
app.post("/api/signin", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], async (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });

    if (results.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ message: "Sign-in successful", token });
  });
});

// API: Orders
app.post("/api/orders", (req, res) => {
  const { fullName, mobileNumber, pinCode, addressLine1, addressLine2, city, state, paymentMethod } = req.body;

  const insertOrderQuery = `
    INSERT INTO orders (full_name, mobile_number, pin_code, address_line1, address_line2, city, state, payment_method)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    insertOrderQuery,
    [fullName, mobileNumber, pinCode, addressLine1, addressLine2, city, state, paymentMethod],
    (err, result) => {
      if (err) {
        console.error("Error inserting order:", err);
        return res.status(500).json({ error: "Failed to place the order" });
      }
      res.status(200).json({ message: "Order placed successfully", orderId: result.insertId });
    }
  );
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


/* eslint-disable no-undef */
const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const router = express.Router();
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors()); // Enable CORS for all routes

app.use("/", router);

router.post("/contacts", (req, res) => {
  const { name, email, message } = req.body;
  // Use nodemailer to send the email
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.sendStatus(500);
    } else {
      console.log("Email sent:", info.response);
      res.sendStatus(200);
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

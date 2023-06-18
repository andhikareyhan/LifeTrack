import express from "express";
import { validCredentials } from "./credentials.js";

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const isValidCredentials = validCredentials.some(
    (credentials) => credentials.email === email && credentials.password === password
  );

  if (isValidCredentials) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: "Invalid email or password" });
  }
});

export default router;

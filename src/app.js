import express from "express";
import { validateShortURL } from "./urlValidator.js";

const app = express();

app.use(express.json());

app.post("/validate-url", (req, res) => {
  const { url } = req.body;
  const isValid = validateShortURL(url);
  res.status(isValid ? 200 : 400).json({ valid: isValid });
});

export default app;

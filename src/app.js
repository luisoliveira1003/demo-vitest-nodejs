import { validateShortURL } from "./urlValidator";
import express from "express";

const app = express();

app.post("/validate-url", (req, res) => {
  const { url } = req.body;
  const isValid = validateShortURL(url);
  res.status(isValid ? 200 : 400).json({ valid: isValid });
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;

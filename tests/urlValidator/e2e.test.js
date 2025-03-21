import { describe, it } from "vitest";
import request from "supertest";
import express from "express";
import { validateShortURL } from "../../src/urlValidator";

const app = express();
app.use(express.json());

app.post("/validate-url", (req, res) => {
  const { url } = req.body;
  const isValid = validateShortURL(url);
  res.status(isValid ? 200 : 400).json({ valid: isValid });
});

describe("Testes E2E – API de validação", () => {
  it("Deve validar uma URL correta via API", async () => {
    await request(app)
      .post("/validate-url")
      .send({ url: "valid123" })
      .expect(200, { valid: true });
  });

  it("Deve rejeitar uma URL inválida via API", async () => {
    await request(app)
      .post("/validate-url")
      .send({ url: "invalid!$" })
      .expect(400, { valid: false });
  });
});
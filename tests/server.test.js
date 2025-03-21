import request from "supertest";
import { describe, it, afterAll, expect } from "vitest";
import server from "../src/server.js";

describe("Testes para server.js", () => {
  afterAll(() => {
    server.close();
  });

  it("Deve responder a requisição POST em /validate-url com URL válida", async () => {
    const res = await request(server)
      .post("/validate-url")
      .send({ url: "valid123" });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ valid: true });
  });

  it("Deve responder a requisição POST em /validate-url com URL inválida", async () => {
    const res = await request(server)
      .post("/validate-url")
      .send({ url: "invalid!$" });
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ valid: false });
  });
});

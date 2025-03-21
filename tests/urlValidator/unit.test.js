import { describe, it, expect } from "vitest";
import { validateShortURL } from "../../src/urlValidator";

describe("Testes Unitários - Validador de URL", () => {
  it("Deve validar uma URL correta", () => {
    expect(validateShortURL("abcde12345")).toBe(true);
  });

  it("Deve rejeitar uma URL com mais de 10 caracteres", () => {
    expect(validateShortURL("abcdefghijklmnop")).toBe(false);
  });

  it("Deve rejeitar uma URL com caracteres inválidos", () => {
    expect(validateShortURL("abcde@12345")).toBe(false);
  });
});

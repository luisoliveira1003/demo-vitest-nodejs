import { describe, it, expect } from "vitest";
import { validateShortURL } from "../../src/urlValidator.js";

describe("Testes de Integração - Validador de URL", () => {
  it("Deve validar múltiplas URLs corretamente", () => {
    const urls = ["valid1", "1234567890", "invalido!", "muitolonga_"];
    const resultados = urls.map((url) => validateShortURL(url));
    expect(resultados).toEqual([true, true, false, false]);
  });
});

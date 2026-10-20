import { test } from "node:test";
import assert from "node:assert/strict";
import { sendMessage, CONTACT_ENDPOINT } from "../src/lib/contact.js";

test("envia os campos para o endpoint existente e solicita resposta JSON", async () => {
  const data = new FormData();
  data.set("nome", "Teste local");
  data.set("email", "teste@example.com");
  data.set("mensagem", "Mensagem simulada, sem envio real.");
  await sendMessage(data, async (url, options) => {
    assert.equal(url, CONTACT_ENDPOINT);
    assert.equal(options.method, "POST");
    assert.equal(options.headers.Accept, "application/json");
    assert.equal(options.body, data);
    assert.ok(options.signal instanceof AbortSignal);
    return { ok: true };
  });
});

test("não apresenta sucesso quando o serviço recusa a mensagem", async () => {
  await assert.rejects(
    sendMessage(new FormData(), async () => ({ ok: false, status: 422 })),
  );
});

test("propaga falha de rede para permitir nova tentativa sem apagar os campos", async () => {
  await assert.rejects(
    sendMessage(new FormData(), async () => {
      throw new TypeError("Failed to fetch");
    }),
  );
});

test("propaga timeout em vez de deixar o formulário aguardando indefinidamente", async () => {
  await assert.rejects(
    sendMessage(new FormData(), async () => {
      throw new DOMException("Timeout", "TimeoutError");
    }),
    { name: "TimeoutError" },
  );
});

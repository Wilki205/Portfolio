export const CONTACT_ENDPOINT = "https://formspree.io/f/xblzknwv";

/** Send only user-provided contact fields. A resolved request alone is not success. */
export async function sendMessage(formData, request = fetch) {
  const response = await request(CONTACT_ENDPOINT, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error("Não foi possível enviar a mensagem.");
}

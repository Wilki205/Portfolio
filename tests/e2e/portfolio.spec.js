import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import assert from "node:assert/strict";

test("layout, acessibilidade, menu e contato sem envio externo", async ({
  page,
}, testInfo) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/", { waitUntil: "networkidle" });
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Pular para o conteúdo" }),
  ).toBeFocused();
  assert.equal(await page.locator("h1").count(), 1);
  for (const width of [1440, 1024, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await expect
      .poll(() =>
        page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      )
      .toBe(true);
    const heroBounds = await page.locator(".hero-copy").boundingBox();
    expect(heroBounds.x + heroBounds.width).toBeLessThanOrEqual(width);
    for (const img of await page.locator("img").all()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate((i) => i.decode());
      assert.ok(await img.evaluate((i) => i.naturalWidth > 0));
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: testInfo.outputPath(`portfolio-${width}.png`),
      fullPage: true,
    });
    const axe = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    console.log(
      "Viewport",
      width,
      "accessibility",
      axe.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => n.target),
      })),
    );
    assert.equal(axe.violations.length, 0);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Menu" }).click();
  await page
    .locator("#main-nav")
    .getByRole("link", { name: "Projetos", exact: true })
    .click();
  assert.equal(
    await page.locator("#menu-toggle").getAttribute("aria-expanded"),
    "false",
  );
  await page.getByRole("button", { name: "Menu" }).click();
  await page.keyboard.press("Escape");
  assert.equal(
    await page.locator("#menu-toggle").getAttribute("aria-expanded"),
    "false",
  );
  assert.equal(
    await page.evaluate(() => document.activeElement.id),
    "menu-toggle",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  assert.equal(
    await page
      .locator("html")
      .evaluate((e) => getComputedStyle(e).scrollBehavior),
    "auto",
  );
  assert.equal(
    await page
      .locator(".floating-label")
      .first()
      .evaluate((e) => getComputedStyle(e).animationName),
    "none",
  );
  await page.locator("#contato").scrollIntoViewIfNeeded();
  await page.getByLabel("Seu nome", { exact: true }).fill("Teste local");
  await page
    .getByLabel("Seu e-mail", { exact: true })
    .fill("teste@example.com");
  await page
    .getByLabel("Sua mensagem", { exact: true })
    .fill("Teste simulado do formulário, sem envio externo.");
  await page.route("https://formspree.io/**", (r) =>
    r.fulfill({
      status: 422,
      contentType: "application/json",
      body: '{"error":"simulated"}',
    }),
  );
  await page.getByRole("button", { name: "Enviar mensagem" }).click();
  await page
    .getByRole("status")
    .filter({ hasText: "Não foi possível enviar" })
    .waitFor();
  assert.equal(
    await page.getByLabel("Seu nome", { exact: true }).inputValue(),
    "Teste local",
  );
  await page.unroute("https://formspree.io/**");
  await page.route("https://formspree.io/**", async (r) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    await r.fulfill({
      status: 200,
      contentType: "application/json",
      body: '{"ok":true}',
    });
  });
  await page.getByRole("button", { name: "Enviar mensagem" }).click();
  await page.getByRole("button", { name: "Enviando…" }).waitFor();
  assert.equal(
    await page.getByRole("button", { name: "Enviando…" }).isDisabled(),
    true,
  );
  await page
    .getByRole("status")
    .filter({ hasText: "Mensagem enviada!" })
    .waitFor();
  assert.equal(
    await page.getByLabel("Seu nome", { exact: true }).inputValue(),
    "",
  );
  assert.deepEqual(errors, []);
});

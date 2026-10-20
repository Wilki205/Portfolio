# Wilkison Bruno · Portfólio Full Stack

Portfólio profissional em português, desenvolvido com React 19 e Vite 7. Interface responsiva em azul-marinho, com seções de apresentação, sobre, experiência, projetos, stack, formação e contato.

## Executar localmente

Requer Node.js 20.19+ ou 22.12+ e npm compatível. O trabalho foi validado com Node.js 24.

```sh
npm ci
npm run dev
```

## Validar e revisar

```sh
npm run lint
npm test
npm run build
npm run preview
```

O build fica em `dist/`. Nenhum deploy ou push foi executado. A branch de trabalho é `feat/portfolio-fullstack-2026`.

## Testes no navegador

```sh
npx playwright install --with-deps chromium
npm run test:e2e
```

O Playwright inicia o servidor local automaticamente e usa respostas simuladas para o Formspree. Verifica larguras de 320, 390, 768, 1024 e 1440 px, imagens, rolagem horizontal, limites do conteúdo principal, skip link, menu mobile, Escape, movimento reduzido e estados de envio. O axe verifica regras WCAG A/AA automatizáveis; isso não substitui revisão com leitores de tela e dispositivos reais. Capturas ficam em `test-results/`, ignorado pelo Git.

## Onde editar

- `src/data/portfolio.js`: projetos, tecnologias e redes sociais; contrato JSDoc para adoção gradual de TypeScript.
- `src/components/`: seções e componentes reutilizados da versão anterior.
- `src/index.css`: tokens, layout, breakpoints e regras de movimento reduzido.
- `src/lib/contact.js`: integração Formspree e timeout.
- `public/projects/*.webp`: imagens públicas otimizadas dos cases.
- `public/curriculo/index.html`: currículo atualizado, imprimível como PDF pelo navegador.
- `index.html`: SEO, canonical e metadados sociais.
- `public/og-cover.png` e `public/favicon.svg`: identidade de compartilhamento.
- `docs/AUDIT.md`: auditoria, fontes dos cases e decisões sobre conteúdo.

Os componentes continuam em JSX. Não há ganho proporcional em reescrever toda a aplicação nesta entrega; a sequência proposta de migração para TypeScript está na auditoria.

## Formulário

O formulário usa o endpoint Formspree já presente no projeto (`https://formspree.io/f/xblzknwv`), sem credenciais no cliente. Inclui rótulos, validação nativa, limites de tamanho, honeypot, estado de envio, mensagens acessíveis, timeout e nova tentativa. Dados são enviados somente quando o visitante submete o formulário. O envio direto por HTML também está configurado no elemento `form`; a aplicação exige JavaScript para renderizar.

Os testes automatizados usam respostas simuladas; não enviam e-mails. Antes do deploy, confirmar na conta Formspree a titularidade do endpoint, destinatário, eventuais restrições de origem e recebimento real de uma mensagem. Nenhuma entrega real foi afirmada nesta revisão.

## Publicação futura

O domínio encontrado no cadastro público do repositório é `https://portfolio-99xi.vercel.app/`, usado no canonical e nas imagens sociais. Atualizar esses valores se o destino mudar. Para hospedagem na raiz, usar `npm run build`. Para GitHub Pages sob `/Portfolio/`, usar:

```sh
npm run build -- --base=/Portfolio/
```

Os caminhos dos projetos, favicon e currículo respeitam URLs relativas ou `BASE_URL`. O publicador legado `gh-pages` e seus scripts foram retirados por alertas de dependências transitivas. A publicação deve ser configurada separadamente após revisão. Não versionar `dist/`.

## Revisão antes do deploy

Confirmar visual e navegação por teclado em dispositivos reais, recebimento do formulário, destino canonical e perfil LinkedIn (a consulta automatizada recebeu HTTP 999). Os projetos exibidos apontam para repositórios públicos verificados. Cases sem confirmação ou com acesso administrativo foram retirados. A captura de painel autenticado e o PDF desatualizado foram removidos dos arquivos publicados pelo próximo build. Conferir publicações anteriores e histórico conforme registrado na auditoria.

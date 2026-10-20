# Auditoria — 20/10/2026

## Conteúdo e links

O contexto profissional fornecido pelo proprietário é a fonte para PAD Saúde (desde agosto de 2026), CESAR School (experiência anterior), FICR e certificação AWS. Datas de término, métricas, detalhes internos e tecnologias utilizadas na PAD não foram inferidos.

Consulta HTTP pública feita em 20/10/2026. Um HTTP 200 confirma resposta, não valida funcionalidades, segurança, autoria nem autorização para expor um ambiente.

| Item anterior                               | Resultado                                                                                | Decisão                                                                                                       |
| ------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Syncro / syncro.forged-apps.com             | HTTP 200. Imagem local apresenta gestão operacional, divergente da descrição educacional | Fora da seleção até confirmar escopo e stack; nenhuma associação presumida com outro repositório              |
| DentalCare / agenda.appdentalcare.com/login | HTTP 200, acesso administrativo                                                          | Link retirado da interface; sem navegar em áreas autenticadas                                                 |
| Portal Educacional / portal.forged-apps.com | HTTP 200, página de acesso                                                               | Case preservado, com link para código público em vez de login                                                 |
| PhysiQ Pro / physiq.forged-apps.com         | HTTP 200                                                                                 | Case preservado, com código público como referência verificável                                               |
| API de Gestão / monitor.forged-apps.com     | Falha de DNS                                                                             | Case retirado: captura era um painel acadêmico autenticado, não evidência de API de gestão                    |
| GitHub / Wilki205                           | Perfil e repositórios públicos confirmados pela API                                      | Preservado                                                                                                    |
| LinkedIn / in/wilkisonb                     | HTTP 999 (restrição de consulta automatizada)                                            | Preservado como cadastrado e referenciado no perfil GitHub; revisão manual pendente                           |
| E-mail                                      | seuemail@exemplo.com era fictício                                                        | Removido                                                                                                      |
| Formspree / f/xblzknwv                      | Endpoint existente; HEAD retorna 400                                                     | Integração preservada. HEAD não valida recebimento; testar entrega pela conta do proprietário antes do deploy |
| Domínio cadastrado no GitHub                | portfolio-99xi.vercel.app retorna HTTP 200                                               | Usado como canonical e base absoluta do Open Graph; revisar se trocar domínio                                 |
| Currículo                                   | HTML e PDF com apresentação antiga                                                       | HTML refeito com dados fornecidos e opção de impressão; PDF antigo retirado                                   |

## Evidências públicas dos cases

- [Portal Educacional — package.json](https://github.com/Wilki205/talent-bloom-portal/blob/main/package.json): React, TypeScript, Tailwind e Vite. [Index.tsx](https://github.com/Wilki205/talent-bloom-portal/blob/main/src/pages/Index.tsx) compõe conteúdo, avisos, atividades e suporte. Imagem local é a página de apresentação/acesso, sem registros de alunos.
- [PhysiQ Pro — package.json](https://github.com/Wilki205/shape-shift-pro-94/blob/main/package.json): React, TypeScript, Tailwind e Vite. [Index.tsx](https://github.com/Wilki205/shape-shift-pro-94/blob/main/src/pages/Index.tsx) referencia Landing. A imagem local apresenta a proposta de avaliação física. Não são afirmados resultados, uso em produção, backend, testes ou controles de segurança desses projetos.

As listas anteriores com Express, PostgreSQL, Prisma, Docker, integrações Classroom e JWT não foram mantidas nos cases sem evidência correspondente. A stack profissional é apresentada separadamente, conforme o briefing.

## Privacidade

A captura `api-gestao.png` foi retirada de `public`, pois mostrava um painel autenticado com conta e indicadores educacionais. Isso impede sua inclusão no próximo build; não remove arquivos de versões já publicadas nem do histórico Git. Conferir essas versões antes de publicar. Os links administrativos foram removidos também do currículo HTML. Não foram acessadas áreas privadas nem enviadas mensagens externas para testar o formulário.

## Implementação

- React + Vite e componentes existentes preservados; dados em `src/data/portfolio.js` com contrato JSDoc.
- JSX mantido por proporcionalidade. Migração sugerida: instalar TypeScript e configuração com `allowJs`, converter primeiro o contrato de dados e a integração de contato, depois componentes por alteração funcional; habilitar `checkJs` gradualmente e lint TypeScript ao começar a migração.
- CSS local com fontes do sistema e ícones SVG inline, sem CDN de fontes/ícones nem bloqueio de conteúdo por biblioteca de animação.
- Imagens dos cases em WebP, lazy loading e dimensões reservadas. Aproximadamente 21 KB + 26 KB, contra 569 KB + 124 KB dos PNG originais.
- Foco, skip link, hierarquia de títulos, menu com Escape, mensagens de formulário e reduced motion.
- Endpoint de formulário preservado, limite de espera de 15 s, proteção contra envio duplicado, campos preservados no erro e limpos somente após resposta bem-sucedida.

## Resultado das validações

- `npm run lint`: passou.
- `npm test`: passou; casos simulados de payload, rejeição HTTP, falha de rede e timeout.
- `npm run build`: passou com Vite 7.3.7; JavaScript principal de aproximadamente 66,5 KB gzip e CSS de 5,7 KB gzip.
- `npm run test:e2e`: passou. Chromium em 320, 390, 768, 1024 e 1440 px, sem rolagem horizontal, conteúdo do hero dentro da largura, imagens carregadas, menu mobile, Escape/foco, skip link, reduced motion e estados do formulário com interceptação local.
- axe: nenhuma violação encontrada nas regras WCAG 2 A/AA e 2.1 AA executadas nas cinco larguras. A checagem automatizada não representa certificação de acessibilidade.
- Build adicional com `--base=/Portfolio/`: validado para geração em subdiretório.
- `npm audit`: zero vulnerabilidades reportadas após atualizações compatíveis e retirada de AOS e `gh-pages`; nenhum `--force` aplicado.
- `git diff --check`: passou.

Capturas desktop/mobile são geradas pela suíte em `test-results/` e não são versionadas. Testes não enviaram mensagens reais. Nenhum push, commit ou deploy foi executado.

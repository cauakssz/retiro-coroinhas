# Retiro dos Coroinhas da Forania

Landing page estática para divulgação e inscrição do Retiro dos Coroinhas da Forania. Não há backend: as inscrições são recebidas por um Google Forms externo, e a página apenas apresenta as informações e direciona para ele.

**Produção:** https://cauakssz.github.io/retiro-coroinhas/

## Stack

- HTML5 semântico
- CSS3 puro (custom properties, flexbox, grid, `@media`, `@keyframes`)
- JavaScript (ES6+) sem dependências, sem bundler e sem etapa de build
- Hospedagem: GitHub Pages (branch `main`, diretório raiz)

## Estrutura

```
.
├── index.html      Marcação e conteúdo estático
├── style.css       Design tokens, layout e componentes
├── script.js       Dados da programação e renderização da lista
├── coroinha.png    Imagem do cabeçalho (PNG com transparência)
├── favicon.ico     Ícone da aba
└── README.md
```

## Dependências externas

| Recurso | Uso | Observação |
|---|---|---|
| Google Fonts (Young Serif, Figtree) | Tipografia | `preconnect` no `<head>`; há fallback (`Georgia, serif` e `system-ui, sans-serif`) |
| Google Maps (iframe `output=embed`) | Mapa do local | Sem chave de API; `loading="lazy"` |
| Google Forms | Inscrição e envio do comprovante Pix | Link aberto com `target="_blank"` e `rel="noopener noreferrer"` |

## Arquitetura

### HTML

Estrutura em `header` → `main` (seções) → `footer`. As seções de conteúdo usam a classe `.secao`, e `#inscricao` e `#local` são âncoras de navegação interna. O container `<ol id="programacao">` é preenchido em tempo de execução por `script.js`.

### CSS

- **Design tokens:** cores e fontes declaradas como custom properties em `:root` (`--cor-fundo`, `--cor-principal`, `--fonte-titulo` etc.).
- **Tema escuro:** sobrescreve as variáveis dentro de `@media (prefers-color-scheme: dark)`. Não há alternância manual.
- **Nomenclatura:** BEM (`bloco__elemento--modificador`), por exemplo `programacao__item--destaque`.
- **Cabeçalho:** `min-height: 100svh` (com fallback `100vh`), layout em flexbox e imagem com altura fluida via `clamp(320px, 62vh, 520px)`. O indicador de rolagem usa `@keyframes` e é ocultado com `prefers-reduced-motion`.
- **Rolagem:** `scroll-behavior: smooth` em `html`.
- **Responsivo:** um único breakpoint em `max-width: 620px`, que muda o cabeçalho para coluna, centraliza o texto, remove a altura de tela cheia e oculta o indicador de rolagem.
- **Mapa:** `iframe` com `pointer-events: none` e um `<a>` sobreposto (`position: absolute; inset: 0`), fazendo o mapa inteiro funcionar como link para o Google Maps.

### JavaScript

`script.js` define `PROGRAMACAO`, um array de objetos, e o renderiza na lista da página.

```js
{
  horario: "8h – 8h30",              // string, obrigatório
  titulo: "Acolhida e animação",     // string, obrigatório
  responsaveis: "João e Cauã",       // string, opcional
  descricao: "Recepção dos...",      // string, opcional
  destaque: true                     // boolean, opcional (marcador em cor de destaque)
}
```

Fluxo: `mostrarProgramacao()` percorre o array, chama `criarItemDaProgramacao()` para gerar cada `<li>` e o anexa ao `<ol id="programacao">`.

> O template usa `innerHTML`. Isso é seguro enquanto os dados forem estáticos e controlados por quem edita o repositório. Se essa lista passar a vir de uma fonte externa ou de entrada de usuário, é necessário escapar os valores ou montar os nós com `textContent`.

## Desenvolvimento local

Não há instalação. Para servir os arquivos:

```bash
python3 -m http.server 8000
```

E abrir `http://localhost:8000`. Abrir o `index.html` diretamente no navegador também funciona, já que não há `fetch` nem módulos ES.

## Deploy

O GitHub Pages publica a branch `main` (raiz) automaticamente a cada push. O andamento pode ser acompanhado na aba **Actions**. Após a publicação, o navegador pode servir a versão em cache; atualizar com `Ctrl + F5`.

## Convenções de edição

| Alteração | Arquivo |
|---|---|
| Textos, data, valor, endereço, links, rodapé | `index.html` |
| Atividades e horários | `script.js` (`PROGRAMACAO`) |
| Cores e fontes | `style.css` (`:root`) |

O link do formulário aparece em dois botões no `index.html` e precisa ser alterado nos dois. Ao alterar data, valor ou local, atualizar também o Google Forms para manter as informações consistentes.

## Limitações conhecidas

- A seção de programação depende de JavaScript. Sem ele, o conteúdo não é exibido, e rastreadores que não executam scripts (incluindo algumas prévias de link) não o enxergam. Uma alternativa é mover a lista para o HTML estático.
- Não há metadados Open Graph, então a prévia do link em apps de mensagem é básica.
- O tema segue apenas a preferência do sistema, sem alternância manual.

## Segurança e dados

O repositório é público. Não devem ser versionados chaves, dados pessoais de inscritos ou planilhas de respostas. Os dados de pagamento e os comprovantes ficam somente no Google Forms.

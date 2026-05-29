# Portfólio Data Science

Portfólio estático para Data Science, Machine Learning, Python e SQL com estética de terminal/código. O projeto destaca três projetos reais de portfólio: churn, analytics de e-commerce e previsão de demanda de táxi.

O site tem alternância de idioma PT/EN. O modo PT usa português com acentos e cedilha; o modo EN deixa a leitura pronta para recrutadores internacionais.

## Estrutura

- `index.html`: conteúdo principal do portfólio.
- `styles.css`: layout responsivo, tema escuro de terminal, blocos de código e cards técnicos.
- `script.js`: animações no scroll com `IntersectionObserver`, detalhe dinâmico no terminal e tradução PT/EN.
- `assets/favicon.svg`: ícone do site.
- `vercel.json`: configuração simples para Vercel.
- `.nojekyll`: evita processamento Jekyll no GitHub Pages.

## Como testar localmente

Abra `index.html` no navegador ou rode um servidor estático:

```bash
python -m http.server 8000
```

Depois acesse:

```txt
http://localhost:8000
```

## Deploy no Vercel

1. Envie esta pasta para um repositório no GitHub.
2. No Vercel, importe o repositório.
3. Como o site é estático, deixe o framework como `Other`.
4. Não precisa de comando de build.
5. O diretório de saída pode ficar vazio ou como raiz do projeto.

## Deploy no GitHub Pages

1. Suba os arquivos para o repositório.
2. Em `Settings > Pages`, selecione `Deploy from a branch`.
3. Escolha a branch principal e a pasta `/root`.
4. Salve e aguarde o link `https://seu-usuario.github.io/nome-do-repo/`.

## Segurança antes de publicar

O `.gitignore` bloqueia `.env`, logs, `node_modules/` e arquivos locais do Vercel. Não coloque tokens, senhas, chaves de API ou dados privados diretamente no HTML, CSS ou JS.

## Personalização rápida

- Troque `Renan` pelo seu nome em `index.html`.
- Atualize links de GitHub, LinkedIn e email.
- Atualize os links dos cards quando os repositórios forem publicados.
- Inclua seu currículo como PDF e adicione um botão apontando para ele.

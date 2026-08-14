# Ateliê Di Petta — Landing Page

Site one-page focado em conversão (ligação/WhatsApp) para o Ateliê Di Petta, gerado a partir dos dados do Google Meu Negócio.

## ⚠️ O que foi preenchido automaticamente (revise antes de publicar)

Os dados abaixo estavam incompletos no briefing e foram preenchidos com valores padrão realistas. **Confira e ajuste no arquivo `index.html` antes de colocar no ar:**

1. **WhatsApp**: o campo de WhatsApp veio vazio, então usei o telefone do perfil do Google — `(11) 95696-6643` — convertido para o formato internacional `5511956966643`. Se o número de WhatsApp for diferente do telefone do Google, troque a constante `WHATSAPP_NUMBER` no final do `index.html` (dentro da tag `<script>`).
2. **Horário de funcionamento**: o Google Perfil só informava "Fechado · Abre seg. às 09:00". Preenchi o rodapé com "Seg. a Sex., 09h às 18h" como estimativa. Ajuste para o horário real no rodapé (`<footer>`).
3. **Depoimentos**: os 3 depoimentos da seção "Prova Social" são fictícios e verossímeis para o segmento (artesanato/enxoval/naninha), já que nenhum depoimento real foi enviado. Assim que tiver avaliações reais dos clientes, substitua os textos e nomes.
4. **Instagram**: não foi informado — nenhum link de Instagram foi incluído no site. Se quiser, posso adicionar depois.
5. **Foto/logo real**: o hero usa um bloco ilustrativo (ícone + frase), pois nenhuma imagem foi enviada. Recomendo substituir por fotos reais das peças assim que possível — é o que mais aumenta a conversão nesse tipo de negócio.

## 📁 Estrutura

```
atelie-di-petta/
├── index.html     ← página completa (HTML + CSS + JS em um único arquivo)
└── README.md       ← este arquivo
```

## 🚀 Como publicar no GitHub (passo a passo)

### 1. Crie um repositório no GitHub
- Acesse [github.com/new](https://github.com/new)
- Dê um nome, por exemplo `atelie-di-petta`
- Deixe como **Público** (necessário para o GitHub Pages gratuito)
- Não marque "Add a README" (você já tem um)
- Clique em **Create repository**

### 2. Suba os arquivos
**Opção A — pelo navegador (mais simples):**
- Na página do repositório recém-criado, clique em **"uploading an existing file"**
- Arraste os arquivos `index.html` e `README.md` (extraídos deste zip)
- Clique em **Commit changes**

**Opção B — pelo terminal (git):**
```bash
git init
git add index.html README.md
git commit -m "Primeira versão da landing page"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/atelie-di-petta.git
git push -u origin main
```

### 3. Ative o GitHub Pages (para deixar o site no ar gratuitamente)
- No repositório, vá em **Settings → Pages**
- Em "Source", selecione a branch **main** e a pasta **/ (root)**
- Clique em **Save**
- Aguarde 1–2 minutos. O site ficará disponível em:
  `https://SEU-USUARIO.github.io/atelie-di-petta/`

### 4. (Opcional) Domínio próprio
Se quiser usar um domínio como `www.atelieDiPetta.com.br`:
- Compre o domínio em um registrador (Registro.br, GoDaddy, etc.)
- Em **Settings → Pages → Custom domain**, digite o domínio
- No painel do seu domínio, crie um registro **CNAME** apontando para `SEU-USUARIO.github.io`

## ✏️ Como editar depois

Todo o conteúdo (textos, número de WhatsApp, endereço, cores) está no único arquivo `index.html`, dividido em seções comentadas:
`HERO`, `DIFERENCIAIS`, `SOBRE`, `SERVIÇOS`, `PROVA SOCIAL`, `CTA FINAL`, `FOOTER`.

Basta abrir o arquivo em qualquer editor de texto (ou direto no GitHub, clicando no lápis ✏️ do arquivo) e editar o texto entre as tags HTML.

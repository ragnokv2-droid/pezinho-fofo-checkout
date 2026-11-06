# Pé de Criança — Checkout de Natal

Checkout em 3 etapas para a Sandália Stitch Grendene Kids + Bolsa Stitch, com consulta de CEP, pagamento exclusivamente via PIX e rastreamento Meta.

## Produto e pagamento

- Produto: **Sandália Stitch Grendene Kids + Bolsa Stitch**
- Preço único do produto: **R$ 39,90**
- Pagamento: **PIX**
- Frete: Correios grátis ou SEDEX conforme opção selecionada no checkout
- Não há desconto por forma de pagamento nem integração InfinitePay/cartão.

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## Deploy na Vercel

1. Envie o projeto ao GitHub.
2. Importe ou aguarde o deploy do projeto na Vercel.
3. Configure as variáveis de ambiente descritas em `PEZINHO-FOFO-SETUP.md`.

## Etapas

1. **Identificação** — nome, e-mail, CPF e celular.
2. **Entrega** — CEP, endereço e escolha do frete.
3. **Pagamento** — geração de QR Code PIX e código copia e cola.

## Personalização

- Logo: `public/logo.png`
- Imagens do produto: `public/`
- Preço e produto: `src/lib/product.ts`
- Tema natalino: `src/app/globals.css` e componentes em `src/components/`

# Pezinho Fofo - configuração da cópia

Checkout independente baseado no sistema Mundo Atleta.

## Produto inicial
- Sandália Stitch Grendene Kids + Bolsa Stitch
- De R$ 69,90 por R$ 45,90
- PIX com 5% OFF: R$ 43,61
- Tamanhos aceitos na URL: 20 a 36

## Links do Outlink
Use `?tam=20` até `?tam=36`, mantendo também os parâmetros de rastreamento quando houver. Exemplo:
`https://SEU-DOMINIO/?tam=28&source=SHOPIFY&utm_source=facebook`

## Variáveis que DEVEM ser novas/separadas na Vercel
- `LEADS_WEBHOOK_URL` - planilha/webhook exclusivo Pezinho Fofo
- `DASHBOARD_PASSWORD` - senha do painel
- `PIX_KEY` - chave PIX que receberá os pagamentos
- `PIX_RECEIVER_NAME` - nome do recebedor no BR Code
- `PIX_RECEIVER_CITY` - cidade do recebedor, sem acentos de preferência
- `NEXT_PUBLIC_META_PIXEL_IDS` - IDs dos Pixels da Pezinho Fofo separados por vírgula
- `META_PIXEL_ID` - Pixel usado pela CAPI (se CAPI for utilizada)
- `META_CAPI_ACCESS_TOKEN` - token da CAPI (se disponível)
- `INFINITEPAY_HANDLE` - InfiniteTag/handle da conta que receberá cartão
- `NEXT_PUBLIC_SITE_URL` - URL pública deste novo checkout

Não reutilize sem querer webhook, Pixel, chave PIX ou InfinitePay do Mundo Atleta.

# Pé de Criança — configuração do checkout

Checkout independente com tema natalino.

## Produto
- Sandália Stitch Grendene Kids + Bolsa Stitch
- Preço único: **R$ 39,90**
- Pagamento: exclusivamente PIX
- Sem desconto no PIX e sem integração InfinitePay/cartão
- Tamanhos aceitos na URL: 20 a 36

## Links do Outlink
Use `?tam=20` até `?tam=36`, mantendo também os parâmetros de rastreamento quando houver. Exemplo:
`https://SEU-DOMINIO/?tam=28&source=SHOPIFY&utm_source=facebook`

## Variáveis de ambiente na Vercel
- `LEADS_WEBHOOK_URL` — planilha/webhook exclusivo Pé de Criança
- `DASHBOARD_PASSWORD` — senha do painel
- `PIX_KEY` — chave PIX que receberá os pagamentos (a rota atual também possui uma chave configurada no código; confira antes de publicar)
- `PIX_RECEIVER_NAME` — nome do recebedor no BR Code
- `PIX_RECEIVER_CITY` — cidade do recebedor, sem acentos de preferência
- `NEXT_PUBLIC_META_PIXEL_IDS` — IDs dos Pixels da Pé de Criança separados por vírgula
- `META_PIXEL_ID` — Pixel usado pela CAPI (se CAPI for utilizada)
- `META_CAPI_ACCESS_TOKEN` — token da CAPI (se disponível)
- `NEXT_PUBLIC_SITE_URL` — URL pública deste checkout

Não reutilize webhook, Pixel ou chave PIX de outro projeto sem conferir os dados.

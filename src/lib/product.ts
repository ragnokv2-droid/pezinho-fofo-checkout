export const PRODUCT = {
  id: "sandalia-stitch-bolsa",
  name: "Sandália Stitch Grendene Kids + Bolsa Stitch",
  originalPrice: 6990, // R$ 69,90 (apenas referência, não mostrado)
  price: 3990, // R$ 39,90 - preço único
  image: "/sandalia-stitch-bolsa.webp",
  description: "Sandália Stitch Grendene Kids acompanhada de Bolsa Stitch",
};

export function formatBRL(cents: number): string {
  return (cents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

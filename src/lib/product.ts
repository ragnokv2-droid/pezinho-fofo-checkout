export const PRODUCT = {
  id: "sandalia-stitch-bolsa",
  name: "Sandália Stitch Grendene Kids + Bolsa Stitch",
  originalPrice: 990, // R$ 49,90
  cardPrice: 2990, // R$ 29,90
  pixPrice: 2840, // 5% OFF sobre R$ 29,90 (R$ 28,40)
  image: "/sandalia-stitch-bolsa.webp",
  description: "Sandália Stitch Grendene Kids acompanhada de Bolsa Stitch",
};

export function formatBRL(cents: number): string {
  return (cents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

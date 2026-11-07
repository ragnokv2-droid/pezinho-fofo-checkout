export const PRODUCT = {
  id: "sandalia-stitch-bolsa",
  name: "Sandália Stitch Grendene Kids + Bolsa Stitch",
  originalPrice: 7990, // R$ 79,90
  cardPrice: 5990, // R$ 59,90
  pixPrice: 56,90, // 5% OFF sobre R$ 59,90 (R$ 56,90)
  image: "/sandalia-stitch-bolsa.webp",
  description: "Sandália Stitch Grendene Kids acompanhada de Bolsa Stitch",
};

export function formatBRL(cents: number): string {
  return (cents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export const PRODUCT = {
  id: "sandalia-stitch-bolsa",
  name: "Sandália Stitch Grendene Kids + Bolsa Stitch",
  price: 3990, // Preço único: R$ 39,90
  image: "/sandalia-stitch-bolsa.webp",
  description: "Sandália Stitch Grendene Kids acompanhada de Bolsa Stitch",
};

export function formatBRL(cents: number): string {
  return (cents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

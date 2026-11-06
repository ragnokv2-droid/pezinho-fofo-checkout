/**
 * Cabeçalho natalino: logo Pé de Criança, selo "Pagamento 100% seguro",
 * Papai Noel e faixa "Presenteie quem você ama neste Natal!".
 */
export default function Header() {
  return (
    <header className="relative z-[1] bg-[#f4fafe]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/natal-header.webp"
        alt="Pé de Criança — Pagamento 100% seguro. Presenteie quem você ama neste Natal!"
        width={1098}
        height={268}
        className="xmas-header-img block w-full h-auto select-none"
        draggable={false}
      />
    </header>
  );
}

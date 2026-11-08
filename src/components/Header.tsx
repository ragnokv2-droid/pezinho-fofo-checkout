import { XmasDefs, Snowflake, Sparkle, Snowman } from "@/components/XmasArt";

/**
 * Cabeçalho de inverno: céu com flocos, logo Pé de Criança, boneco de neve
 * e faixa creme "Presenteie quem você ama neste Natal!".
 * Dimensionado em cqw (largura do próprio cabeçalho).
 */
export default function Header() {
  return (
    <header className="xmas-header">
      {/* Flocos e brilhos (coordenadas de um canvas 282 x 190) */}
      <svg aria-hidden="true" viewBox="0 0 282 190" className="xmas-header-flakes">
        <defs>
          <XmasDefs />
        </defs>
        <Snowflake x={25} y={17} r={15} />
        <Snowflake x={14} y={56} r={9} o={0.95} />
        <Snowflake x={130} y={16} r={8} />
        <Snowflake x={206} y={15} r={6} o={0.9} />
        <Snowflake x={271} y={15} r={9} o={0.9} />
        <Snowflake x={13} y={96} r={5} o={0.8} />
        <Snowflake x={15} y={186} r={9} o={0.9} />
        <Snowflake x={266} y={182} r={10} o={0.9} />
        <Sparkle x={184} y={37} s={5} />
        <Sparkle x={185} y={61} s={5} />
        <Sparkle x={160} y={60} s={4} />
        <Sparkle x={77} y={10} s={3} o={0.8} />
        <Sparkle x={236} y={30} s={3} o={0.8} />
        <Sparkle x={100} y={34} s={2.5} o={0.7} />
        <Sparkle x={52} y={30} s={2.5} o={0.7} />
        <Sparkle x={250} y={52} s={2.5} o={0.7} />
      </svg>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-pe-de-crianca.webp"
        alt="Pé de Criança"
        width={1221}
        height={677}
        className="xmas-header-logo"
        draggable={false}
      />

      {/* Faixa creme */}
      <div className="xmas-banner">
        <svg viewBox="0 0 234 75" className="xmas-banner-art" aria-hidden="true">
          <rect x={1} y={1} width={232} height={73} rx={14} fill="#fff6ee" />
          <rect
            x={7}
            y={6}
            width={220}
            height={63}
            rx={10}
            fill="none"
            stroke="#ec6a5a"
            strokeWidth={0.9}
            strokeDasharray="3.2 2.4"
            strokeLinecap="round"
          />
          {/* corações */}
          <path
            transform="translate(40 49)"
            d="M0 5 C -9 -2 -6 -9 0 -5 C 6 -9 9 -2 0 5 Z"
            fill="#e8141f"
          />
          <path
            transform="translate(196 49)"
            d="M0 5 C -9 -2 -6 -9 0 -5 C 6 -9 9 -2 0 5 Z"
            fill="#e8141f"
          />
        </svg>
        <p className="xmas-banner-text">
          <span className="xmas-banner-line">Presenteie quem você ama neste</span>
          <span className="xmas-banner-natal">Natal!</span>
        </p>
      </div>

      {/* Boneco de neve (à frente da faixa) */}
      <svg aria-hidden="true" viewBox="0 0 120 150" className="xmas-header-snowman">
        <defs>
          <XmasDefs />
        </defs>
        <Snowman />
      </svg>
    </header>
  );
}

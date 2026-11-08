import { XmasDefs, Snowflake, Sparkle } from "@/components/XmasArt";
import { CuteTree, GiftBox, HeartOutline } from "@/components/StitchArt";

/**
 * Cabeçalho natalino Stitch: céu com neve, logo Pé de Criança,
 * selo de pagamento seguro, Stitch de gorro, faixa azul e árvore/presentes.
 * Dimensionado em cqw (largura do próprio cabeçalho).
 */
export default function Header() {
  return (
    <header className="xmas-header">
      {/* Flocos e brilhos (canvas 282 x 203) */}
      <svg aria-hidden="true" viewBox="0 0 282 203" className="xmas-header-flakes">
        <defs>
          <XmasDefs />
        </defs>
        <Snowflake x={14} y={22} r={9} o={0.9} />
        <Snowflake x={36} y={118} r={7} o={0.7} />
        <Snowflake x={140} y={14} r={7} o={0.85} />
        <Snowflake x={176} y={34} r={5} o={0.7} />
        <Snowflake x={268} y={66} r={9} o={0.9} />
        <Snowflake x={262} y={150} r={6} o={0.7} />
        <Snowflake x={102} y={98} r={5} o={0.6} />
        <Sparkle x={70} y={12} s={3} o={0.8} />
        <Sparkle x={120} y={56} s={3} o={0.8} />
        <Sparkle x={236} y={24} s={3.5} o={0.85} />
        <Sparkle x={150} y={86} s={2.5} o={0.7} />
        <Sparkle x={20} y={80} s={2.5} o={0.7} />
        <Sparkle x={250} y={110} s={2.5} o={0.7} />
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

      {/* Selo de pagamento seguro */}
      <div className="xmas-secure">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="xmas-secure-icon">
          <path
            d="M7.5 10.5V8a4.5 4.5 0 0 1 9 0v2.5"
            fill="none"
            stroke="#12306f"
            strokeWidth={2.4}
            strokeLinecap="round"
          />
          <rect x={4.5} y={10.5} width={15} height={11} rx={2.6} fill="#12306f" />
          <circle cx={12} cy={15.2} r={1.7} fill="#fff" />
          <rect x={11.2} y={15.8} width={1.6} height={3.2} rx={0.8} fill="#fff" />
        </svg>
        <span className="xmas-secure-text">
          Pagamento
          <br />
          100% Seguro
        </span>
      </div>

      {/* Stitch de gorro (atrás da faixa, patinhas na borda) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/stitch-natal.webp"
        alt=""
        aria-hidden="true"
        width={570}
        height={369}
        className="xmas-header-stitch"
        draggable={false}
      />

      {/* Faixa azul */}
      <div className="xmas-banner">
        <svg viewBox="0 0 360 94" className="xmas-banner-art" aria-hidden="true">
          <defs>
            <linearGradient id="sa-banner" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2450aa" />
              <stop offset="1" stopColor="#12306f" />
            </linearGradient>
          </defs>
          <rect x={2} y={2} width={356} height={90} rx={22} fill="url(#sa-banner)" stroke="#7dbbf5" strokeWidth={3} />
          <rect
            x={9}
            y={9}
            width={342}
            height={76}
            rx={16}
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth={1.2}
            strokeDasharray="5 4"
          />
          <HeartOutline x={32} y={64} s={1.1} />
          <HeartOutline x={328} y={64} s={1.1} />
          <HeartOutline x={44} y={40} s={0.6} />
          <HeartOutline x={316} y={40} s={0.6} />
        </svg>
        <p className="xmas-banner-text">
          <span className="xmas-banner-line">Presenteie quem você ama neste</span>
          <span className="xmas-banner-natal">Natal!</span>
        </p>
      </div>

      {/* Árvore à esquerda */}
      <svg aria-hidden="true" viewBox="0 0 60 100" className="xmas-header-tree">
        <CuteTree />
      </svg>

      {/* Presentes à direita */}
      <svg aria-hidden="true" viewBox="0 0 70 70" className="xmas-header-gifts">
        <GiftBox x={26} y={22} w={34} h={38} body="#ff7fb0" lid="#ff4f93" ribbon="#4aa3f2" />
        <GiftBox x={4} y={34} w={28} h={30} body="#3f8fe6" lid="#2a6bd0" ribbon="#ff4f93" />
        <Sparkle x={62} y={14} s={3} />
        <Sparkle x={8} y={22} s={2.4} o={0.8} />
      </svg>
    </header>
  );
}

import { XmasDefs, PineBranch, Ornament, Bulb, Bow } from "@/components/XmasArt";

/**
 * Cabeçalho natalino: luzes e galhos no topo, logo Pé de Criança,
 * Papai Noel e faixa vermelha "Presenteie quem você ama neste Natal!".
 * Tudo dimensionado em cqw (largura do próprio cabeçalho).
 */
const LIGHT_XS = [45, 137, 229, 320, 412, 503];

export default function Header() {
  return (
    <header className="xmas-header">
      {/* Luzes + galhos de canto */}
      <svg
        aria-hidden="true"
        viewBox="0 0 549 120"
        className="xmas-header-top"
        preserveAspectRatio="xMidYMin meet"
      >
        <defs>
          <XmasDefs />
        </defs>

        {/* fio de luzes */}
        <path
          d="M0 4 Q 45 30 91 6 T 183 6 T 274 6 T 366 6 T 458 6 T 549 6"
          fill="none"
          stroke="#4a3a22"
          strokeWidth={1.4}
          opacity={0.7}
        />
        {LIGHT_XS.map((x, i) => (
          <Bulb key={x} x={x} y={i % 2 === 0 ? 22 : 20} glow={13} />
        ))}

        {/* galhos de canto */}
        <g transform="translate(-14 -6) rotate(24)">
          <PineBranch length={150} seed={2} />
        </g>
        <g transform="translate(563 -6) rotate(156)">
          <PineBranch length={150} seed={5} />
        </g>
        <Ornament x={30} y={58} r={8} />
        <Ornament x={522} y={52} r={8} />
        <Bulb x={72} y={46} glow={11} />
        <Bulb x={480} y={46} glow={11} />
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

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/natal-papai-noel.webp"
        alt=""
        aria-hidden="true"
        width={248}
        height={226}
        className="xmas-header-santa"
        draggable={false}
      />

      {/* Faixa vermelha */}
      <div className="xmas-banner">
        <svg viewBox="0 0 940 250" className="xmas-banner-art" aria-hidden="true">
          <defs>
            <XmasDefs />
            <linearGradient id="rb-body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f23a43" />
              <stop offset="0.5" stopColor="#d4141f" />
              <stop offset="1" stopColor="#a50b16" />
            </linearGradient>
            <linearGradient id="rb-tail" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#8e0912" />
              <stop offset="1" stopColor="#b80f1b" />
            </linearGradient>
          </defs>
          {/* dobras */}
          <path d="M70 150 C 20 160 0 200 8 232 C 50 222 100 212 150 205 Z" fill="url(#rb-tail)" />
          <path d="M870 150 C 920 160 940 200 932 232 C 890 222 840 212 790 205 Z" fill="url(#rb-tail)" />
          {/* corpo */}
          <path
            d="M30 46 C 250 14 690 14 910 46 C 922 90 922 130 910 178 C 690 214 250 214 30 178 C 18 130 18 90 30 46 Z"
            fill="url(#rb-body)"
          />
          <path
            d="M40 56 C 260 28 680 28 900 56"
            fill="none"
            stroke="#fff"
            strokeOpacity={0.28}
            strokeWidth={4}
            strokeLinecap="round"
          />
          <path
            d="M44 168 C 260 198 680 198 896 168"
            fill="none"
            stroke="#ffb3a6"
            strokeOpacity={0.35}
            strokeWidth={2.5}
            strokeDasharray="7 7"
            strokeLinecap="round"
          />
          {/* brilho */}
          <g fill="#ffe27a" opacity={0.95}>
            <path d="M862 78 l5 14 14 5 -14 5 -5 14 -5 -14 -14 -5 14 -5 z" />
            <path d="M890 138 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 z" opacity={0.8} />
          </g>
          {/* presente */}
          <g transform="translate(112 112) scale(0.62)">
            <rect x={-58} y={-30} width={116} height={84} rx={6} fill="url(#xa-goldbox)" />
            <rect x={-64} y={-44} width={128} height={30} rx={6} fill="url(#xa-goldbox)" />
            <rect x={-9} y={-44} width={18} height={98} fill="url(#xa-red)" />
            <g transform="translate(0 -44)">
              <Bow color="xa-red" size={1.1} />
            </g>
          </g>
        </svg>

        <p className="xmas-banner-text">
          <span className="xmas-banner-line">Presenteie quem você ama neste</span>
          <span className="xmas-banner-natal">Natal!</span>
        </p>
      </div>
    </header>
  );
}

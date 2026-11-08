import type { ReactElement } from "react";

/**
 * Arte de inverno em SVG (somente visual):
 * flocos, árvores nevadas, boneco de neve, cerca e presentes kraft.
 */

/** Gradientes/padrões compartilhados. Renderize dentro de um <defs>. */
export function XmasDefs() {
  return (
    <>
      <linearGradient id="xa-tree" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#3f8f5a" />
        <stop offset="1" stopColor="#1c5a3a" />
      </linearGradient>
      <linearGradient id="xa-wood" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#9a6234" />
        <stop offset="1" stopColor="#6e4122" />
      </linearGradient>
      <linearGradient id="xa-kraft" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#f7cf9f" />
        <stop offset="1" stopColor="#e9b27a" />
      </linearGradient>
      <linearGradient id="xa-kraft-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#fbe0bd" />
        <stop offset="1" stopColor="#f2c692" />
      </linearGradient>
      <linearGradient id="xa-ribbon" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#e3151f" />
        <stop offset="0.5" stopColor="#ff3a3f" />
        <stop offset="1" stopColor="#c20f1a" />
      </linearGradient>
      <linearGradient id="xa-bow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ff4a4f" />
        <stop offset="1" stopColor="#b80e18" />
      </linearGradient>
      <linearGradient id="xa-snow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#dfe9fb" />
      </linearGradient>
      <radialGradient id="xa-face" cx="0.4" cy="0.35" r="0.8">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#dbe6f5" />
      </radialGradient>
      <radialGradient id="xa-light" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#fff3a8" stopOpacity="1" />
        <stop offset="1" stopColor="#ffd34d" stopOpacity="0" />
      </radialGradient>
      <pattern
        id="xa-plaid"
        width="6"
        height="6"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(18)"
      >
        <rect width="6" height="6" fill="#d9212a" />
        <rect x="0" y="2.3" width="6" height="1.2" fill="#fff" opacity="0.75" />
        <rect x="2.3" y="0" width="1.2" height="6" fill="#fff" opacity="0.75" />
        <rect x="0" y="0" width="6" height="0.8" fill="#a8131b" opacity="0.6" />
      </pattern>
    </>
  );
}

/** Floco de neve de 6 pontas. */
export function Snowflake({ x, y, r = 10, o = 1 }: { x: number; y: number; r?: number; o?: number }) {
  const arms: ReactElement[] = [];
  for (let i = 0; i < 3; i++) {
    const a = (i * 60 * Math.PI) / 180;
    const dx = Math.cos(a) * r;
    const dy = Math.sin(a) * r;
    arms.push(<line key={`a${i}`} x1={-dx} y1={-dy} x2={dx} y2={dy} />);
  }
  const branches: ReactElement[] = [];
  for (let i = 0; i < 6; i++) {
    const a = (i * 60 * Math.PI) / 180;
    for (const t of [0.5, 0.78]) {
      const bx = Math.cos(a) * r * t;
      const by = Math.sin(a) * r * t;
      for (const s of [-1, 1]) {
        const b = a + (s * 40 * Math.PI) / 180;
        branches.push(
          <line key={`b${i}-${t}-${s}`} x1={bx} y1={by} x2={bx + Math.cos(b) * r * 0.28} y2={by + Math.sin(b) * r * 0.28} />
        );
      }
    }
  }
  return (
    <g transform={`translate(${x} ${y})`} stroke="#fff" strokeWidth={Math.max(0.7, r * 0.09)} strokeLinecap="round" opacity={o}>
      {arms}
      {branches}
    </g>
  );
}

/** Brilho de 4 pontas. */
export function Sparkle({ x, y, s = 4, o = 0.95 }: { x: number; y: number; s?: number; o?: number }) {
  return (
    <path
      transform={`translate(${x} ${y})`}
      d={`M0 ${-s} Q ${s * 0.15} ${-s * 0.15} ${s} 0 Q ${s * 0.15} ${s * 0.15} 0 ${s} Q ${-s * 0.15} ${s * 0.15} ${-s} 0 Q ${-s * 0.15} ${-s * 0.15} 0 ${-s} Z`}
      fill="#fff"
      opacity={o}
    />
  );
}

/** Pinheiro nevado. viewBox sugerido: 0 0 100 200. */
export function SnowTree({ tint = 0 }: { tint?: number }) {
  const tiers: ReactElement[] = [];
  const lights: ReactElement[] = [];
  const n = 6;
  for (let i = 0; i < n; i++) {
    const top = 6 + i * 29;
    const hw = 15 + i * 6.4;
    const h = 46;
    tiers.push(
      <g key={i}>
        <path
          d={`M50 ${top} L ${50 + hw} ${top + h} Q 50 ${top + h + 7} ${50 - hw} ${top + h} Z`}
          fill="url(#xa-tree)"
          style={tint ? { filter: "hue-rotate(" + tint + "deg)" } : undefined}
        />
        {/* neve sobre o andar */}
        <path
          d={`M50 ${top - 1} L ${50 + hw * 0.62} ${top + h * 0.46} Q ${50 + hw * 0.4} ${top + h * 0.6} ${50 + hw * 0.2} ${top + h * 0.5} Q 50 ${top + h * 0.7} ${50 - hw * 0.2} ${top + h * 0.5} Q ${50 - hw * 0.4} ${top + h * 0.6} ${50 - hw * 0.62} ${top + h * 0.46} Z`}
          fill="#fff"
        />
        <path
          d={`M${50 - hw} ${top + h} Q ${50 - hw * 0.5} ${top + h - 6} ${50 - hw * 0.1} ${top + h} Q ${50 + hw * 0.3} ${top + h - 7} ${50 + hw} ${top + h} Q 50 ${top + h + 7} ${50 - hw} ${top + h} Z`}
          fill="#fff"
          opacity={0.95}
        />
      </g>
    );
    if (i > 1) {
      lights.push(<circle key={`l${i}`} cx={50 - hw * 0.45} cy={top + h * 0.78} r={4.5} fill="url(#xa-light)" />);
      lights.push(<circle key={`m${i}`} cx={50 + hw * 0.5} cy={top + h * 0.7} r={4} fill="url(#xa-light)" />);
    }
  }
  return (
    <g>
      <rect x={46} y={190} width={8} height={10} fill="#6e4122" />
      {tiers}
      {lights}
    </g>
  );
}

/** Cerca de madeira com neve. viewBox sugerido: 0 0 80 70. */
export function Fence() {
  const posts = [4, 28, 50];
  return (
    <g>
      {/* ripas */}
      {[14, 34].map((y) => (
        <g key={y}>
          <rect x={0} y={y} width={78} height={8} rx={1.5} fill="url(#xa-wood)" />
          <rect x={0} y={y - 2.5} width={78} height={3} rx={1.5} fill="#fff" opacity={0.9} />
        </g>
      ))}
      {/* postes */}
      {posts.map((x, i) => (
        <g key={x}>
          <rect x={x} y={i === 1 ? 2 : 0} width={11} height={i === 1 ? 66 : 68} rx={2} fill="url(#xa-wood)" />
          <path
            d={`M${x - 1.5} ${(i === 1 ? 2 : 0) + 3} Q ${x + 5.5} ${(i === 1 ? 2 : 0) - 6} ${x + 12.5} ${(i === 1 ? 2 : 0) + 3} Q ${x + 5.5} ${(i === 1 ? 2 : 0) + 6} ${x - 1.5} ${(i === 1 ? 2 : 0) + 3} Z`}
            fill="#fff"
          />
          <circle cx={x + 5.5} cy={20} r={0.9} fill="#c9c9c9" />
          <circle cx={x + 5.5} cy={40} r={0.9} fill="#c9c9c9" />
        </g>
      ))}
    </g>
  );
}

/** Laço vermelho grande. Centro em (0,0). */
export function RedBow({ s = 1 }: { s?: number }) {
  return (
    <g transform={`scale(${s})`}>
      <path d="M0 0 C -6 -18 -30 -34 -42 -26 C -52 -18 -40 -2 -22 2 C -12 4 -4 3 0 0 Z" fill="url(#xa-bow)" />
      <path d="M0 0 C 6 -18 30 -34 42 -26 C 52 -18 40 -2 22 2 C 12 4 4 3 0 0 Z" fill="url(#xa-bow)" />
      <path d="M-8 -3 C -14 -14 -26 -20 -34 -18" fill="none" stroke="#fff" strokeOpacity={0.35} strokeWidth={2} strokeLinecap="round" />
      <path d="M8 -3 C 14 -14 26 -20 34 -18" fill="none" stroke="#fff" strokeOpacity={0.35} strokeWidth={2} strokeLinecap="round" />
      <path d="M-4 2 L-22 14 L-14 16 L-6 9 Z" fill="#c20f1a" />
      <path d="M4 2 L22 14 L14 16 L6 9 Z" fill="#c20f1a" />
      <ellipse cx={0} cy={-2} rx={8} ry={7} fill="url(#xa-bow)" />
      <ellipse cx={-2} cy={-5} rx={3} ry={2} fill="#fff" opacity={0.35} />
    </g>
  );
}

/** Presente kraft com fita vermelha. (x,y) = canto sup. esq. da face frontal. */
export function KraftGift({ x, y, w, h, bow = 1 }: { x: number; y: number; w: number; h: number; bow?: number }) {
  const lid = h * 0.22;
  const rw = w * 0.14;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={1.5} fill="url(#xa-kraft)" />
      <rect x={x + w * 0.8} y={y} width={w * 0.2} height={h} fill="#c98f58" opacity={0.28} />
      {/* fitas verticais */}
      <rect x={x + w * 0.14} y={y} width={rw} height={h} fill="url(#xa-ribbon)" />
      <rect x={x + w * 0.72} y={y} width={rw} height={h} fill="url(#xa-ribbon)" />
      {/* tampa */}
      <rect x={x - w * 0.03} y={y} width={w * 1.06} height={lid} rx={1.5} fill="url(#xa-kraft-top)" />
      <rect x={x - w * 0.03} y={y + lid - 1.2} width={w * 1.06} height={1.4} fill="#000" opacity={0.1} />
      <rect x={x + w * 0.14} y={y} width={rw} height={lid} fill="url(#xa-ribbon)" />
      <rect x={x + w * 0.72} y={y} width={rw} height={lid} fill="url(#xa-ribbon)" />
      {/* laço no meio da tampa */}
      <g transform={`translate(${x + w * 0.5} ${y + 3})`}>
        <RedBow s={bow} />
      </g>
    </g>
  );
}

/** Boneco de neve com cartola e cachecol xadrez. viewBox: 0 0 120 150. */
export function Snowman() {
  return (
    <g>
      {/* cauda do cachecol (por trás da cabeça) */}
      <path d="M62 78 L92 80 Q 106 102 118 138 L99 147 Q 90 116 62 96 Z" fill="url(#xa-plaid)" />
      <path d="M62 78 L92 80 Q 106 102 118 138" fill="none" stroke="#a8131b" strokeWidth={1.2} opacity={0.5} />

      {/* mão esquerda (acenando) */}
      <g transform="translate(2 62) rotate(-18 10 14)">
        <path d="M2 24 C -2 12 0 4 6 4 C 9 4 9 10 10 12 C 11 6 13 2 17 3 C 21 4 19 12 18 16 C 21 14 24 14 24 17 C 24 22 20 30 16 34 L6 34 Z" fill="#5b3421" />
        <rect x={5} y={32} width={12} height={4} rx={1.5} fill="#d6a02a" />
      </g>
      {/* mão direita */}
      <g transform="translate(98 74) rotate(14 8 12)">
        <path d="M20 22 C 24 12 22 4 16 4 C 13 4 13 10 12 12 C 11 6 9 2 5 3 C 1 4 3 12 4 16 C 1 14 -2 14 -2 17 C -2 22 2 30 6 34 L16 34 Z" fill="#5b3421" />
        <rect x={5} y={32} width={12} height={4} rx={1.5} fill="#d6a02a" />
      </g>

      {/* cabeça */}
      <ellipse cx={64} cy={58} rx={31} ry={28} fill="url(#xa-face)" />
      {/* bochechas */}
      <circle cx={41} cy={64} r={7} fill="#ff8f8f" opacity={0.45} />
      <circle cx={87} cy={67} r={7} fill="#ff8f8f" opacity={0.45} />
      {/* olhos */}
      <ellipse cx={50} cy={48} rx={3.2} ry={4} fill="#1d1a1a" />
      <ellipse cx={72} cy={51} rx={3.2} ry={4} fill="#1d1a1a" />
      <circle cx={51} cy={46.5} r={1} fill="#fff" />
      <circle cx={73} cy={49.5} r={1} fill="#fff" />
      <path d="M44 41 Q 50 37 56 41" fill="none" stroke="#2a2222" strokeWidth={1.4} strokeLinecap="round" />
      <path d="M67 44 Q 73 40 79 44" fill="none" stroke="#2a2222" strokeWidth={1.4} strokeLinecap="round" />
      {/* nariz de cenoura */}
      <path d="M58 55 Q 50 56 43 66 Q 52 70 62 62 Z" fill="#ff8a1c" />
      <path d="M58 55 Q 50 56 43 66" fill="none" stroke="#ffb35c" strokeWidth={1.2} opacity={0.8} />
      {/* sorriso */}
      <path d="M48 68 Q 64 82 82 68" fill="none" stroke="#2b1713" strokeWidth={2.4} strokeLinecap="round" />
      <path d="M58 76 Q 64 79 71 75 Q 65 74 58 76 Z" fill="#ff9a2a" />

      {/* cachecol no pescoço */}
      <path d="M32 80 Q 62 100 96 82 L 98 98 Q 64 116 34 96 Z" fill="url(#xa-plaid)" />
      <path d="M32 80 Q 62 100 96 82" fill="none" stroke="#fff" strokeOpacity={0.5} strokeWidth={1.2} />

      {/* cartola (inclinada) */}
      <g transform="rotate(7 68 22)">
        <path d="M44 4 Q 44 -2 52 -2 L 90 -2 Q 98 -2 98 4 L 96 32 L 46 32 Z" fill="#1d1d21" />
        <path d="M46 24 L96 24 L96 31 L46 31 Z" fill="#d6212b" />
        <ellipse cx={71} cy={34} rx={41} ry={9} fill="#141417" />
        
        <path d="M52 2 L52 22" stroke="#5a5a66" strokeWidth={2} strokeLinecap="round" opacity={0.6} />
      </g>
    </g>
  );
}

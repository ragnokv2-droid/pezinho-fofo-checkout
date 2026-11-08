import type { ReactElement } from "react";

/**
 * Peças de arte natalina em SVG (somente visual).
 * Usadas pelo Header, pelas laterais e pela cena de presentes no rodapé.
 */

const GREENS = ["#0f4a26", "#1a6531", "#2a8443", "#3a9a54"];

/** Definições de gradientes compartilhadas. Renderize dentro de um <defs>. */
export function XmasDefs() {
  return (
    <>
      <radialGradient id="xa-orn" cx="0.35" cy="0.3" r="0.8">
        <stop offset="0" stopColor="#ff7b7b" />
        <stop offset="0.5" stopColor="#d4141f" />
        <stop offset="1" stopColor="#85090f" />
      </radialGradient>
      <radialGradient id="xa-glow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#fff6c2" stopOpacity="0.95" />
        <stop offset="0.45" stopColor="#ffd75a" stopOpacity="0.45" />
        <stop offset="1" stopColor="#ffd75a" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="xa-red" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f0303a" />
        <stop offset="1" stopColor="#b80f1b" />
      </linearGradient>
      <linearGradient id="xa-redside" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#9c0b15" />
        <stop offset="1" stopColor="#c8121f" />
      </linearGradient>
      <linearGradient id="xa-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffe27a" />
        <stop offset="1" stopColor="#e5a417" />
      </linearGradient>
      <linearGradient id="xa-goldbox" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffd84d" />
        <stop offset="1" stopColor="#e0a010" />
      </linearGradient>
    </>
  );
}

/** Galho de pinheiro. Eixo ao longo de +x, a partir de (0,0). */
export function PineBranch({
  length = 110,
  seed = 1,
  scale = 1,
}: {
  length?: number;
  seed?: number;
  scale?: number;
}) {
  const needles: ReactElement[] = [];
  const step = 4;
  const layers = [
    { ang: 58, len: 0.8, color: 0, w: 3.6 },
    { ang: 40, len: 1, color: 1, w: 3.4 },
    { ang: 22, len: 0.9, color: 2, w: 3 },
  ];
  let k = 0;
  for (let x = 5, i = 0; x < length; x += step, i++) {
    const t = x / length;
    const base = 27 * (1 - t * 0.5) * scale;
    for (const L of layers) {
      for (const side of [-1, 1]) {
        const j = Math.sin(i * 12.9898 + side * 78.233 + L.ang * 0.7 + seed * 3.1);
        const a = (side * (L.ang + j * 8) * Math.PI) / 180;
        const l = base * L.len * (0.82 + 0.22 * Math.abs(j));
        const shade = (L.color + (j > 0.4 ? 1 : 0)) % GREENS.length;
        needles.push(
          <line
            key={k++}
            x1={x}
            y1={0}
            x2={x + Math.cos(a) * l}
            y2={Math.sin(a) * l}
            stroke={GREENS[shade]}
            strokeWidth={L.w}
            strokeLinecap="round"
          />
        );
      }
    }
  }
  return (
    <g>
      <line x1={0} y1={0} x2={length} y2={0} stroke="#4a2f17" strokeWidth={2.4} strokeLinecap="round" />
      {needles}
    </g>
  );
}

/** Bola de Natal vermelha. */
export function Ornament({ x, y, r = 9 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      <rect x={x - r * 0.28} y={y - r * 1.25} width={r * 0.56} height={r * 0.42} rx={1} fill="#e9b52a" />
      <circle cx={x} cy={y} r={r} fill="url(#xa-orn)" />
      <ellipse cx={x - r * 0.35} cy={y - r * 0.4} rx={r * 0.22} ry={r * 0.14} fill="#fff" opacity={0.7} transform={`rotate(-35 ${x - r * 0.35} ${y - r * 0.4})`} />
    </g>
  );
}

/** Lâmpada de pisca-pisca com brilho. */
export function Bulb({ x, y, glow = 11 }: { x: number; y: number; glow?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={glow} fill="url(#xa-glow)" />
      <rect x={x - 1.6} y={y - 5.2} width={3.2} height={2.6} rx={0.8} fill="#5b4a2a" />
      <ellipse cx={x} cy={y} rx={2.6} ry={3.6} fill="#ffe27a" />
    </g>
  );
}

/** Laço dourado/vermelho. Centro em (0,0). */
export function Bow({ color = "xa-gold", size = 1 }: { color?: string; size?: number }) {
  return (
    <g transform={`scale(${size})`}>
      <path d="M0 0 C -14 -34 -62 -36 -58 -8 C -55 10 -22 8 0 0 Z" fill={`url(#${color})`} />
      <path d="M0 0 C 14 -34 62 -36 58 -8 C 55 10 22 8 0 0 Z" fill={`url(#${color})`} />
      <path d="M0 0 C -12 -22 -40 -26 -42 -10" fill="none" stroke="#fff" strokeOpacity={0.35} strokeWidth={2.2} strokeLinecap="round" />
      <path d="M0 0 C 12 -22 40 -26 42 -10" fill="none" stroke="#fff" strokeOpacity={0.35} strokeWidth={2.2} strokeLinecap="round" />
      <path d="M-6 2 L-22 30 L-10 26 L-4 34 L2 6 Z" fill={`url(#${color})`} opacity={0.95} />
      <path d="M6 2 L22 30 L10 26 L4 34 L-2 6 Z" fill={`url(#${color})`} opacity={0.95} />
      <ellipse cx={0} cy={-2} rx={9} ry={8} fill={`url(#${color})`} />
      <ellipse cx={-2} cy={-5} rx={3.5} ry={2.5} fill="#fff" opacity={0.4} />
    </g>
  );
}

/** Caixa de presente. (x,y) = canto superior esquerdo do corpo da caixa. */
export function Gift({
  x,
  y,
  w,
  h,
  body = "xa-red",
  side = "xa-redside",
  ribbon = "xa-gold",
  bowScale = 1,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  body?: string;
  side?: string;
  ribbon?: string;
  bowScale?: number;
}) {
  const lidH = h * 0.2;
  const rw = w * 0.17;
  const cx = x + w / 2;
  return (
    <g>
      {/* corpo */}
      <rect x={x} y={y} width={w} height={h} rx={3} fill={`url(#${body})`} />
      <rect x={x + w * 0.78} y={y} width={w * 0.22} height={h} rx={3} fill={`url(#${side})`} opacity={0.55} />
      {/* fita vertical */}
      <rect x={cx - rw / 2} y={y} width={rw} height={h} fill={`url(#${ribbon})`} />
      {/* tampa */}
      <rect x={x - w * 0.04} y={y} width={w * 1.08} height={lidH} rx={3} fill={`url(#${body})`} />
      <rect x={x - w * 0.04} y={y + lidH - 3} width={w * 1.08} height={3} fill="#000" opacity={0.12} />
      <rect x={cx - rw / 2} y={y} width={rw} height={lidH} fill={`url(#${ribbon})`} />
      {/* laço */}
      <g transform={`translate(${cx} ${y + 2})`}>
        <Bow color={ribbon} size={bowScale} />
      </g>
    </g>
  );
}

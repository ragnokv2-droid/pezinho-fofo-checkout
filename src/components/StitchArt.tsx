/**
 * Arte decorativa do tema "Natal Stitch" (somente visual, sem lógica).
 * Tudo em SVG: Stitch com gorro, árvore, presentes e ícones.
 */

const BLUE = "#3b86d6";
const BLUE_DARK = "#2a6bb8";
const BLUE_LIGHT = "#8fc8f3";
const EAR_IN = "#e58fc0";

/** Stitch com gorro de Papai Noel (viewBox 150 x 104). */
export function StitchSanta() {
  return (
    <>
      <defs>
        <linearGradient id="sa-hat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f0343c" />
          <stop offset="1" stopColor="#c81b25" />
        </linearGradient>
        <linearGradient id="sa-head" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a95e2" />
          <stop offset="1" stopColor="#3277c7" />
        </linearGradient>
      </defs>

      {/* orelhas (abertas para os lados) */}
      <g transform="translate(15 0) translate(35 0) scale(1.45 1) translate(-35 0)">
        <path d="M35 60 C15 58 2 40 1 15 C14 18 31 29 43 47 Z" fill={BLUE_DARK} />
        <path d="M33 55 C21 52 11 41 8 26 C19 29 29 37 38 48 Z" fill={EAR_IN} />
      </g>
      <g transform="translate(150 0) scale(-1 1) translate(15 0) translate(35 0) scale(1.45 1) translate(-35 0)">
        <path d="M35 60 C15 58 2 40 1 15 C14 18 31 29 43 47 Z" fill={BLUE_DARK} />
        <path d="M33 55 C21 52 11 41 8 26 C19 29 29 37 38 48 Z" fill={EAR_IN} />
      </g>

      <g transform="translate(15 0)">
      {/* mãozinhas */}
      <g fill={BLUE} stroke={BLUE_DARK} strokeWidth={0.8}>
        <ellipse cx={22} cy={99} rx={12} ry={6.5} />
        <ellipse cx={98} cy={99} rx={12} ry={6.5} />
      </g>
      <g stroke={BLUE_DARK} strokeWidth={0.9} strokeLinecap="round">
        <path d="M16 95 v4 M22 94 v5 M28 95 v4" />
        <path d="M92 95 v4 M98 94 v5 M104 95 v4" />
      </g>

      {/* cabeça */}
      <ellipse cx={60} cy={67} rx={36} ry={30} fill="url(#sa-head)" />
      <ellipse cx={60} cy={79} rx={25} ry={16} fill={BLUE_LIGHT} />

      {/* olhos */}
      <ellipse cx={45.5} cy={67} rx={6.3} ry={8.4} fill="#10131f" />
      <ellipse cx={74.5} cy={67} rx={6.3} ry={8.4} fill="#10131f" />
      <circle cx={43.6} cy={63} r={2.3} fill="#fff" />
      <circle cx={72.6} cy={63} r={2.3} fill="#fff" />
      <circle cx={47.5} cy={71} r={1} fill="#fff" opacity={0.85} />
      <circle cx={76.5} cy={71} r={1} fill="#fff" opacity={0.85} />

      {/* nariz e boca */}
      <ellipse cx={60} cy={74} rx={5.2} ry={3.5} fill="#1b2340" />
      <ellipse cx={58.5} cy={72.8} rx={1.8} ry={0.9} fill="#fff" opacity={0.6} />
      <path d="M43 82 Q60 99 77 82 Q60 88 43 82 Z" fill="#4a1830" />
      <path d="M52 90 Q60 96 68 90 Q60 87 52 90 Z" fill="#ff7aa8" />

      {/* gorro */}
      <path
        d="M29 52 C30 28 50 12 71 13 C89 14 101 25 108 45 L99 53 L92 45 C78 47 50 47 29 52 Z"
        fill="url(#sa-hat)"
      />
      <rect x={25} y={44} width={72} height={14} rx={7} fill="#fff" transform="rotate(-4 60 51)" />
      <circle cx={108} cy={47} r={7.5} fill="#fff" />
      <circle cx={106} cy={45} r={2.5} fill="#e9f2fc" />
      </g>
    </>
  );
}

/** Árvore de Natal enfeitada (viewBox 60 x 100). */
export function CuteTree() {
  return (
    <>
      <rect x={25} y={84} width={10} height={12} rx={2} fill="#9a6234" />
      <path d="M30 24 L55 56 L5 56 Z" fill="#2f9a57" />
      <path d="M30 42 L58 74 L2 74 Z" fill="#27874b" />
      <path d="M30 58 L60 90 L0 90 Z" fill="#1f7a40" />
      <path d="M2 74 Q10 70 16 73 Q23 69 30 72 Q37 69 44 73 Q51 70 58 74 L60 76 L0 76 Z" fill="#fff" opacity={0.85} />
      <path d="M0 90 Q8 86 15 89 Q23 85 30 88 Q38 85 45 89 Q52 86 60 90 L60 93 L0 93 Z" fill="#fff" opacity={0.9} />
      {/* enfeites */}
      <circle cx={22} cy={50} r={3} fill="#ff3d8b" />
      <circle cx={38} cy={40} r={3} fill="#ffd23a" />
      <circle cx={30} cy={64} r={3.2} fill="#4aa3f2" />
      <circle cx={14} cy={70} r={3} fill="#ffd23a" />
      <circle cx={46} cy={68} r={3} fill="#ff3d8b" />
      <circle cx={20} cy={84} r={3} fill="#ff3d8b" />
      <circle cx={42} cy={84} r={3} fill="#4aa3f2" />
      {/* estrela */}
      <path
        d="M30 4 L33 13 L42 13 L35 18.5 L38 27 L30 22 L22 27 L25 18.5 L18 13 L27 13 Z"
        fill="#ffd23a"
        stroke="#f0a500"
        strokeWidth={0.8}
      />
    </>
  );
}

/** Caixa de presente. Coordenadas absolutas dentro do SVG que a contém. */
export function GiftBox({
  x,
  y,
  w,
  h,
  body,
  lid,
  ribbon,
  bow = true,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  body: string;
  lid: string;
  ribbon: string;
  bow?: boolean;
}) {
  const lidH = h * 0.24;
  const rw = Math.max(5, w * 0.15);
  const cx = x + w / 2;
  return (
    <g>
      <rect x={x} y={y + lidH - 1} width={w} height={h - lidH + 1} rx={3} fill={body} />
      <rect x={x - 2} y={y} width={w + 4} height={lidH} rx={3} fill={lid} />
      <rect x={cx - rw / 2} y={y} width={rw} height={h} fill={ribbon} />
      {bow && (
        <>
          <ellipse cx={cx - rw * 1.1} cy={y - 3} rx={rw * 1.25} ry={rw * 0.9} fill={ribbon} transform={`rotate(-25 ${cx - rw * 1.1} ${y - 3})`} />
          <ellipse cx={cx + rw * 1.1} cy={y - 3} rx={rw * 1.25} ry={rw * 0.9} fill={ribbon} transform={`rotate(25 ${cx + rw * 1.1} ${y - 3})`} />
          <circle cx={cx} cy={y - 1.5} r={rw * 0.6} fill={ribbon} stroke="rgba(0,0,0,0.12)" strokeWidth={0.6} />
        </>
      )}
    </g>
  );
}

/** Silhueta sutil de orelhas de Mickey (decoração do rodapé). */
export function MouseIcon({ x, y, r = 7, fill = "#fff" }: { x: number; y: number; r?: number; fill?: string }) {
  return (
    <g fill={fill} stroke="#fff" strokeWidth={1} opacity={0.95}>
      <circle cx={x - r * 0.95} cy={y - r * 0.95} r={r * 0.55} />
      <circle cx={x + r * 0.95} cy={y - r * 0.95} r={r * 0.55} />
      <circle cx={x} cy={y} r={r} />
    </g>
  );
}

/** Coração de contorno amarelo (decoração do banner). */
export function HeartOutline({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0 7 C -13 -2 -9 -13 0 -7 C 9 -13 13 -2 0 7 Z"
      fill="none"
      stroke="#ffd23a"
      strokeWidth={2.2}
      strokeLinejoin="round"
    />
  );
}

/**
 * Camada decorativa do tema natalino:
 * árvores/presentes laterais (fixos na base da tela) e chão de neve no fim da página.
 */
export function ChristmasDecor() {
  return (
    <div className="xmas-deco-layer" aria-hidden="true">
      <div className="xmas-deco-col xmas-deco-col-left">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/natal-arvore-esq.webp"
          alt=""
          className="xmas-deco"
          draggable={false}
        />
      </div>
      <div className="xmas-deco-col xmas-deco-col-right">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/natal-arvore-dir.webp"
          alt=""
          className="xmas-deco"
          draggable={false}
        />
      </div>
    </div>
  );
}

export function SnowGround() {
  return (
    <div aria-hidden="true" className="relative h-24 mt-6 pointer-events-none">
      <svg
        viewBox="0 0 549 112"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 w-full h-full"
      >
        <defs>
          <linearGradient id="xmas-snow-a" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="1" stopColor="#f2f7ff" stopOpacity="1" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="549" height="112" fill="url(#xmas-snow-a)" />
        <path
          d="M0 78 C70 54 130 66 200 74 C270 82 320 52 390 60 C450 66 500 78 549 62 L549 112 L0 112 Z"
          fill="#e9f1fd"
        />
        <path
          d="M0 92 C60 76 140 90 220 88 C300 86 360 70 430 80 C480 87 520 92 549 84 L549 112 L0 112 Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}

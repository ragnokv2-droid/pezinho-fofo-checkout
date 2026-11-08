import { XmasDefs, SnowTree, Fence, KraftGift, Sparkle } from "@/components/XmasArt";

/**
 * Camada decorativa do tema:
 * - ChristmasDecor: pinheiros nevados nas laterais (não interferem nos cliques)
 * - SnowGround: cerca, presentes e neve no fim da página
 */
export function ChristmasDecor() {
  return (
    <>
      {/* Pinheiro direito, na altura das etapas/resumo */}
      <svg aria-hidden="true" viewBox="0 0 100 200" className="xmas-edge xmas-edge-right">
        <defs>
          <XmasDefs />
        </defs>
        <SnowTree tint={-8} />
      </svg>
    </>
  );
}

export function SnowGround() {
  return (
    <div aria-hidden="true" className="xmas-scene">
      {/* Pinheiro esquerdo, parcialmente atrás do cartão */}
      <svg viewBox="0 0 100 200" className="xmas-scene-tree">
        <defs>
          <XmasDefs />
        </defs>
        <SnowTree />
      </svg>

      <svg viewBox="0 -40 282 140" className="xmas-scene-art">
        <defs>
          <XmasDefs />
        </defs>

        {/* morros de neve ao fundo */}
        <path
          d="M0 62 C 40 52 90 60 130 66 C 160 52 215 50 250 60 C 266 60 276 56 282 56 L282 100 L0 100 Z"
          fill="#e4eefb"
          opacity={0.85}
        />
        <path
          d="M110 78 C 130 62 175 62 200 72 L 200 100 L 110 100 Z"
          fill="#fff"
          opacity={0.9}
        />

        {/* cerca à esquerda */}
        <g transform="translate(0 15)">
          <Fence />
        </g>
        {/* cerca à direita (aparece só um pedaço) */}
        <g transform="translate(272 -12) scale(0.9)">
          <Fence />
        </g>

        {/* presentes */}
        <KraftGift x={236} y={-8} w={56} h={64} bow={0.6} />
        <KraftGift x={179} y={33} w={93} h={53} bow={1} />

        {/* neve da frente */}
        <path
          d="M0 82 C 40 70 90 74 130 86 C 170 94 215 88 282 80 L282 100 L0 100 Z"
          fill="url(#xa-snow)"
        />
        <path
          d="M0 92 C 60 84 120 96 180 94 C 220 92 250 88 282 90 L282 100 L0 100 Z"
          fill="#fff"
        />
        <Sparkle x={92} y={52} s={2.5} o={0.8} />
        <Sparkle x={160} y={72} s={2} o={0.7} />
        <Sparkle x={120} y={40} s={2} o={0.7} />
      </svg>
    </div>
  );
}

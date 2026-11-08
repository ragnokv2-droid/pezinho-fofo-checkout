import { XmasDefs, PineBranch, Ornament, Bulb, Gift } from "@/components/XmasArt";

/**
 * Camada decorativa do tema natalino:
 * - ChristmasDecor: galhos nas laterais (não interferem nos cliques)
 * - SnowGround: cena de presentes + neve no fim da página
 */
export function ChristmasDecor() {
  return (
    <>
      {/* Galho esquerdo (altura da faixa vermelha) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 120 150"
        className="xmas-edge xmas-edge-left"
      >
        <defs>
          <XmasDefs />
        </defs>
        <g transform="translate(-10 70) rotate(-18)">
          <PineBranch length={105} seed={7} />
        </g>
        <Bulb x={24} y={46} glow={11} />
        <Ornament x={14} y={104} r={8} />
      </svg>

      {/* Galho direito (altura das etapas) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 120 150"
        className="xmas-edge xmas-edge-right"
      >
        <defs>
          <XmasDefs />
        </defs>
        <g transform="translate(130 70) rotate(198)">
          <PineBranch length={105} seed={3} />
        </g>
        <Bulb x={98} y={50} glow={11} />
        <Ornament x={108} y={106} r={8} />
      </svg>
    </>
  );
}

export function SnowGround() {
  return (
    <div aria-hidden="true" className="xmas-scene">
      <svg viewBox="0 0 549 300" className="xmas-scene-art">
        <defs>
          <XmasDefs />
          <linearGradient id="xs-snow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#e9eef8" />
          </linearGradient>
        </defs>

        {/* galhos laterais */}
        <g transform="translate(-10 150) rotate(-24)">
          <PineBranch length={130} seed={11} />
        </g>
        <g transform="translate(559 150) rotate(204)">
          <PineBranch length={130} seed={13} />
        </g>
        <g transform="translate(-10 262) rotate(-8)">
          <PineBranch length={110} seed={17} />
        </g>
        <g transform="translate(559 262) rotate(188)">
          <PineBranch length={110} seed={19} />
        </g>
        {/* galho central entre os presentes */}
        <g transform="translate(200 262) rotate(-62)">
          <PineBranch length={80} seed={23} />
        </g>
        <g transform="translate(350 262) rotate(-118)">
          <PineBranch length={80} seed={29} />
        </g>

        <Ornament x={22} y={176} r={11} />
        <Ornament x={527} y={96} r={11} />
        <Ornament x={252} y={236} r={9} />
        <Bulb x={40} y={118} glow={12} />
        <Bulb x={505} y={176} glow={12} />

        {/* presentes */}
        <Gift x={22} y={138} w={150} h={116} bowScale={1.05} />
        <Gift x={402} y={150} w={130} h={104} bowScale={0.95} />
        <Gift
          x={232}
          y={196}
          w={96}
          h={60}
          body="xa-goldbox"
          side="xa-goldbox"
          ribbon="xa-red"
          bowScale={0.6}
        />

        {/* neve */}
        <path
          d="M0 262 C 60 248 130 262 200 256 C 270 250 330 266 400 258 C 460 252 510 262 549 254 L549 300 L0 300 Z"
          fill="url(#xs-snow)"
        />
        <path
          d="M0 280 C 80 270 160 284 250 278 C 340 272 430 286 549 276 L549 300 L0 300 Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}

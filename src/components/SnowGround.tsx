import { XmasDefs, Snowflake, Sparkle } from "@/components/XmasArt";
import { GiftBox, MouseIcon } from "@/components/StitchArt";

/**
 * Camada decorativa do tema Natal Stitch:
 * - ChristmasDecor: brilhos de neve espalhados (não interferem nos cliques)
 * - SnowGround: presentes rosa e azuis, neve e silhueta Mickey no fim da página
 */
export function ChristmasDecor() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 218 593"
      preserveAspectRatio="xMidYMid slice"
      className="xmas-sparkles"
    >
      <defs>
        <XmasDefs />
      </defs>
      <Snowflake x={206} y={180} r={5} o={0.8} />
      <Snowflake x={10} y={262} r={4} o={0.7} />
      <Snowflake x={210} y={330} r={4} o={0.7} />
      <Snowflake x={8} y={420} r={5} o={0.75} />
      <Snowflake x={212} y={470} r={4} o={0.7} />
      <Sparkle x={14} y={205} s={2.5} o={0.8} />
      <Sparkle x={207} y={250} s={2.5} o={0.8} />
      <Sparkle x={9} y={350} s={2} o={0.7} />
      <Sparkle x={208} y={400} s={2} o={0.7} />
    </svg>
  );
}

export function SnowGround() {
  return (
    <div aria-hidden="true" className="xmas-scene">
      <svg viewBox="0 0 218 100" className="xmas-scene-art">
        <defs>
          <XmasDefs />
        </defs>

        {/* morros de neve ao fundo */}
        <path
          d="M0 52 C 30 42 70 50 110 56 C 140 44 185 42 218 50 L218 100 L0 100 Z"
          fill="#dcebfb"
          opacity={0.9}
        />

        {/* silhueta Mickey na neve */}
        <MouseIcon x={109} y={60} r={9} fill="#7cc4f5" />

        {/* presentes da esquerda */}
        <GiftBox x={44} y={26} w={28} h={46} body="#4a9bf0" lid="#2f7be0" ribbon="#ff4f93" />
        <GiftBox x={4} y={36} w={52} h={50} body="#ff7fb0" lid="#ff4f93" ribbon="#4aa3f2" />
        <Snowflake x={30} y={64} r={7} o={0.95} />

        {/* presentes da direita */}
        <GiftBox x={158} y={32} w={56} h={54} body="#3f8fe6" lid="#2a6bd0" ribbon="#ff4f93" />
        <GiftBox x={132} y={60} w={28} h={26} body="#ff8fbb" lid="#ff4f93" ribbon="#4aa3f2" />
        <Snowflake x={186} y={62} r={7} o={0.95} />

        {/* neve da frente */}
        <path
          d="M0 80 C 40 72 90 76 130 84 C 170 90 195 84 218 78 L218 100 L0 100 Z"
          fill="url(#xa-snow)"
        />
        <path
          d="M0 92 C 50 86 110 95 160 93 C 190 92 205 89 218 90 L218 100 L0 100 Z"
          fill="#fff"
        />
        <Sparkle x={86} y={50} s={2.5} o={0.8} />
        <Sparkle x={132} y={46} s={2} o={0.7} />
        <Sparkle x={120} y={74} s={2} o={0.7} />
      </svg>
    </div>
  );
}

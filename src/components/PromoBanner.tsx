export default function PromoBanner() {
  return (
    <div className="relative bg-gradient-to-r from-[#0A5BC4] via-[#0864C7] to-[#0A5BC4] text-white overflow-hidden shadow-md">
      {/* Presentes à esquerda */}
      <div className="absolute left-1 top-1/2 -translate-y-1/2 text-2xl sm:text-3xl select-none pointer-events-none drop-shadow">
        🎁
      </div>
      <div className="absolute left-7 top-0.5 text-lg select-none pointer-events-none opacity-90">
        🎀
      </div>

      {/* Texto principal */}
      <div className="relative z-10 text-center text-[13px] sm:text-sm font-semibold py-3 px-14 leading-snug">
        Presenteie quem você ama neste{" "}
        <span className="font-extrabold text-yellow-300 italic tracking-wide">
          Natal!
        </span>
      </div>

      {/* Papai Noel à direita */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[2.6rem] sm:text-[3rem] select-none pointer-events-none drop-shadow-lg leading-none">
        🎅
      </div>
    </div>
  );
}

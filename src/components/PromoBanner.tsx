export default function PromoBanner() {
  return (
    <div className="relative bg-gradient-to-r from-[#0A5BC4] via-[#0864C7] to-[#0A5BC4] text-white overflow-hidden shadow-md">
      {/* Presentes à esquerda */}
      <div className="absolute left-1.5 top-1/2 -translate-y-1/2 text-[1.7rem] sm:text-3xl select-none pointer-events-none drop-shadow-md leading-none">
        🎁
      </div>
      <div className="absolute left-8 top-1 text-base select-none pointer-events-none opacity-90 leading-none">
        🎀
      </div>

      {/* Texto principal */}
      <div className="relative z-10 text-center text-[13px] sm:text-[15px] font-semibold py-3.5 px-14 leading-snug">
        Presenteie quem você ama neste{" "}
        <span className="font-extrabold text-yellow-300 italic tracking-wide text-[15px] sm:text-base">
          Natal!
        </span>
      </div>

      {/* Papai Noel à direita */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[2.8rem] sm:text-[3.2rem] select-none pointer-events-none drop-shadow-lg leading-none">
        🎅
      </div>
    </div>
  );
}

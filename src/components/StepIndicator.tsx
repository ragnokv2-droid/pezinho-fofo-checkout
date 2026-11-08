import { Step } from "@/types/checkout";
import clsx from "clsx";

const steps = [
  { id: 1, label: "Informações pessoais" },
  { id: 2, label: "Entrega" },
  { id: 3, label: "Pagamento" },
];

export default function StepIndicator({ current }: { current: Step }) {
  return (
    <div className="relative z-[1] pt-1 pb-1" style={{ margin: "0 calc(var(--xw) * 0.09)" }}>
      <div className="flex items-start justify-between relative max-w-md mx-auto">
        {/* linha de fundo */}
        <div className="absolute top-[19px] left-[16%] right-[16%] h-[2px] bg-[#b7d2f2] z-0" />

        {/* linha ativa */}
        <div
          className="absolute top-[19px] left-[16%] h-[2px] bg-[#ff2a7a] z-0 transition-all duration-300"
          style={{
            width: current === 1 ? "0%" : current === 2 ? "34%" : "68%",
          }}
        />

        {steps.map((step) => {
          const isCompleted = current > step.id;
          const isActive = current === step.id;

          return (
            <div
              key={step.id}
              className="flex flex-col items-center z-10 relative w-1/3"
            >
              <div
                className={clsx(
                  "w-10 h-10 rounded-full flex items-center justify-center text-lg font-extrabold border-2 transition-colors",
                  (isCompleted || isActive)
                    ? "bg-[#ff2a7a] border-white text-white shadow-[0_0_0_2px_#ff2a7a,0_4px_10px_rgba(255,42,122,0.35)]"
                    : "bg-white border-[#cfe0f5] text-[#1f6fe0] shadow-[0_3px_8px_rgba(31,111,224,0.18)]"
                )}
              >
                {step.id}
              </div>

              <span
                className={clsx(
                  "text-[12.5px] mt-2 text-center leading-tight",
                  isActive
                    ? "text-[#ff2a7a] font-extrabold"
                    : "text-[#12306f] font-semibold"
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

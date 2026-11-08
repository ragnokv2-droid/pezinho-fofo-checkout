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
        <div className="absolute top-[19px] left-[16%] right-[16%] h-[2px] bg-[#c9d8ee] z-0" />

        {/* linha ativa */}
        <div
          className="absolute top-[19px] left-[16%] h-[2px] bg-[#e8111f] z-0 transition-all duration-300"
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
                    ? "bg-[#e8111f] border-[#e8111f] text-white shadow-[0_3px_10px_rgba(232,17,31,0.35)]"
                    : "bg-white border-[#dde1ee] text-[#5d6c9c] shadow-[0_2px_6px_rgba(60,90,150,0.08)]"
                )}
              >
                {step.id}
              </div>

              <span
                className={clsx(
                  "text-[12.5px] mt-2 text-center leading-tight",
                  isActive
                    ? "text-[#e8111f] font-bold"
                    : "text-[#5d6c9c] font-medium"
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

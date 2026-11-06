"use client";

import { CustomerData } from "@/types/checkout";

interface Props {
  data: CustomerData;
  onChange: (data: CustomerData) => void;
  onNext: () => void;
}

function onlyDigits(v: string) {
  return v.replace(/\D/g, "");
}

function maskCPF(v: string) {
  const d = onlyDigits(v).slice(0, 11);
  return d
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function maskPhone(v: string) {
  const d = onlyDigits(v).slice(0, 11);

  if (d.length <= 10) {
    return d
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  return d
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}

export default function Step1Identification({
  data,
  onChange,
  onNext,
}: Props) {
  const valid =
    data.name.trim().length >= 3 &&
    data.email.includes("@") &&
    onlyDigits(data.taxId).length === 11 &&
    onlyDigits(data.cellphone).length >= 10;

  function set<K extends keyof CustomerData>(
    key: K,
    value: string
  ) {
    onChange({ ...data, [key]: value });
  }

  return (
    <div className="px-4 pt-5 pb-6">
      <div className="mb-5">
        <h2 className="text-xl font-extrabold text-[#0b1033] flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#0b5cd8] text-white text-base flex items-center justify-center font-extrabold shrink-0">
            1
          </span>

          Identificação
        </h2>

        <p className="text-[15px] text-[#475683] mt-3 leading-relaxed">
          Utilizaremos seu e-mail para identificar seu perfil,
          histórico de compra, notificação de pedidos e carrinho
          de compras.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-[15px] font-bold text-[#0b1033] mb-1.5">
            Nome completo
          </label>

          <input
            type="text"
            value={data.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="ex.: Maria de Almeida Cruz"
            className="xmas-input"
          />
        </div>

        <div>
          <label className="block text-[15px] font-bold text-[#0b1033] mb-1.5">
            E-mail
          </label>

          <input
            type="email"
            value={data.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="ex.: maria@gmail.com"
            className="xmas-input"
          />
        </div>

        <div>
          <label className="block text-[15px] font-bold text-[#0b1033] mb-1.5">
            CPF
          </label>

          <input
            type="text"
            inputMode="numeric"
            value={data.taxId}
            onChange={(e) =>
              set("taxId", maskCPF(e.target.value))
            }
            placeholder="000.000.000-00"
            className="xmas-input"
          />
        </div>

        <div>
          <label className="block text-[15px] font-bold text-[#0b1033] mb-1.5">
            Celular / WhatsApp
          </label>

          <div className="flex gap-2">
            <div className="flex items-center px-3 border border-[#e0e3ee] rounded-xl bg-[#f4f7fd] text-sm text-[#5d6c9c] font-semibold">
              +55
            </div>

            <input
              type="text"
              inputMode="numeric"
              value={data.cellphone}
              onChange={(e) =>
                set(
                  "cellphone",
                  maskPhone(e.target.value)
                )
              }
              placeholder="(00) 00000-0000"
              className="flex-1 min-w-0 xmas-input"
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        disabled={!valid}
        onClick={onNext}
        className="mt-8 w-full bg-[#0b5cd8] hover:bg-[#0948b0] disabled:bg-gray-300 disabled:text-[#5d6c9c] text-white font-semibold py-3.5 rounded-xl text-sm transition-colors"
      >
        Ir para Entrega
      </button>
    </div>
  );
}

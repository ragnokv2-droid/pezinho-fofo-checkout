import Image from "next/image";
import { Lock } from "lucide-react";

export default function Header() {
  return (
    <header className="christmas-header px-3 h-[78px] flex items-center justify-between relative overflow-hidden">
      <img
        src="/christmas-santa.png"
        alt=""
        aria-hidden="true"
        className="christmas-header-santa"
      />
      <div className="w-[145px] h-[76px] flex items-center justify-center overflow-hidden shrink-0 relative z-10">
        <Image
          src="/logo.png"
          alt="Pé de Criança"
          width={1536}
          height={1024}
          priority
          className="w-[145px] h-auto scale-[1.55] object-contain"
        />
      </div>

      <div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-600 shrink-0 pr-1 relative z-10">
        <Lock className="w-3.5 h-3.5" />
        <span>Pagamento 100% seguro</span>
      </div>
    </header>
  );
}

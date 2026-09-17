import Image from "next/image";
import { Lock } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 px-4 h-[76px] flex items-center justify-between sticky top-0 z-20 overflow-hidden">
      <div className="w-[145px] h-[72px] flex items-center justify-center overflow-hidden">
        <Image
          src="/logo.png"
          alt="Pé de Criança"
          width={1536}
          height={1024}
          priority
          className="w-[145px] h-auto scale-[1.7] object-contain"
        />
      </div>

      <div className="flex items-center gap-1 text-xs text-gray-500 shrink-0">
        <Lock className="w-3.5 h-3.5" />
        <span>Pagamento 100% seguro</span>
      </div>
    </header>
  );
}

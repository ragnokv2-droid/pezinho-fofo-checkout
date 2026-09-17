import Image from "next/image";
import { Lock } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 px-4 py-2 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Pezinho Fofo"
          width={220}
          height={120}
          priority
          className="w-auto h-14 sm:h-16 object-contain"
        />
      </div>

      <div className="flex items-center gap-1 text-xs text-gray-500">
        <Lock className="w-3.5 h-3.5 shrink-0" />
        <span className="text-right leading-tight">
          Pagamento 100% seguro
        </span>
      </div>
    </header>
  );
}

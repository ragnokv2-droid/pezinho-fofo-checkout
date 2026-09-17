import { NextRequest, NextResponse } from "next/server";
import { generatePixBrCode } from "@/lib/pix";
import QRCode from "qrcode";
import { PRODUCT } from "@/lib/product";

export async function POST(req: NextRequest) {
  try {
    const pixKey = process.env.PIX_KEY?.trim();
    const pixName = process.env.PIX_RECEIVER_NAME?.trim();
    const pixCity = process.env.PIX_RECEIVER_CITY?.trim();
    if (!pixKey || !pixName || !pixCity) {
      return NextResponse.json({ success: false, error: "PIX_KEY, PIX_RECEIVER_NAME e PIX_RECEIVER_CITY precisam ser configurados" }, { status: 500 });
    }
    const body = await req.json();
    const amountCents = Number(body.amount) || PRODUCT.pixPrice;
    const brCode = generatePixBrCode({
      key: pixKey,
      name: pixName,
      city: pixCity,
      amount: amountCents / 100,
      txid: `PED${Date.now().toString().slice(-8)}`,
    });
    const brCodeBase64 = await QRCode.toDataURL(brCode, { errorCorrectionLevel: "M", margin: 2, width: 300 });
    return NextResponse.json({ success: true, data: { id: `pix_static_${Date.now()}`, amount: amountCents, status: "PENDING", brCode, brCodeBase64, expiresAt: new Date(Date.now() + 30 * 60 * 1000).toISOString() } });
  } catch (err) {
    console.error("Erro ao gerar PIX:", err);
    return NextResponse.json({ success: false, error: "Erro ao gerar QR Code PIX" }, { status: 500 });
  }
}

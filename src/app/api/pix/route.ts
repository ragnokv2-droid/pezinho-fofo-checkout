import { NextRequest, NextResponse } from "next/server";
import { generatePixBrCode } from "@/lib/pix";
import QRCode from "qrcode";
import { PRODUCT } from "@/lib/product";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const amountCents = Number(body.amount) || PRODUCT.pixPrice;

    const brCode = generatePixBrCode({
      key: "11638721998",
      name: "PEZINHO FOFO",
      city: "SAO PAULO",
      amount: amountCents / 100,
      txid: `PED${Date.now().toString().slice(-8)}`,
    });

    const brCodeBase64 = await QRCode.toDataURL(brCode, {
      errorCorrectionLevel: "M",
      margin: 2,
      width: 300,
    });

    return NextResponse.json({
      success: true,
      data: {
        id: `pix_static_${Date.now()}`,
        amount: amountCents,
        status: "PENDING",
        brCode,
        brCodeBase64,
        expiresAt: new Date(
          Date.now() + 30 * 60 * 1000
        ).toISOString(),
      },
    });
  } catch (err) {
    console.error("Erro ao gerar PIX:", err);

    return NextResponse.json(
      {
        success: false,
        error: "Erro ao gerar QR Code PIX",
      },
      { status: 500 }
    );
  }
}

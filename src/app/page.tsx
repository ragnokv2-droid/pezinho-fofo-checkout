"use client";

import { useState, useEffect } from "react";
// Image not needed for decorations
import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import StepIndicator from "@/components/StepIndicator";
import ProductSummary from "@/components/ProductSummary";
import Step1Identification from "@/components/Step1Identification";
import Step2Address from "@/components/Step2Address";
import Step3Payment from "@/components/Step3Payment";
import {
  Step,
  CustomerData,
  AddressData,
  ShippingMethod,
  SHIPPING_OPTIONS,
  TrackingData,
} from "@/types/checkout";
import { PRODUCT } from "@/lib/product";
import { trackMetaEvent } from "@/components/MetaPixel";
import { createEventId, trackMetaCAPI } from "@/lib/meta";

export default function CheckoutPage() {
  const [step, setStep] = useState<Step>(1);
  const [size, setSize] = useState<string | null>(null);

  const [tracking, setTracking] = useState<TrackingData>({
    source: "DIRETO",
    fbclid: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
  });

  const [pixReady, setPixReady] = useState(false);

  const [customer, setCustomer] = useState<CustomerData>({
    name: "",
    email: "",
    taxId: "",
    cellphone: "",
  });

  const [address, setAddress] = useState<AddressData>({
    zipCode: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const [shipping, setShipping] = useState<ShippingMethod | null>(null);

  const shippingPrice =
    SHIPPING_OPTIONS.find((o) => o.id === shipping)?.price ?? 0;

  const totalAmount = PRODUCT.price + shippingPrice;

  useEffect(() => {
    const eventId = createEventId();

    trackMetaEvent(
      "InitiateCheckout",
      {
        content_name: PRODUCT.name,
        currency: "BRL",
        value: PRODUCT.price / 100,
      },
      eventId
    );

    trackMetaCAPI({
      eventName: "InitiateCheckout",
      eventId,
      value: PRODUCT.price / 100,
      currency: "BRL",
      contentName: PRODUCT.name,
    });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const rawSize = params.get("tam") || params.get("tamanho") || "";
    const sizeNumber = Number(rawSize);
    setSize(
      Number.isInteger(sizeNumber) && sizeNumber >= 20 && sizeNumber <= 36
        ? String(sizeNumber)
        : ""
    );

    const rawSource = String(params.get("source") || "DIRETO")
      .trim()
      .toUpperCase();

    const source: TrackingData["source"] =
      rawSource === "LP-GROK" ||
      rawSource === "LP-GPT" ||
      rawSource === "SHOPIFY"
        ? rawSource
        : "DIRETO";

    setTracking({
      source,
      fbclid: params.get("fbclid") || "",
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || "",
    });
  }, []);

  useEffect(() => {
    if (step !== 3) {
      setPixReady(false);
    }
  }, [step]);

  function saveLead(payload: Record<string, string | number>) {
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        produto: PRODUCT.name,
        tamanho: size || "",
        ...tracking,
      }),
    }).catch(() => {});
  }

  if (size === null) {
    return <div className="min-h-screen christmas-bg max-w-lg mx-auto" />;
  }

  if (!size) {
    return (
      <div className="min-h-screen christmas-bg max-w-lg mx-auto shadow-xl relative">
        <div className="relative z-10">
          <Header />
          <div className="bg-white/95 backdrop-blur-sm m-4 p-6 rounded-2xl border border-white/60 text-center shadow-lg">
            <h1 className="text-lg font-bold text-gray-900">
              Tamanho não identificado
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Volte à loja Pé de Criança, escolha a numeração da sandália e
              clique novamente em comprar.
            </p>
          </div>
        </div>
        <ChristmasDecorations />
      </div>
    );
  }

  return (
    <div className="min-h-screen christmas-bg max-w-lg mx-auto shadow-xl relative">
      {/* Flocos de neve */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
        <div className="snowflake snow-1">❄</div>
        <div className="snowflake snow-2">❅</div>
        <div className="snowflake snow-3">❄</div>
        <div className="snowflake snow-4">❅</div>
        <div className="snowflake snow-5">❄</div>
        <div className="snowflake snow-6">❅</div>
        <div className="snowflake snow-7">❄</div>
        <div className="snowflake snow-8">❅</div>
        <div className="snowflake snow-9">❄</div>
        <div className="snowflake snow-10">❅</div>
      </div>

      <div className="relative z-10">
        <Header />
        <PromoBanner />

        {!pixReady && (
          <>
            <div className="bg-white/95 backdrop-blur-[2px]">
              <StepIndicator current={step} />
            </div>

            <div className="bg-white/95 backdrop-blur-[2px]">
              <ProductSummary
                size={size}
                shippingPrice={shippingPrice}
                totalAmount={totalAmount}
              />
            </div>
          </>
        )}

        <div className="bg-white/95 backdrop-blur-[2px] min-h-[50vh] pb-32">
          {step === 1 && (
            <Step1Identification
              data={customer}
              onChange={setCustomer}
              onNext={() => {
                saveLead({
                  nome: customer.name,
                  email: customer.email,
                  telefone: customer.cellphone,
                  endereco: "",
                  frete: "",
                  valor: "",
                  status: "abandonado_dados",
                  etapa: 1,
                });
                setStep(2);
              }}
            />
          )}

          {step === 2 && (
            <Step2Address
              data={address}
              shipping={shipping}
              onChange={setAddress}
              onShippingChange={setShipping}
              customerName={customer.name}
              onNext={() => {
                const eventId = createEventId();

                trackMetaEvent(
                  "AddPaymentInfo",
                  {
                    content_name: PRODUCT.name,
                    currency: "BRL",
                    value: totalAmount / 100,
                  },
                  eventId
                );

                trackMetaCAPI({
                  eventName: "AddPaymentInfo",
                  eventId,
                  value: totalAmount / 100,
                  currency: "BRL",
                  contentName: PRODUCT.name,
                  email: customer.email,
                  phone: customer.cellphone,
                  name: customer.name,
                });

                saveLead({
                  nome: customer.name,
                  email: customer.email,
                  telefone: customer.cellphone,
                  endereco: `${address.street}, ${address.number} - ${address.neighborhood}, ${address.city}/${address.state} - CEP ${address.zipCode}`,
                  frete: shipping || "",
                  valor: (totalAmount / 100).toFixed(2),
                  status: "abandonado_frete",
                  etapa: 2,
                });

                setStep(3);
              }}
              onBack={() => setStep(1)}
            />
          )}

          {step === 3 && (
            <Step3Payment
              formData={{
                ...customer,
                ...address,
                shipping: shipping || undefined,
                size,
                ...tracking,
              }}
              totalAmount={totalAmount}
              onPixReady={setPixReady}
              onBack={() => {
                setPixReady(false);
                setStep(2);
              }}
            />
          )}
        </div>
      </div>

      <ChristmasDecorations />
    </div>
  );
}

function ChristmasDecorations() {
  return (
    <>
      {/* Árvore esquerda */}
      <div className="absolute bottom-0 left-[-12px] z-[3] pointer-events-none select-none">
        <img
          src="/christmas/tree.svg"
          alt=""
          width={130}
          height={195}
          className="drop-shadow-lg"
        />
      </div>

      {/* Árvore direita */}
      <div className="absolute bottom-0 right-[-12px] z-[3] pointer-events-none select-none">
        <img
          src="/christmas/tree.svg"
          alt=""
          width={130}
          height={195}
          className="drop-shadow-lg scale-x-[-1]"
        />
      </div>

      {/* Presentes esquerda */}
      <div className="absolute bottom-2 left-[70px] z-[4] pointer-events-none select-none flex items-end gap-1">
        <img src="/christmas/gift-red.svg" alt="" width={52} height={52} className="drop-shadow-md" />
        <img src="/christmas/gift-gold.svg" alt="" width={40} height={40} className="drop-shadow-md mb-1" />
      </div>

      {/* Presentes direita */}
      <div className="absolute bottom-2 right-[70px] z-[4] pointer-events-none select-none flex items-end gap-1">
        <img src="/christmas/gift-blue.svg" alt="" width={44} height={44} className="drop-shadow-md mb-1" />
        <img src="/christmas/gift-red.svg" alt="" width={52} height={52} className="drop-shadow-md" />
      </div>
    </>
  );
}

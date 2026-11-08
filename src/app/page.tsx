"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { ChristmasDecor, SnowGround } from "@/components/SnowGround";
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

  // Controla se o PIX já foi gerado.
  // Quando true, escondemos etapas e resumo.
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

  const totalAmount = PRODUCT.pixPrice + shippingPrice;

  useEffect(() => {
    const eventId = createEventId();

    trackMetaEvent(
      "InitiateCheckout",
      {
        content_name: PRODUCT.name,
        currency: "BRL",
        value: PRODUCT.pixPrice / 100,
      },
      eventId
    );

    trackMetaCAPI({
      eventName: "InitiateCheckout",
      eventId,
      value: PRODUCT.pixPrice / 100,
      currency: "BRL",
      contentName: PRODUCT.name,
    });
  }, []);


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const rawSize = params.get("tam") || params.get("tamanho") || "";
    const sizeNumber = Number(rawSize);
    setSize(Number.isInteger(sizeNumber) && sizeNumber >= 20 && sizeNumber <= 36 ? String(sizeNumber) : "");

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

  // Se sair da etapa 3, garante que a tela de PIX seja resetada.
  useEffect(() => {
    if (step !== 3) {
      setPixReady(false);
    }
  }, [step]);

  function saveLead(payload: Record<string, string | number>) {
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, produto: PRODUCT.name, tamanho: size || "", ...tracking }),
    }).catch(() => {});
  }

  if (size === null) {
    return <div className="xmas-shell" />;
  }

  if (!size) {
    return (
      <div className="xmas-shell">
        <Header />
        <div className="xmas-card p-6 text-center">
          <h1 className="text-lg font-extrabold text-[#0b1033]">Tamanho não identificado</h1>
          <p className="text-[15px] text-[#475683] mt-2">Volte à loja Pezinho Fofo, escolha a numeração da sandália e clique novamente em comprar.</p>
        </div>
        <SnowGround />
        <ChristmasDecor />
      </div>
    );
  }

  return (
    <div className="xmas-shell">
      <Header />

      {/* Etapas e resumo aparecem normalmente.
          Quando o PIX é gerado, ambos desaparecem. */}
      {!pixReady && <StepIndicator current={step} />}

      <main className="xmas-main">
      {!pixReady && (
        <ProductSummary
          size={size}
          showOriginal={step < 3}
          shippingPrice={shippingPrice}
          totalAmount={totalAmount}
        />
      )}

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
      </main>

      <SnowGround />
      <ChristmasDecor />
    </div>
  );
}

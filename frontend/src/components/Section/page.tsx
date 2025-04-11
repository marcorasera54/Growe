"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AgricultureSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12 text-black">
      {/* Left: Overlapping Images */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        {/* Main image */}
        <div className="rounded-full overflow-hidden w-64 h-64 sm:w-80 sm:h-80 relative">
          <Image
            src="/images/tractors (1).jpg"
            alt="Macchinari agricoli"
            fill
            className="object-cover"
          />
        </div>

        {/* Top right image */}
        <div className="absolute -top-6 right-6 sm:right-12 rounded-full border-4 border-white overflow-hidden w-32 h-32 sm:w-48 sm:h-48">
          <Image
            src="/images/tractors.jpg"
            alt="Campo coltivato"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom left image */}
        <div className="absolute bottom-0 left-6 sm:left-14 rounded-full border-4 border-white overflow-hidden w-28 h-28 sm:w-44 sm:h-44">
          <Image
            src="/images/tractors (2).jpg"
            alt="Prodotti agricoli biologici"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="w-full lg:w-1/2">
        <p className="text-amber-500 font-semibold mb-2 text-sm sm:text-base">
          La Nostra Missione
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
          Coltiviamo il Futuro con Tecnologia e Sostenibilità
        </h2>

        <p className="text-green-600 font-medium mb-4">
          Growe rivoluziona l&apos;agricoltura con soluzioni smart per campi più
          produttivi e sostenibili.
        </p>

        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Grazie a sistemi automatizzati e dati in tempo reale, supportiamo
          agricoltori nel coltivare in modo più efficiente, riducendo sprechi e
          migliorando la qualità dei raccolti.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="bg-amber-50 p-3 rounded-full">
              <Image
                src="/icons/vegetables-icon.svg"
                alt="Icona verdure"
                width={32}
                height={32}
              />
            </div>
            <div>
              <h3 className="font-medium text-base sm:text-lg">
                Coltivazione Intelligente
              </h3>
              <p className="text-sm text-gray-500">
                Monitoraggio continuo per frutta e ortaggi più sani.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-amber-50 p-3 rounded-full">
              <Image
                src="/icons/ripening-icon.svg"
                alt="Icona maturazione"
                width={32}
                height={32}
              />
            </div>
            <div>
              <h3 className="font-medium text-base sm:text-lg">
                Maturazione Ottimizzata
              </h3>
              <p className="text-sm text-gray-500">
                Consigli automatizzati per una raccolta al momento giusto.
              </p>
            </div>
          </div>
        </div>

        {/* Bullet List */}
        <ul className="mb-8 text-sm sm:text-base text-gray-600">
          <li className="flex items-center gap-2 mb-2">
            <span className="text-green-500 text-lg">•</span>
            Analisi dei dati in tempo reale dal campo.
          </li>
          <li className="flex items-center gap-2 mb-2">
            <span className="text-green-500 text-lg">•</span>
            Tecnologia accessibile anche alle piccole aziende agricole.
          </li>
        </ul>

        {/* CTA Butto. n */}
        <Link href="/services">
          <button className="bg-green-600 hover:bg-green-700 cursor-pointer text-white py-3 px-6 rounded-md text-sm sm:text-base transition">
            Scopri di più su Growe
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AgricultureSection;

"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import Link from "next/link";

export default function Products() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-white py-16 h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/agri.jpg"
            alt="Modern interior with plant and rattan chair"
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0" />
        </div>

        <div className="container relative z-10 mx-auto px-6 flex flex-col md:flex-row items-center justify-center h-full">
          {/* Left Spacer or Empty Div if you want to keep layout symmetry */}
          <div className="md:w-1/2 mb-10 md:mb-0" />

          {/* Right Content */}
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-cream p-8 rounded-lg bg-green-50">
              <span className="text-sm font-medium text-gray-800">
                Nuovo Arrivo
              </span>
              <h2 className="text-3xl font-bold text-green-600 mt-2 mb-4">
                Scopri il Nostro ultimo
                <br />
                Robot Growe
              </h2>
              <p className="text-gray-700 mb-6">
                Grazie a Growe, l&apos;agricoltura si evolve con soluzioni smart che
                rendono gli orti domestici più produttivi e sostenibili.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white cursor-pointer py-3 px-8 rounded-md font-medium transition-colors">
                Ordina Ora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Browse The Range Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-2">
            Scopri la Nostra Gamma
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Esplora il nostro ultimo robot domestico, pensato per diverse
            necessità agricole
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="text-center">
              <div className="mb-4 h-96 relative">
                <Image
                  src="/images/growe.png"
                  alt="Growe Field Robot"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="font-medium">Monitoraggio del Campo</h3>
            </div>

            {/* Card 2 */}
            <div className="text-center">
              <div className="mb-4 h-96 relative">
                <Image
                  src="/images/growe (3).png"
                  alt="Growe Harvesting Robot"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="font-medium">Semina e Raccolta</h3>
            </div>

            {/* Card 3 */}
            <div className="text-center">
              <div className="mb-4 h-96 relative">
                <Image
                  src="/images/growe (2).png"
                  alt="Growe Irrigation Robot"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="font-medium">Dati in Tempo Reale</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-10 text-center">
            La Nostra Soluzione
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/robot.webp"
                  alt="Growe Mini"
                  layout="intrinsic"
                  width={600}
                  height={400}
                  className="object-contain rounded-tl-lg rounded-tr-lg"
                />
              </div>
              <Link href="/services/growe" className="block">
                <div className="px-4 pb-4 cursor-pointer hover:bg-gray-100 transition">
                  <h3 className="font-medium">
                    Growe - Il Robot per la Crescita Intelligente delle Piante
                  </h3>
                  <p className="text-sm text-gray-500">
                    Growe è il robot innovativo che trasforma l&apos;agricoltura
                    domestica. Progettato per semplificare la cura delle piante.{" "}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-green-700">da €299.00</span>
                    <span className="text-xs font-semibold text-red-400">
                      Sold Out
                    </span>
                  </div>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="w-full mt-4 text-white cursor-pointer bg-green-600 hover:bg-green-700 py-2 text-sm font-medium rounded"
                  >
                    Ordina Ora
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Content */}
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold mb-2">
                Con Growe, le tue piante raggiungono nuovi livelli di crescita
              </h2>
              <p className="text-gray-600 mb-6">
                Le famiglie e i privati scelgono Growe per la sua facilità d&apos;uso
                e per la qualità che porta direttamente nelle loro case.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md font-medium transition-colors">
                Scopri di più
              </button>
            </div>

            {/* Right Image Gallery */}
            <div className="md:w-2/3 grid grid-cols-2 gap-4">
              <div className="relative h-64">
                <div className="absolute bottom-4 left-4 bg-white p-2 rounded z-10">
                  <span className="text-xs text-gray-500">
                    La migliore crescita
                  </span>
                  <h4 className="font-medium">di una Piantina</h4>
                </div>
                <Image
                  src="/images/plant (1).jpg"
                  alt="Farm Inspiration"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-64">
                <Image
                  src="/images/plant (2).jpg"
                  alt="Farm Inspiration"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

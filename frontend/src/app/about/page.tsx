// src/components/About/page.tsx
import React from "react";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-50 text-black">
        {/* Hero section with background image */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
          <div className="absolute inset-0 opacity-90">
            <Image
              src="/images/small-plant.jpg"
              alt="Paesaggio agricolo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-16">
              <div className="max-w-xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 md:mb-6">
                  CHI SIAMO
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white">
                  GROWE nasce da un&apos;idea semplice ma ambiziosa: rendere
                  l&apos;agricoltura più intelligente, sostenibile e accessibile.
                  Uniamo tecnologia avanzata e visione ecologica per offrire
                  soluzioni concrete a chi coltiva oggi, pensando al domani. Il
                  nostro viaggio è iniziato con passione e continua ogni giorno
                  con innovazione.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How We Work Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-16 md:py-20">
          <div className="flex flex-col md:flex-row">
            {/* Left Column */}
            <div className="w-full md:w-1/2 pr-0 md:pr-8 lg:pr-12 mb-8 md:mb-0">
              <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-2 sm:mb-4">
                COME LAVORIAMO
              </h3>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">
                UN APPROCCIO INNOVATIVO PER UNA CRESCITA SOSTENIBILE
              </h2>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8 lg:pl-12">
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                In GROWE, il nostro approccio va oltre la semplice automazione.
                Combiniamo soluzioni tecnologiche avanzate con un forte impegno
                per la sostenibilità, creando un ecosistema che permette alle
                aziende di prosperare, riducendo al contempo l&apos;impatto
                ambientale. Siamo convinti che l&apos;innovazione non possa
                prescindere dal rispetto per il nostro pianeta.
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-black text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-full"
              >
                CONTATTACI
              </a>
            </div>
          </div>
        </div>

        {/* Sustainability Section */}
        <div className="bg-white py-10 sm:py-16 md:py-20 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              {/* Text Section */}
              <div className="w-full lg:w-1/2 lg:pr-8">
                <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-2 sm:mb-4">
                  SOSTENIBILITÀ
                </h3>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
                  INNOVAZIONE NEL RISPETTO DELL&apos;AMBIENTE
                </h2>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-700">
                    Nel nostro percorso verso un futuro più sostenibile, abbiamo
                    scelto di progettare e produrre il nostro robot agricolo con
                    un&apos;attenzione particolare all&apos;ambiente. Ogni fase del
                    processo di sviluppo, dalla scelta dei materiali alla
                    produzione, riflette il nostro impegno verso la riduzione
                    dell&apos;impatto ambientale.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700">
                    <strong>
                      Materiali sostenibili per un impatto minimo:
                    </strong>{" "}
                    utilizziamo materiali eco-compatibili e riciclabili, come
                    leghe leggere, plastiche biodegradabili e componenti
                    facilmente recuperabili. Ogni elemento è studiato per
                    ridurre l&apos;impronta ecologica senza compromettere efficienza
                    e prestazioni.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700">
                    <strong>Tecnologia che rispetta l&apos;ambiente:</strong> il
                    nostro robot è progettato per ottimizzare l&apos;utilizzo delle
                    risorse naturali. Grazie alla precisione delle sue
                    tecnologie, è possibile ridurre l&apos;impiego di pesticidi,
                    fertilizzanti e acqua, contribuendo alla salvaguardia
                    dell&apos;ecosistema e alla protezione della biodiversità.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700">
                    <strong>Efficienza energetica:</strong> alimentato da fonti
                    rinnovabili e dotato di batterie a lunga durata, il nostro
                    robot riduce la dipendenza dai combustibili fossili e
                    ottimizza i consumi energetici.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700">
                    <strong>Un futuro sostenibile per l&apos;agricoltura:</strong>{" "}
                    non si tratta solo di automazione, ma di una vera e propria
                    rivoluzione verde. L&apos;innovazione deve sempre andare di pari
                    passo con il rispetto per il pianeta. Per questo, in ogni
                    nostra scelta, mettiamo la sostenibilità al centro della
                    nostra visione.
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative rounded-2xl overflow-hidden shadow-md w-full lg:w-2/5 mt-6 lg:mt-0">
                <Image
                  src="/images/robot.png"
                  alt="Robot agricolo sostenibile"
                  width={500}
                  height={100}
                  className="object-cover w-full"
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

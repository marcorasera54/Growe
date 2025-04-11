import Footer from "@/components/Footer/page";
import JoinList from "@/components/JoinList/page";
import Navbar from "@/components/Navbar/page";
import AgricultureSection from "@/components/Section/page";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { GiHighGrass } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";
import { MdAgriculture, MdLocalShipping } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";

export default function Home() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/farm-landscape (1).jpg"
            alt="Agricultural landscape"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Content Overlay */}
        <div className="relative z-10">
          {/* Hero Section */}
          {/* Hero Section with Tags at Bottom */}
          <section className="container mx-auto px-6 sm:px-8 pt-24 pb-4 flex flex-col h-[80vh]">
            {/* Hero Content */}
            <div className="flex-grow max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                Potenziare l&apos;Agricoltura Sostenibile per un{" "}
                <span className="relative">
                  <span className="relative inline-block italic">
                    Futuro migliore.
                  </span>
                </span>
              </h1>
              <p className="text-white text-base sm:text-lg md:text-xl">
                Unisciti a noi per rivoluzionare l&apos;agricoltura attraverso la
                tecnologia
                <br /> innovativa e pratiche sostenibili. Ci impegniamo a
                migliorare
                <br />
                la resa delle colture, conservare le risorse e supportare gli
                agricoltori
                <br />
                in tutto il mondo.
              </p>

              <Link
                href="/solutions"
                className="inline-flex items-center bg-white/20 backdrop-blur-xs border border-white/40 shadow-lg text-white font-semibold px-8 py-3 rounded-full transition mt-6"
              >
                Le Nostre Soluzioni
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            {/* Tags Section at Bottom */}
            <div className="mt-auto">
              <div className="flex flex-wrap justify-end gap-2 sm:gap-3 md:gap-4 max-w-lg ml-auto">
                {[
                  "AgriTech",
                  "Coltivazione di precisione",
                  "Eco-Sostenibile",
                  "Salute del suolo",
                  "Agricoltura intelligente",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white/10 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md border border-white/20 shadow-lg text-sm sm:text-base"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* What We Offer Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-6 sm:px-48">
          <div className="text-center mb-12">
            <h3 className="text-amber-500 font-medium mb-2">
              Il Nostro Servizio
            </h3>
            <h2 className="text-4xl font-bold text-gray-900">Cosa Offriamo?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Agriculture Products Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/images/agriculture (1).jpg"
                  alt="Agriculture Products"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-green-600 p-3 rounded-lg">
                  <GiHighGrass className="text-2xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-black font-bold mb-2">
                  Passione e Innovazione
                </h3>
                <p className="text-gray-600">
                  Growe combina agricoltura e tecnologia per rendere le
                  coltivazioni più intelligenti e sostenibili, migliorando la
                  vita degli agricoltori e rispettando l&apos;ambiente.
                </p>
              </div>
            </div>

            {/* Organic Products Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/images/agriculture (2).jpg"
                  alt="Organic Products"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-green-600 p-3 rounded-lg">
                  <MdAgriculture className="text-2xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-black font-bold mb-2">
                  Tecnologia Sostenibile
                </h3>
                <p className="text-gray-600">
                  Offriamo un ecosistema tecnologico che ottimizza ogni fase
                  agricola, migliorando efficienza e qualità con un forte
                  impegno per la sostenibilità.
                </p>
              </div>
            </div>

            {/* Dairy Products Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/images/agriculture (3).jpg"
                  alt="Dairy Products"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-green-600 p-3 rounded-lg">
                  <PiPlantFill className="text-2xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-black font-bold mb-2">
                  Sostenibilità e Rispetto
                </h3>
                <p className="text-gray-600">
                  Utilizziamo materiali eco-compatibili e soluzioni precise per
                  ridurre l&apos;uso di risorse, proteggendo l&apos;ambiente e la
                  biodiversità.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-amber-50/60">
        <AgricultureSection />
      </div>
      {/* Prodotti Freschi Banner Section */}
      <section className="bg-gray-50 text-black py-16">
        <div className="container mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-green-600 font-medium mb-2">
              BENVENUTI SU GROWE
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Agricoltura Fresca & Sostenibile
            </h2>
            <p className="text-xl text-gray-700 mb-6 font-semibold">
              Sconto fino al 25% su Growe
            </p>
            <p className="text-gray-600 mb-8">
              Spedizione gratuita su tutti gli ordini. Consegniamo, lui coltiva.
            </p>
            <Link
              href="/services/growe"
              className="inline-flex items-center bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition hover:bg-green-700"
            >
              Ordina ora
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="md:w-1/2 relative">
            <Image
              src="/images/growe (2).png"
              alt="Tecnologia agricola sostenibile"
              width={600}
              height={500}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Features Bar */}
        <div className="container mx-auto px-6 sm:px-8 mt-12">
          <div className="bg-white rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-full">
                <MdLocalShipping className="text-green-600 text-4xl" />
              </div>
              <div>
                <h4 className="font-semibold">Spedizione Gratuita</h4>
                <p className="text-sm text-gray-600">
                  Spedizione gratuita su tutti gli ordini
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-full">
                <IoMdCall className="text-green-600 text-4xl" />
              </div>
              <div>
                <h4 className="font-semibold">Supporto Clienti 24/7</h4>
                <p className="text-sm text-gray-600">
                  Accesso istantaneo al supporto
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-full">
                <GrSecure className="text-green-600 text-4xl" />
              </div>
              <div>
                <h4 className="font-semibold">Pagamento Sicuro</h4>
                <p className="text-sm text-gray-600">
                  Garantiamo la sicurezza del tuo denaro
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-full">
                <FaCheck className="text-green-600 text-3xl" />
              </div>
              <div>
                <h4 className="font-semibold">Garanzia di Rimborso</h4>
                <p className="text-sm text-gray-600">
                  30 giorni di garanzia soddisfatti o rimborsati
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <JoinList />
      <Footer />
    </div>
  );
}

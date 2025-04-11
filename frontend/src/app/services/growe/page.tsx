"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCartShopping,
  FaStar,
  FaBolt,
  FaXTwitter,
  FaRegHeart,
  FaClipboard,
} from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { TbMichelinStarGreen } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import { toast } from "sonner";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("descriptions");
  const [selectedImage, setSelectedImage] = useState("/images/growe (2).png"); // Default main image

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const features = [
    "Monitoraggio preciso e sistema intelligente.",
    "Sostenibilità ed efficienza.",
    "Miglioramento della produttività.",
    "Dati in tempo reale e raccomandazioni intelligenti.",
  ];
  const product = {
    name: "GROWE Robot Agricolo Sostenibile - EcoBot",
    price: 299.0,
    originalPrice: 399.0,
    discount: "25% Off",
    rating: 5,
    reviews: 5,
    brand: "Growe",
    status: "Sold Out",
    description:
      "Grazie a Growe, avrai un'esperienza agricola senza precedenti. Il nostro robot agricolo è progettato per ottimizzare ogni aspetto della tua attività, aiutandoti a coltivare in modo più intelligente, sostenibile e produttivo. Con tecnologie avanzate, Growe ti permette di monitorare continuamente i tuoi campi, rilevare in tempo reale le necessità delle tue colture e prendere decisioni più rapide e informate.",
    mainImage: "/images/growe (2).png",
    thumbnails: [
      "/images/growe (2).png",
      "/images/growe (3).png",
      "/images/growe.png",
    ],
  };

  const handleThumbnailClick = (image: React.SetStateAction<string>) => {
    setSelectedImage(image);
  };

  const handleArrowClick = (direction: number) => {
    const currentIndex = product.thumbnails.findIndex(
      (image) => image === selectedImage
    );
    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
      newIndex = product.thumbnails.length - 1; // Wrap to last image
    } else if (newIndex >= product.thumbnails.length) {
      newIndex = 0; // Wrap to first image
    }

    setSelectedImage(product.thumbnails[newIndex]);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-4 sm:py-6 md:py-8 text-black">
        <div className="flex flex-col lg:flex-row gap-6 pt-4 sm:pt-6 md:pt-8 lg:pt-10">
          {/* Product Images Section */}
          <div className="w-full lg:w-2/5">
            <div className="flex flex-col-reverse sm:flex-row gap-4">
              {/* Thumbnail Gallery - vertical on larger screens, horizontal on small */}
              <div className="flex flex-row sm:flex-col mt-4 sm:mt-0 sm:my-2 space-x-2 sm:space-x-0 sm:space-y-2 justify-center sm:justify-start">
                {product.thumbnails.map((thumbnail, index) => (
                  <div
                    key={index}
                    className={`border ${
                      thumbnail === selectedImage
                        ? "border-green-500"
                        : "border-gray-200"
                    } rounded-md w-14 h-14 sm:w-16 sm:h-16 p-0.5 cursor-pointer flex-shrink-0`}
                    onClick={() => handleThumbnailClick(thumbnail)}
                  >
                    <Image
                      src={thumbnail}
                      alt={`Thumbnail ${index + 1}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>

              {/* Main Image */}
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-[400px] sm:h-[500px] object-contain rounded-lg"
                />

                {/* Left Arrow */}
                <button
                  onClick={() => handleArrowClick(-1)}
                  className="absolute top-1/2 left-2 sm:left-4 transform cursor-pointer -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-md hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() => handleArrowClick(1)}
                  className="absolute top-1/2 right-2 sm:right-4 transform cursor-pointer -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-md hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="w-full lg:w-3/5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                {product.name}{" "}
              </h1>
              <span className="bg-red-100 text-red-600 font-semibold px-2 py-1 text-xs rounded self-start sm:self-auto">
                {product.status}
              </span>
            </div>

            {/* Star Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < product.rating ? "text-yellow-400" : "text-gray-300"
                    }
                    size={16}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.reviews} Recensioni
              </span>
            </div>

            {/* Price Info */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-end">
                <span className="line-through text-base sm:text-lg text-gray-400">
                  €{product.originalPrice.toFixed(2)}
                </span>
                <span className="ml-2 text-xl sm:text-2xl font-bold text-green-600">
                  da €{product.price.toFixed(2)}
                </span>
                <span className="ml-3 bg-red-100 text-red-600 px-2 py-1 text-xs rounded-sm">
                  {product.discount}
                </span>
              </div>
            </div>

            {/* Brand info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-3 sm:space-y-0">
              <div className="flex items-center">
                <span className="text-gray-700 font-medium mr-2">Brand:</span>
                <div className="flex items-center">
                  <span>{product.brand}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
              {product.description}
            </p>

            {/* Quantity Selector and Add to Cart Button */}
            <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
              {/* Quantity Selector - Full width on mobile, appropriate width on larger screens */}
              <div className="flex items-center border border-gray-300 h-10 rounded-full w-full sm:w-36 md:w-40 lg:w-44 xl:w-48">
                <button
                  onClick={decreaseQuantity}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 cursor-pointer"
                >
                  <span className="rounded-full px-2 py-0.5 bg-gray-100">
                    −
                  </span>
                </button>
                <div className="flex-1 text-center">{quantity}</div>
                <button
                  onClick={increaseQuantity}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 cursor-pointer"
                >
                  <span className="rounded-full px-2 py-0.5 bg-gray-100">
                    +
                  </span>
                </button>
              </div>

              {/* Order Button - Full width on mobile, grows to fill available space on larger screens */}
              <button
                className="w-full sm:flex-1 md:flex-grow lg:flex-grow xl:flex-grow 2xl:flex-grow cursor-not-allowed bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-4 sm:px-6 rounded-full flex items-center justify-center gap-2"
                disabled
              >
                <span className="text-sm sm:text-base">Ordina Ora</span>
                <FaCartShopping className="text-lg" />
              </button>

              {/* Heart Button - Consistent size across breakpoints */}
              <button className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-100">
                <FaRegHeart className="text-lg" />
              </button>
            </div>

            {/* Benefits Section */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center bg-gray-50 p-3 sm:p-4 rounded-lg">
                <div className="h-8 w-8 sm:h-12 sm:w-12 mr-3 sm:mr-4 flex items-center justify-center">
                  <BsFillInfoCircleFill className="text-green-500 text-2xl sm:text-3xl" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base">
                    Sconto del 25%
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Approfitta di un risparmio immediato del 25% sul nostro
                    robot agricolo.
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-gray-50 p-3 sm:p-4 rounded-lg">
                <div className="h-8 w-8 sm:h-12 sm:w-12 mr-3 sm:mr-4 flex items-center justify-center">
                  <FaBolt className="text-green-500 text-2xl sm:text-3xl" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base">
                    Tecnologia Avanzata
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Ottimizza la tua coltivazione con la nostra tecnologia
                    intelligente e sostenibile.
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-gray-50 p-3 sm:p-4 rounded-lg">
                <div className="h-8 w-8 sm:h-12 sm:w-12 mr-3 sm:mr-4 flex items-center justify-center">
                  <TbMichelinStarGreen className="text-green-500 text-2xl sm:text-3xl" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base">
                    Sostenibilità Garantita
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Coltivazioni più ecologiche e responsabili per il futuro del
                    pianeta.
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-gray-50 p-3 sm:p-4 rounded-lg">
                <div className="h-8 w-8 sm:h-12 sm:w-12 mr-3 sm:mr-4 flex items-center justify-center">
                  <IoMdTime className="text-green-500 text-2xl sm:text-3xl" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base">
                    Monitoraggio in Tempo Reale
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Controlla costantemente le necessità delle tue colture, per
                    una gestione più efficiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 sm:mt-12">
          <div className="border-b border-gray-200 overflow-x-auto whitespace-nowrap">
            <nav className="flex space-x-4 sm:space-x-8 px-2 sm:justify-center">
              <button
                className={`py-3 sm:py-4 px-1 border-b-2 cursor-pointer font-medium text-sm sm:text-md ${
                  activeTab === "descriptions"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("descriptions")}
              >
                Descrizione
              </button>
              <button
                className={`py-3 sm:py-4 px-1 border-b-2 cursor-pointer font-medium text-sm sm:text-md ${
                  activeTab === "additionalInfo"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("additionalInfo")}
              >
                Informazioni Aggiuntive
              </button>
              <button
                className={`py-3 sm:py-4 px-1 border-b-2 cursor-pointer font-medium text-sm sm:text-md ${
                  activeTab === "customerFeedback"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("customerFeedback")}
              >
                Recensioni
              </button>
            </nav>
          </div>

          {/* Tab content */}
          <div className="py-4 sm:py-6 prose max-w-none text-gray-600">
            {activeTab === "descriptions" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <p className="mb-4 text-sm sm:text-base">
                    <b>Growe</b> è il partner ideale per ogni famiglia o privato
                    che desidera ottimizzare la propria attività. Con la sua
                    tecnologia avanzata, permette di monitorare le colture in
                    tempo reale, riducendo sprechi e aumentando la qualità dei
                    raccolti. Le soluzioni automatizzate e intelligenti che
                    offre sono progettate per migliorare ogni aspetto del
                    processo agricolo, dalla semina alla raccolta.
                  </p>
                  <p className="text-sm sm:text-base">
                    Grazie a <b>Growe</b>, puoi coltivare in modo più
                    efficiente, risparmiando tempo e risorse. Il robot agricolo
                    si adatta alle necessità specifiche del tuo terreno,
                    migliorando la resa delle tue piantagioni e riducendo
                    l'impatto ambientale. Con un sistema di monitoraggio
                    costante delle colture, <b>Growe</b> ti aiuta a raggiungere
                    risultati ottimali con il minimo sforzo.
                  </p>

                  <p className="mt-4 text-sm sm:text-base">
                    Non solo aumenti la produttività, ma puoi anche fare la
                    differenza per l'ambiente. <b>Growe</b> offre soluzioni
                    accessibili a chiunque ne abbia la necessità, garantendo che
                    ogni individuo, indipendentemente dalle dimensioni della sua
                    orticoltura, possa beneficiare delle tecnologie più
                    innovative per l'agricoltura sostenibile.
                  </p>

                  <ul className="mt-4 sm:mt-6 space-y-2">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center font-medium text-sm sm:text-base"
                      >
                        <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-green-500 flex items-center justify-center text-white mr-2">
                          ✓
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 sm:mt-6 text-sm sm:text-base">
                    In un settore agricolo sempre più competitivo, <b>Growe</b>{" "}
                    ti offre un vantaggio significativo, riducendo i costi
                    operativi, aumentando la qualità dei raccolti e contribuendo
                    a una produzione più sostenibile. Con la nostra tecnologia,
                    il futuro dell'agricoltura è nelle tue mani.
                  </p>
                </div>

                <div className="relative h-64 md:h-auto flex items-center justify-center">
                  <div className="relative h-full rounded-lg overflow-hidden">
                    <Image
                      src="/images/robot.webp"
                      alt="Growe Agricultural Robot"
                      width={200}
                      height={300}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "additionalInfo" && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4">
                  Specifiche Tecniche
                </h3>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                  <li>
                    <strong>Compatibilità:</strong> Raspberry Pi 4/3 Model
                    B+/B/2B.
                  </li>
                  <li>
                    <strong>Controllo Remoto:</strong> Connessione WiFi per
                    comando in tempo reale tramite interfaccia web.
                  </li>
                  <li>
                    <strong>Braccio Robotico:</strong> Struttura a 4 DOF (gradi
                    di libertà) per raccolta, ispezione e manipolazione precisa.
                  </li>
                  <li>
                    <strong>Sensori:</strong> Modulo a ultrasuoni per
                    rilevamento ostacoli, sensore tracciamento per line
                    following.
                  </li>
                  <li>
                    <strong>Visione Artificiale:</strong> Supporto OpenCV per il
                    tracciamento di oggetti e target in tempo reale.
                  </li>
                  <li>
                    <strong>Movimento:</strong> Cingolato con motori DC ad alta
                    efficienza, ideale per superfici agricole irregolari.
                  </li>
                  <li>
                    <strong>Alimentazione:</strong> Batteria ricaricabile.
                  </li>
                  <li>
                    <strong>Materiali:</strong> Telaio in acrilico resistente,
                    braccio meccanico in plastica rigida e acciaio.
                  </li>
                  <li>
                    <strong>Programmazione:</strong> Linguaggi supportati Python
                    e C++.
                  </li>
                  <li>
                    <strong>Utilizzo:</strong> Applicazioni per agricoltura
                    intelligente.
                  </li>
                </ul>

                <p className="mt-6 text-sm sm:text-base text-gray-600">
                  <b>Growe</b> rappresenta una base perfetta per l'automazione
                  agricola, permettendo di sviluppare un monitoraggio
                  ambientale, una raccolta intelligente e un'interazione con
                  colture attraverso visione artificiale.
                </p>
              </div>
            )}

            {activeTab === "customerFeedback" && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Recensioni dei Clienti (5)
                </h2>
                <div className="flex flex-col lg:flex-row gap-6 mb-8 mt-6">
                  <div className="w-full lg:w-2/3">
                    {/* Reviews list */}
                    <ReviewCard
                      name="Vincenzo Cairo"
                      date="30 Marzo 2025"
                      rating={5}
                      comment="Il robot agricolo è davvero un buon prodotto, facile da utilizzare e molto efficace nel suo lavoro. Ho notato un netto miglioramento nella gestione dei miei terreni, risparmiando tempo e risorse. L'unico aspetto che potrebbe essere migliorato è l'autonomia della batteria in alcune situazioni, ma nel complesso sono molto soddisfatto. Consigliato, soprattutto per chi cerca una soluzione ecologica ed efficiente!"
                      helpfulCount={12}
                    />

                    <ReviewCard
                      name="Eleonora Bianchi"
                      date="28 Marzo 2025"
                      rating={4}
                      comment="Il robot agricolo funziona bene e ha migliorato l'efficienza delle operazioni nei miei campi, ma ci sono alcune piccole aree di miglioramento. La configurazione iniziale è stata un po' complicata e il software potrebbe essere più intuitivo. Tuttavia, una volta impostato, il robot fa un buon lavoro. La parte ecologica è sicuramente un punto a favore, ma mi piacerebbe vedere un miglioramento nella durata della batteria. Buon prodotto, ma con margini di miglioramento."
                      helpfulCount={3}
                    />

                    <ReviewCard
                      name="Laura Bonanni"
                      date="29 Marzo 2025"
                      rating={5}
                      title="Spettacolare!"
                      comment="Sono molto soddisfatto dell'acquisto. Il robot lavora autonomamente, risparmiando tempo e risorse. Non solo fa risparmiare sui costi di manodopera, ma contribuisce anche a una gestione agricola più green. La qualità del prodotto è eccellente e l'assistenza clienti è stata impeccabile. 5 stelle meritate!"
                      helpfulCount={2}
                    />

                    <ReviewCard
                      name="Francesco Rossi"
                      date="24 Marzo 2025"
                      rating={5}
                      title="Molto Bello"
                      comment="Il robot agricolo che ho acquistato è fantastico! Facile da usare e incredibilmente efficiente. La cosa che mi ha colpito di più è l'approccio ecosostenibile: risparmia energia e riduce al minimo l'impatto sull'ambiente. È perfetto per le piccole e medie aziende agricole. Consigliatissimo"
                      helpfulCount={6}
                    />

                    <ReviewCard
                      name="Herman Stanley"
                      date="30 Marzo 2025"
                      rating={4}
                      title="Fantastico"
                      comment="Un'innovazione incredibile per l'agricoltura! Il robot è davvero facile da configurare e comincia a lavorare in pochi minuti. Ho notato un miglioramento nelle mie coltivazioni grazie alla sua precisione. È il futuro dell'agricoltura ecosostenibile, un prodotto che fa davvero la differenza!"
                      helpfulCount={9}
                    />
                  </div>

                  <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg h-fit">
                    <div className="text-center mb-4">
                      <h3 className="text-sm text-gray-700 mb-2">
                        Overall rating
                      </h3>
                      <div className="flex items-center justify-center">
                        <div className="text-yellow-500 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 sm:h-6 sm:w-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span className="text-4xl sm:text-5xl font-bold">
                          4.8
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        4 su 5 (96%)
                        <br />
                        Raccomandano questo prodotto
                      </p>
                    </div>

                    <div className="space-y-2 mb-6">
                      <RatingBar rating={5} count={4} />
                      <RatingBar rating={4} count={1} />
                      <RatingBar rating={3} count={0} />
                      <RatingBar rating={2} count={0} />
                      <RatingBar rating={1} count={0} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

interface ReviewCardProps {
  name: string;
  date: string;
  rating: number;
  title?: string;
  comment: string;
  helpfulCount: number;
}

interface RatingBarProps {
  rating: number;
  count: number;
}

function ReviewCard({
  name,
  date,
  rating,
  title,
  comment,
  helpfulCount,
}: ReviewCardProps) {
  return (
    <div className="border-b border-gray-200 pb-6 mb-6">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
            <img
              src={
                "https://th.bing.com/th/id/OIP.OYbzbbyzogwtriubL2pP0AHaHa?rs=1&pid=ImgDetMain"
              }
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-medium">{name}</div>
            <div className="text-xs text-gray-500">{date}</div>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-1">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${
                i < rating ? "text-yellow-500" : "text-gray-300"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        {title && (
          <span className="ml-2 text-gray-800 font-semibold">{title}</span>
        )}
      </div>

      <p className="text-gray-700 mb-3">{comment}</p>

      <div className="flex items-center text-sm text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
        <span>
          {helpfulCount}{" "}
          {helpfulCount === 1 ? "persona lo ha" : "persone lo hanno"} trovato
          utile
        </span>
      </div>
    </div>
  );
}

function RatingBar({ rating, count }: RatingBarProps) {
  const percentage = count > 0 ? (count / 5) * 100 : 0;

  return (
    <div className="flex items-center">
      <span className="w-4 text-right mr-2 text-black">{rating}</span>
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="bg-green-600 h-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="w-4 text-left ml-2">{count}</span>
    </div>
  );
}

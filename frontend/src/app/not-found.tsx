// src/components/NotFound/page.tsx
import React from "react";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-white py-16 px-4">
      <div className="text-center max-w-lg">
        <h2 className="text-gray-600 text-xl mb-8 font-medium tracking-wide">
          OOPS! PAGE NOT FOUND
        </h2>

        <div>
          <Image
            src="/images/404 (1).jpg"
            alt="Agricultural landscape"
            height={500}
            width={500}
            className="object-cover"
            priority
          />
        </div>

        <p className="text-xl text-gray-700 mb-12 max-w-md mx-auto leading-relaxed">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </p>
      </div>
    </section>
  );
}

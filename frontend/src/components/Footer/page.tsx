import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main banner image with tagline */}
      <div className="relative w-full h-52 overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/footer (2).jpg"
          alt="Livestock banner"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/70 to-green-800/70">
          <h2 className="text-white text-3xl font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            &quot;Coltivare con Intelligenza, Raccogliere con Successo&quot;
          </h2>
        </div>
      </div>

      {/* Footer content */}
      <div className="bg-green-800 text-white pt-12 pb-4 px-8">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          {/* Logo section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6">
              <Link href="/">
                <div className="flex items-center">
                  <div className="text-white text-3xl font-serif">
                    <span className="font-bold">Growe</span>
                    <span className="italic"> S.R.L.</span>
                  </div>
                </div>
              </Link>
            </div>
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-2 text-2xl ml-8">
              <Link
                href="https://www.facebook.com/profile.php?id=61575275450269"
                className="hover:opacity-80"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://x.com/growesrl?s=21"
                className="hover:opacity-80"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://www.instagram.com/growesrl_?igsh=bjBzZnNlN2NzcnFs"
                className="hover:opacity-80"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Service section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Servizi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Soluzioni
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:underline">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:underline">
                  Contattaci
                </Link>
              </li>
            </ul>
          </div>

          {/* Policy and contact section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h3 className="text-xl font-semibold mb-4">Policy</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="hover:underline">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/acceptable-policy" className="hover:underline">
                    Acceptable Use Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contatti</h3>
              <ul className="space-y-2">
                <li>(+39) 388 6955 182</li>
                <li>growesrl@gmail.com</li>
                <li>04011 - Aprilia, Lazio</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-green-700 mt-8 pt-6 text-center">
          <p>© 2025 Growe S.R.L. - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

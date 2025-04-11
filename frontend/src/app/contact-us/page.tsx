"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import { toast } from "sonner";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://192.168.137.213:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        toast.success("Ticket inviato con successo!");
      } else {
        toast.error("Errore nell'invio del ticket. Per favore, riprova!");
      }
    } catch (error) {
      toast.error("Errore nell'invio del ticket. Per favore, riprova!");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="flex items-center justify-center py-8 sm:py-12 md:py-16 bg-gray-50 text-black">
        <div className="container px-4 sm:px-6 md:px-8 pt-6 md:pt-10 w-full sm:w-11/12 md:w-10/12 lg:w-5/6 xl:w-4/5 mx-auto">
          <div className="flex flex-col lg:flex-row shadow-lg rounded-lg overflow-hidden">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2 bg-white p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
                Scrivici qualcosa...
              </h2>
              <div className="border-t border-gray-200 mb-4 sm:mb-6"></div>

              <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 focus:bg-green-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 focus:bg-green-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Oggetto"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 focus:bg-green-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Messaggio"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 resize-none focus:bg-green-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-500 text-white cursor-pointer px-4 sm:px-6 py-2 rounded-md hover:bg-green-600 transition duration-300 disabled:bg-gray-400"
                  >
                    {isSubmitting ? "Sending..." : "Invia Messaggio"}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="w-full lg:w-1/2 bg-green-600 p-6 sm:p-8 md:p-10 lg:p-12 text-white flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Contattaci
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="mt-1 bg-white/10 p-2 sm:p-3 backdrop-blur-md rounded-full shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Sede Legale:</p>
                    <p className="text-sm sm:text-base">
                      Via Carroceto snc, 04011 - Aprilia (LT), Lazio
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="mt-1 bg-white/10 p-2 sm:p-3 backdrop-blur-md rounded-full shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Phone:</p>
                    <p className="text-sm sm:text-base">+39 3886 9551 82</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="mt-1 bg-white/10 p-2 sm:p-3 backdrop-blur-md rounded-full shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-sm sm:text-base break-all">
                      growesrl@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="mt-1 bg-white/10 p-2 sm:p-3 backdrop-blur-md rounded-full shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Website</p>
                    <p className="text-sm sm:text-base">www.growe.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

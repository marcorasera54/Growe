"use client";
import React, { useState } from "react";

export default function JoinList() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!formData.email) {
      setError("Per favore, inserisci la tua email.");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setMessage(null);

    try {
      const response = await fetch("http://localhost:8000/api/join-list/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setFormData({ email: "", name: "" }); // Clear the form
      } else {
        setError(data.error || "Si è verificato un errore. Riprova più tardi.");
      }
    } catch (err) {
      setError(
        "Errore di connessione. Verifica la tua connessione internet e riprova."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-base sm:text-lg font-medium">
              🌱 Innovazione Agricola con Growe!
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-6 leading-tight">
            Unisciti alla Lista d'Attesa per
            <br className="hidden sm:block" />
            Growe Oggi!
          </h2>
          <p className="text-gray-700 mb-8 text-base sm:text-lg md:text-xl">
            Growe è il tuo nuovo assistente agricolo intelligente. Automatizza i
            compiti, monitora le colture e porta il tuo raccolto ad un altro
            livello. Iscriviti ora per essere tra i primi a scoprire quando sarà
            disponibile!
          </p>

          {message && (
            <div className="mb-6 p-3 bg-green-100 text-green-700 rounded-lg">
              {message}
            </div>
          )}

          {error && (
            <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col max-w-xl mx-auto items-center gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Il tuo nome (opzionale)"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-100 text-base"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <input
              type="email"
              name="email"
              placeholder="Inserisci la tua email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-100 text-base"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              required
            />
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-colors cursor-pointer text-base disabled:bg-gray-400"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Invio..." : "Iscriviti Ora!"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

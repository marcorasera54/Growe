import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";

export default function BlogGrid() {
  const blogPosts = [
    {
      id: 1,
      title:
        "🌱 Il primo passo verso il futuro: è nata la nostra startup innovativa",
      excerpt:
        "Dalle prime idee nate attorno a un tavolo, alla nascita ufficiale di un progetto che vuole cambiare il mondo dell’agricoltura: oggi GROWE è realtà. Con entusiasmo, visione e una buona dose di coraggio, abbiamo dato vita a una startup che unisce tecnologia, sostenibilità e innovazione per coltivare un futuro migliore. Questo è solo l'inizio di un viaggio ambizioso.",
      image: "/images/news.jpg",
      date: "Febbraio 16, 2024",
      category: "Agritech, Smart-Farming",
      authorRole: "Team di Growe",
    },
    {
      id: 2,
      title:
        "🌿 GROWE: l’agricoltura intelligente, semplice ed efficiente per tutti.",
      excerpt:
        "GROWE è la soluzione per chi vuole coltivare in modo più consapevole, sostenibile e produttivo. Ottimizza i consumi d’acqua, previeni i problemi, migliora la resa e ricevi consigli in tempo reale: GROWE rivoluziona il modo di coltivare, rendendolo accessibile e connesso.",
      image: "/images/growe.jpg",
      date: "Aprile 7, 2025",
      category: "Agritech, Smart-Farming",
      authorRole: "Team di Growe",
    },
    {
      id: 3,
      title: "🚜 Robot in campo: la nuova era delle coltivazioni autonome",
      excerpt:
        "I robot agricoli stanno diventando una realtà quotidiana: raccolgono frutta, seminano, diserbano e mappano i terreni con altissima precisione. Il lavoro nei campi non è mai stato così tecnologico!",
      image: "/images/tractor.jpg",
      date: "Marzo 16, 2025",
      category: "Agritech, Smart-Farming",
      authorRole: "Team di Growe",
    },
    {
      id: 4,
      title: "📰 Le novità dal mondo GROWE: innovazione che cresce ogni giorno",
      excerpt:
        "Scopri cosa bolle in pentola! Nuove funzionalità, traguardi raggiunti, collaborazioni, eventi e tutte le evoluzioni del nostro ecosistema agricolo tech. Ti raccontiamo ogni passo del nostro percorso verso un'agricoltura più smart e sostenibile. Resta sintonizzato: il futuro dell’agricoltura si muove veloce, e GROWE è in prima linea.",
      image: "/images/news (2).jpg",
      date: "Febbraio 10, 2025",
      category: "Agritech, Smart-Farming",
      authorRole: "Team di Growe",
    },
    {
      id: 5,
      title: "☁️ Agricoltura predittiva grazie all’intelligenza artificiale",
      excerpt:
        "Analizzando dati meteo, del suolo e delle colture, l’IA è in grado di prevedere malattie, ottimizzare l’irrigazione e suggerire azioni mirate. Meno sprechi, più resa e decisioni più intelligenti.",
      image: "/images/agriculture.jpg",
      date: "Gennaio 2, 2025",
      category: "Agritech, Smart-Farming",
      authorRole: "Team di Growe",
    },
    {
      id: 6,
      title: "🌍 Coltivare in città? Si può, con il vertical farming",
      excerpt:
        "Orti verticali, serre idroponiche e agricoltura indoor stanno rivoluzionando la produzione alimentare urbana. Una risposta concreta alla scarsità di spazio e alla domanda crescente di cibo locale.",
      image: "/images/plant.jpg",
      date: "Dicembre 10, 2024",
      category: "Agritech, Smart-Farming",
      authorRole: "Team di Growe",
    },
  ];

  // Feature post is the first post displayed at the top
  const featuredPost = blogPosts[0];
  // Grid posts are the ones displayed in the 3x2 grid
  const gridPosts = blogPosts.slice(0, 6);

  return (
    <div>
      <Navbar />
      <section className="py-16 text-black px-4 bg-gray-50">
        <div className="container pt-10 mx-auto max-w-6xl">
          {/* Featured Post */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="w-full md:w-1/3">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm h-full">
                <Image
                  src={featuredPost.image}
                  alt="Plant in mint pot"
                  width={400}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="mb-2">
                <span className="text-sm text-gray-600">
                  {featuredPost.category}
                </span>
                <span className="text-sm text-gray-500 mx-2">—</span>
                <span className="text-sm text-gray-600">
                  {featuredPost.date}
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-3">{featuredPost.title}</h2>
              <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/growe.jpeg"
                    alt={"Growe"}
                    width={40}
                    height={40}
                    className="object-cover h-full"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold">
                    {featuredPost.authorRole}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridPosts.slice(1).map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative">
                    <Image
                      src={post.image}
                      alt="Blog post image"
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs text-gray-600">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500 mx-2">—</span>
                      <span className="text-xs text-gray-600">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                      <Image
                        src="/images/growe.jpeg"
                        alt={"Growe"}
                        width={32}
                        height={32}
                        className="object-cover h-full"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">
                        {post.authorRole}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

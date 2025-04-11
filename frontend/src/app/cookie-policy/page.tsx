import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import React from "react";

const CookiePolicy: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-black">
        <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Cosa sono i cookie</h2>
          <p className="mb-4">
            I cookie sono piccoli file di testo che vengono memorizzati sul
            vostro computer o dispositivo mobile quando visitate il nostro sito
            web. Sono ampiamente utilizzati per far funzionare i siti web in
            modo più efficiente e fornire informazioni ai proprietari del sito.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            2. Come utilizziamo i cookie
          </h2>
          <p className="mb-4">
            Growe S.R.L. utilizza i cookie per diversi scopi, tra cui:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              <strong>Cookie necessari:</strong> essenziali per il funzionamento
              del sito web e l'utilizzo delle sue funzionalità
            </li>
            <li className="mb-2">
              <strong>Cookie di preferenza:</strong> ci permettono di ricordare
              le vostre preferenze e personalizzare la vostra esperienza
            </li>
            <li className="mb-2">
              <strong>Cookie statistici:</strong> raccolgono informazioni
              anonime su come gli utenti utilizzano il nostro sito
            </li>
            <li className="mb-2">
              <strong>Cookie di marketing:</strong> utilizzati per mostrare
              pubblicità pertinenti e misurare l'efficacia delle campagne
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            3. Cookie di terze parti
          </h2>
          <p className="mb-4">
            Il nostro sito può utilizzare anche cookie di terze parti, come
            Google Analytics, per analizzare il traffico del sito e comprendere
            come i visitatori interagiscono con i nostri servizi. Questi cookie
            sono soggetti alle politiche sulla privacy delle rispettive terze
            parti.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Gestione dei cookie</h2>
          <p className="mb-4">
            Potete gestire le vostre preferenze sui cookie attraverso le
            impostazioni del vostro browser. La maggior parte dei browser web
            consente di controllare i cookie tramite le impostazioni di
            preferenza. Di seguito trovate le istruzioni per i browser più
            comuni:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              <a href="#" className="text-black hover:underline">
                Chrome
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black hover:underline">
                Firefox
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black hover:underline">
                Safari
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-black hover:underline">
                Edge
              </a>
            </li>
          </ul>
          <p className="mb-4">
            Tenete presente che la disabilitazione di alcuni cookie potrebbe
            influire sulla vostra esperienza di navigazione e limitare alcune
            funzionalità del nostro sito.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            5. Cookie utilizzati sul nostro sito
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">
                    Nome
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">
                    Fornitore
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">
                    Scopo
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">
                    Durata
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">
                    session_id
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">Growe</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    Mantiene la sessione utente
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    Sessione
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">_ga</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    Google Analytics
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    Statistiche di utilizzo
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">2 anni</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">
                    cookie_consent
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">Growe</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    Memorizza le preferenze sui cookie
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">1 anno</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            6. Modifiche alla Cookie Policy
          </h2>
          <p className="mb-4">
            Possiamo aggiornare questa Cookie Policy periodicamente per
            riflettere cambiamenti nelle nostre pratiche o per altri motivi
            operativi, legali o normativi. Vi invitiamo a consultare
            regolarmente questa pagina per eventuali aggiornamenti.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">7. Contattaci</h2>
          <p className="mb-4">
            Per qualsiasi domanda riguardante i cookie e questa Cookie Policy,
            contattaci al seguente indirizzo:
          </p>
          <address className="not-italic">
            <p>GROWE S.R.L.</p>
            <p>Via Carroceto snc, 04011 - Aprilia (LT)</p>
            <p>Email: growesrl@gmail.com</p>
            <p>Tel: +39 1111111111</p>
          </address>
        </section>

        <div className="mt-12 text-sm text-gray-500">
          <p>Ultimo aggiornamento: 6 aprile 2025</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;

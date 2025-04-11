import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-black">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">
            1. Chi siamo
          </h2>
          <p className="mb-4">
            GROWE S.R.L., con sede legale in Via Carroceto snc, 04011 - Aprilia
            (LT), (di seguito "Growe", "noi" o "nostro"), è il titolare del
            trattamento dei dati personali raccolti attraverso questo sito web e
            i nostri servizi.
          </p>
          <p>
            Growe è una startup nata per dare un futuro migliore all'agricoltura
            grazie al suo robot Growe, che permette di coltivare, seminare e
            monitorare ogni tipologia di ortaggio e frutto.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">
            2. Informazioni che raccogliamo
          </h2>
          <p className="mb-4">
            Possiamo raccogliere i seguenti tipi di informazioni:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              Informazioni di contatto (nome, email, numero di telefono,
              indirizzo)
            </li>
            <li className="mb-2">
              Dati di utilizzo dei nostri robot e servizi
            </li>
            <li className="mb-2">
              Informazioni tecniche sul vostro dispositivo e la connessione
              internet
            </li>
            <li className="mb-2">
              Dati analitici relativi all'interazione con i nostri servizi
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">
            3. Come utilizziamo le informazioni
          </h2>
          <p className="mb-4">Utilizziamo le informazioni raccolte per:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              Fornire, mantenere e migliorare i nostri servizi e prodotti
            </li>
            <li className="mb-2">
              Sviluppare nuove funzionalità per i robot Growe
            </li>
            <li className="mb-2">
              Comunicare con voi riguardo ai nostri servizi
            </li>
            <li className="mb-2">
              Rispondere alle vostre richieste di assistenza
            </li>
            <li className="mb-2">
              Elaborare dati aggregati per migliorare le tecniche agricole
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">
            4. Condivisione delle informazioni
          </h2>
          <p className="mb-4">
            Possiamo condividere le vostre informazioni solo nei seguenti casi:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Con il vostro consenso</li>
            <li className="mb-2">
              Con i nostri fornitori di servizi che ci aiutano a fornire i
              nostri servizi
            </li>
            <li className="mb-2">
              Per conformità legale e protezione dei diritti
            </li>
            <li className="mb-2">
              In caso di fusione, acquisizione o vendita degli asset aziendali
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">
            5. I vostri diritti
          </h2>
          <p className="mb-4">
            In conformità con il Regolamento Generale sulla Protezione dei Dati
            (GDPR), avete i seguenti diritti:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              Diritto di accesso ai vostri dati personali
            </li>
            <li className="mb-2">Diritto di rettifica dei dati inesatti</li>
            <li className="mb-2">Diritto alla cancellazione dei dati</li>
            <li className="mb-2">Diritto di limitazione del trattamento</li>
            <li className="mb-2">Diritto alla portabilità dei dati</li>
            <li className="mb-2">Diritto di opposizione al trattamento</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">
            6. Sicurezza dei dati
          </h2>
          <p className="mb-4">
            Adottiamo misure di sicurezza tecniche e organizzative per
            proteggere i vostri dati personali. Tuttavia, nessun sistema è
            completamente sicuro e non possiamo garantire la sicurezza assoluta
            dei vostri dati.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">
            7. Conservazione dei dati
          </h2>
          <p className="mb-4">
            Conserviamo i vostri dati personali solo per il tempo necessario
            agli scopi indicati in questa Privacy Policy o come richiesto dalla
            legge.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">
            8. Modifiche alla Privacy Policy
          </h2>
          <p className="mb-4">
            Possiamo aggiornare questa Privacy Policy periodicamente per
            riflettere cambiamenti nelle nostre pratiche o per altri motivi
            operativi, legali o normativi.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">
            9. Contattaci
          </h2>
          <p className="mb-4">
            Per qualsiasi domanda riguardante questa Privacy Policy o le nostre
            pratiche di trattamento dei dati, contattaci al seguente indirizzo:
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

export default PrivacyPolicy;

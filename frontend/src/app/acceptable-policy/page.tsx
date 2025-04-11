import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import React from "react";

const AcceptableUsePolicy: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-black">
        <h1 className="text-3xl font-bold mb-8">Acceptable Use Policy</h1>

        <section className="mb-8">
          <p className="italic mb-6">
            Questa Acceptable Use Policy (&quot;Policy&quot;) definisce i termini e le
            condizioni per l&apos;utilizzo dei prodotti e servizi forniti da Growe
            S.R.L., una startup nata per dare un futuro migliore all&apos;agricoltura
            grazie al suo robot Growe che permette di coltivare, seminare e
            monitorare ogni tipologia di ortaggio e frutto.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            1. Accettazione dei termini
          </h2>
          <p className="mb-4">
            Utilizzando i nostri prodotti, robot, servizi, sito web o
            applicazioni (&quot;Servizi&quot;), accettate di rispettare questa Policy. Se
            non accettate questi termini, non dovete utilizzare i nostri
            Servizi.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Utilizzo consentito</h2>
          <p className="mb-4">È consentito utilizzare i nostri Servizi per:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              Coltivare, seminare e monitorare ortaggi e frutti come previsto
              dalle specifiche tecniche dei nostri robot
            </li>
            <li className="mb-2">
              Utilizzare il software e l&apos;hardware forniti secondo le istruzioni
              e la documentazione fornita
            </li>
            <li className="mb-2">
              Raccogliere e analizzare i dati generati dall&apos;utilizzo dei nostri
              robot per migliorare le vostre pratiche agricole
            </li>
            <li className="mb-2">
              Interagire con la nostra comunità di agricoltori nel rispetto
              delle norme di comportamento
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Utilizzo vietato</h2>
          <p className="mb-4">È vietato utilizzare i nostri Servizi per:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              Attività illegali o che violano le leggi locali, nazionali o
              internazionali
            </li>
            <li className="mb-2">
              Coltivare piante o sostanze la cui produzione è vietata dalla
              legge
            </li>
            <li className="mb-2">
              Modificare, decompilare, disassemblare o eseguire reverse
              engineering dei nostri robot o software
            </li>
            <li className="mb-2">
              Rimuovere o alterare i marchi, i loghi o le informazioni sui
              diritti d&apos;autore presenti sui nostri prodotti
            </li>
            <li className="mb-2">
              Utilizzare i nostri Servizi in modo da danneggiare, disabilitare,
              sovraccaricare o compromettere i nostri sistemi
            </li>
            <li className="mb-2">
              Raccogliere o estrarre dati dagli altri utenti senza il loro
              consenso esplicito
            </li>
            <li className="mb-2">
              Utilizzare i nostri Servizi per scopi diversi da quelli previsti e
              documentati
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            4. Sicurezza e integrità del sistema
          </h2>
          <p className="mb-4">
            Gli utenti sono responsabili di mantenere la sicurezza dei propri
            account e password. Qualsiasi sospetta violazione della sicurezza
            deve essere segnalata immediatamente a Growe S.R.L.
          </p>
          <p className="mb-4">
            Gli utenti non devono tentare di testare, scansionare o sondare la
            vulnerabilità dei nostri sistemi o aggirare le misure di sicurezza
            implementate.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            5. Utilizzo del software
          </h2>
          <p className="mb-4">
            Il software fornito con i nostri robot è concesso in licenza, non
            venduto. La licenza concede il diritto di utilizzare il software
            esclusivamente in connessione con i nostri robot e servizi, secondo
            i termini specificati nell&apos;accordo di licenza.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            6. Contenuti generati dagli utenti
          </h2>
          <p className="mb-4">
            Se i nostri Servizi consentono di caricare o condividere contenuti,
            gli utenti sono responsabili dei contenuti che pubblicano. I
            contenuti non devono violare i diritti di proprietà intellettuale di
            terzi, essere diffamatori, offensivi o illegali.
          </p>
          <p className="mb-4">
            Ci riserviamo il diritto di rimuovere qualsiasi contenuto che, a
            nostro giudizio, viola questa Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            7. Raccolta e utilizzo dei dati
          </h2>
          <p className="mb-4">
            I nostri robot raccolgono dati sull&apos;ambiente agricolo e sulle
            performance delle colture. Questi dati sono trattati in conformità
            con la nostra Privacy Policy. Gli utenti accettano che possiamo
            utilizzare dati anonimi e aggregati per migliorare i nostri servizi
            e prodotti.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            8. Proprietà intellettuale
          </h2>
          <p className="mb-4">
            Tutti i diritti di proprietà intellettuale relativi ai nostri
            prodotti, servizi, software e contenuti sono di proprietà di Growe
            S.R.L. o dei suoi licenziatari. Nulla in questa Policy trasferisce
            alcun diritto di proprietà intellettuale all&apos;utente.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            9. Violazioni della policy
          </h2>
          <p className="mb-4">
            In caso di violazione di questa Policy, ci riserviamo il diritto di:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Emettere un avvertimento</li>
            <li className="mb-2">
              Sospendere temporaneamente l&apos;accesso ai nostri Servizi
            </li>
            <li className="mb-2">
              Terminare definitivamente l&apos;accesso ai nostri Servizi
            </li>
            <li className="mb-2">Intraprendere azioni legali se necessario</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            10. Modifiche alla policy
          </h2>
          <p className="mb-4">
            Possiamo modificare questa Policy in qualsiasi momento pubblicando
            la versione aggiornata sul nostro sito web. L&apos;uso continuato dei
            nostri Servizi dopo tali modifiche costituisce l&apos;accettazione della
            Policy aggiornata.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">11. Contattaci</h2>
          <p className="mb-4">
            Per qualsiasi domanda riguardante questa Policy, contattaci al
            seguente indirizzo:
          </p>
          <address className="not-italic">
            <p>GROWE S.R.L.</p>
            <p>Via Carroceto snc, 04011 - Aprilia (LT)</p>
            <p>Email: growesrl@gmail.com</p>
            <p>Tel: +39 3886955182</p>
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

export default AcceptableUsePolicy;

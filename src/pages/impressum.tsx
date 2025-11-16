import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Impressum() {
  return (
    <Layout>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

            <div className="space-y-8">
              <section>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Paulenzki</strong></p>
                  <p className="mb-2">Lenz Dambeck</p>
                  <p className="mb-2">Waldschmidtstraße 9</p>
                  <p className="mb-2">93051 Regensburg</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vertreten durch</h2>
                <p className="text-gray-700">
                  Lenz Dambeck
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
                <p className="text-gray-700 mb-2">
                  E-Mail: info@paulenzki.de
                </p>
                <p className="text-gray-700">
                  Instagram: @paulenzki_duo
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftungsausschluss</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Haftung für Inhalte</h3>
                <p className="text-gray-700 mb-4">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Haftung für Links</h3>
                <p className="text-gray-700">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </section>




            </div>
          </div>
        </div>
        <Link to="/" className="text-rose-800 hover:underline mt-8 inline-block">
          &larr; Zurück zur Startseite
        </Link>
      </section>
    </Layout>
  );
}

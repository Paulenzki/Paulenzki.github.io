import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-3xl font-oswald text-rose-800 font-bold mb-8">Datenschutz</h1>
        <p>
          Diese Website erhebt keine personenbezogenen Daten und verwendet keine Cookies oder Tracking-Dienste.
        </p>
      </div>
      <Link to="/" className="text-rose-800 hover:underline mt-8 inline-block">
        &larr; Zurück zur Startseite
      </Link>


    </Layout>
  );
}

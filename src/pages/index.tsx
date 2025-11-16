
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Layout from '../components/Layout';
import References from '../components/References';
import { useEffect } from 'react';
import Contact from '../components/Contact';
import Shows from '../components/Shows';
import Gallery from '../components/Gallery';

export default function Home() {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sectionHash = hash.split("#")[1];
    if (sectionHash) {
      const element = document.getElementById(sectionHash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Remove the sectionHash from the URL without reloading the page
        navigate(window.location.pathname, { replace: true });

      }
    }
  }, [hash, navigate]);

  return (
    <Layout>
      <Hero />
      <Intro />
      <Contact />
      <Shows />
      <Gallery />
      <References />

    </Layout>
  );
}


import { useLocation } from 'react-router-dom';
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

  useEffect(() => {
    const sectionHash = hash.split("#")[1];
    if (sectionHash) {
      const element = document.getElementById(sectionHash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

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

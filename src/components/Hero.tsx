import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video autoPlay muted playsInline loop className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/videos/hero.mp4" type="video/mp4" />
        <source src="/videos/hero.webm" type="video/webm" />
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-gray-500/40 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-eb-garamond uppercase text-white font-bold mb-4">Paulenzki</h1>
        <div className="border-b-8 border-rose-600 w-1/2 mb-4"></div>
        <p className="text-xl md:text-2xl text-white mb-8">Partnerakrobatik</p>
        <div>
          <ul className="inline-flex space-x-6 text-white">
            <li>
              <Link to="#intro" className="text-white hover:underline text-lg md:text-xl">
                Über uns
              </Link>
            </li>
            <li>
              <Link to="#contact" className="text-white hover:underline text-lg md:text-xl">
                Kontakt
              </Link>
            </li>
            <li>
              <Link to="#shows" className="text-white hover:underline text-lg md:text-xl">
                Shows
              </Link>
            </li>
            <li>
              <Link to="#gallery" className="text-white hover:underline text-lg md:text-xl">
                Gallerie
              </Link>
            </li>

            <li>
              <Link to="#references" className="text-white hover:underline text-lg md:text-xl">
                Referenzen
              </Link>
            </li>

          </ul>
        </div>

      </div>

    </div>
  );
}

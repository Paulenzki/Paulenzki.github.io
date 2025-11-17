import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Hero() {
  const { i18n, t } = useTranslation();
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video autoPlay muted playsInline loop className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/videos/hero.mp4" type="video/mp4" />
        <source src="/videos/hero.webm" type="video/webm" />
      </video>
      <div className="relative z-10 h-full bg-gray-500/40 text-center px-4">
        <div className="flex items-start justify-end p-5">
          <button
            type="button"
            disabled={i18n.language === "de"}
            onClick={() => i18n.changeLanguage("de")}
            className="bg-rose-600 text-white px-2 py-1 rounded hover:bg-rose-700 transition disabled:opacity-10"
          >
            DE
          </button>
          <button
            type="button"
            disabled={i18n.language === "en"}
            onClick={() => i18n.changeLanguage("en")}
            className="bg-rose-600 text-white px-2 py-1 rounded hover:bg-rose-700 transition ml-2 disabled:opacity-10"
          >
            EN
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl md:text-7xl font-eb-garamond uppercase text-white font-bold mb-4">{t("hero.title")}</h1>
          <div className="border-b-8 border-rose-600 w-1/2 mb-4"></div>
          <p className="text-xl md:text-2xl text-white mb-8">{t("hero.subtitle")}</p>
          <div>
            <ul className="inline-flex space-x-6 text-white flex-wrap justify-center">
              <li>
                <Link to="#intro" className="text-white hover:underline text-lg md:text-xl">
                  {t("intro.header")}
                </Link>
              </li>
              <li>
                <Link to="#contact" className="text-white hover:underline text-lg md:text-xl">
                  {t("contact.header")}
                </Link>
              </li>
              <li>
                <Link to="#shows" className="text-white hover:underline text-lg md:text-xl">
                  {t("shows.header")}
                </Link>
              </li>
              <li>
                <Link to="#gallery" className="text-white hover:underline text-lg md:text-xl">
                  {t("gallery.header")}
                </Link>
              </li>

              <li>
                <Link to="#references" className="text-white hover:underline text-lg md:text-xl">
                  {t("references.header")}
                </Link>
              </li>

            </ul>
          </div>
        </div>

      </div>

    </div>
  );
}

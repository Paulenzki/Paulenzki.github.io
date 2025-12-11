import { useTranslation } from "react-i18next";


export default function References() {
  const { t } = useTranslation();
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t pt-12" />
        <h1 id="references" className="text-5xl font-oswald text-rose-800 font-bold mb-8">{t("references.header")}</h1>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <a
              href="https://www.efbiotechnology.org/RPP"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-600 mr-2 hover:underline"> RPP 12 - Dinnershow
            </a>
            Ulm 2025
          </li>
          <li>
            <a
              href="https://www.flux-munich.com"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-600 mr-2 hover:underline"> Flux
            </a>
            München 2025
          </li>
          <li>
            <a
              href="https://www.reitimwinkl.de/reit-im-winkl-strassenfest"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-600 mr-2 hover:underline"> Straßenfest Reit im Winkl
            </a>
            2023
          </li>
          <li>
            <a
              href="https://circus-sambesi.de/home"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-600 mr-2 hover:underline"> Circus Sambesi
            </a>
            2025
          </li>
          <li>
            <a
              href="https://www.instagram.com/ursport.regensburg/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-600 mr-2 hover:underline"> Sportgala
            </a>
            Regensburg 2025
          </li>

          <li>
            <a
              href="https://kulturhandwerk.org/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-600 mr-2 hover:underline"> Kultur und Handwerksmarkt
            </a>
            2025
          </li>
          <li>
            <a
              href="https://festival-mediaval.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-600 mr-2 hover:underline"> Festival Mediaval
            </a>
            2023
          </li>
        </ul>
      </div>
    </div>
  );
}

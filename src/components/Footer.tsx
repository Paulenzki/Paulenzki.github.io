import { Instagram, Mail, Youtube } from "react-feather";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[url('/images/Footer.jpg')] bg-cover  bg-top  text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex h-[400px] justify-center">
          <div className="pb-5 pt-20 rounded-lg">
            <div>
              <a href="https://www.instagram.com/paulenzki_duo/"
                target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-gray-300 inline-flex items-center">
                <Instagram className="mr-2" size={32} />
                @paulenzki_duo
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/@paulenzki"
                target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-gray-300 inline-flex items-center mt-4">
                <Youtube className="mr-2" size={32} />
                @paulenzki
              </a>
            </div>
            <div>
              <a href="mailto:info@paulenzki.de"
                className="text-white hover:text-gray-300 inline-block mt-4">
                <Mail className="mr-2 inline" size={24} />
                info@paulenzki.de
              </a>
            </div>


            <div className="mt-8">
              <Link to="/impressum" className="text-white hover:text-gray-300 hover:underline block mb-2">
                {t("footer.contact")}
              </Link>
              <Link to="/privacy" className="text-white hover:text-gray-300 hover:underline block mb-2">
                {t("footer.privacy")}
              </Link>
              <p className="text-gray-100 text-sm mt-4">
                © 2025 Paulenzki
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

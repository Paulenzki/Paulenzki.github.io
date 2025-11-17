import { useTranslation } from "react-i18next";

export default function Intro() {
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl py-10 mx-auto px-4 sm:px-6 lg:px-8">
      <h1 id="intro" className="text-5xl font-oswald text-rose-800 font-bold mb-8">{t("intro.header")}</h1>
      <div className="flex items-center flex-wrap">
        <div className="lg:w-3/5 w-full">
          <p className="mb-4">
            {t("intro.text.0")}
          </p>
          <p className="mb-4">
            {t("intro.text.1")}
          </p>
          <p className="mb-4">
            {t("intro.text.2")}
          </p>
          <p className="mb-4">
            {t("intro.text.3")}
          </p>
        </div>
        <div className="lg:w-2/5 shrink-0 w-full">
          <img
            src="/images/Intro.jpg"
            alt="Paula und Lenz"
            className="rounded-lg shadow-lg w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
}

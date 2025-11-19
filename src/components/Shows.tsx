import { useTranslation } from "react-i18next";

export default function Shows() {

  const { t } = useTranslation();



  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t pt-12" />
        <h1 id="shows" className="text-5xl font-oswald text-rose-800 font-bold mb-8">{t("shows.header")}</h1>
        <h2 className="text-3xl text-slate-600 font-semibold mt-14 mb-4">{t("shows.show.0.title")}</h2>

        <div className="relative w-full pb-[56.25%]" >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/ZMLKMnlKNlo?si=1EddyOxVCrHGNZR0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen />
        </div>
        <div className="text-lg pt-8">
          {(t("shows.show.0.description", { returnObjects: true, defaultValue: [] }) as string[])
            .map((line: string, i: number) => (
              <p key={i} className="mb-4">{line}</p>
            ))
          }
        </div>
        <h2 className="text-3xl text-slate-600 font-semibold mt-14 mb-4 ">{t("shows.show.1.title")}</h2>

        <div className="relative w-full pb-[56.25%]" >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/bxjc9KebWuM?si=qfprod5Z-6Il_iIS"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen />
        </div>
        <div className="text-lg pt-8">
          {(t("shows.show.1.description", { returnObjects: true, defaultValue: [] }) as string[])
            .map((line: string, i: number) => (
              <p key={i} className="mb-4">{line}</p>
            ))
          }
        </div>
      </div>
    </div >
  );
}

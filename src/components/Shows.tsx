import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Shows() {

  const { t } = useTranslation();
  const [showVideos, setShowVideos] = useState(false);



  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t pt-12" />
        <h1 id="shows" className="text-5xl font-oswald text-rose-800 font-bold mb-8">{t("shows.header")}</h1>
        <h2 className="text-3xl text-slate-600 font-semibold mt-14 mb-4">{t("shows.show.0.title")}</h2>
        {!showVideos && (
          <div className="flex flex-col justify-center">
            <button
              type="button"
              className="px-2 py-1 bg-rose-600 text-white text-sm font-semibold rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              onClick={() => setShowVideos(true)}>
              Externe Inhalte von YouTube laden
            </button>
            <p className="text-xs text-center text-gray-500 mb-4">
              Aus Datenschutzgründen werden externe Inhalte von YouTube erst nach ausdrücklicher Zustimmung geladen.
            </p>
          </div>
        )}

        {showVideos && (
          <div className="relative w-full pb-[56.25%]" >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/ZMLKMnlKNlo?si=1EddyOxVCrHGNZR0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen />
          </div>
        )}
        <div className="text-lg pt-8">
          {(t("shows.show.0.description", { returnObjects: true, defaultValue: [] }) as string[])
            .map((line: string, i: number) => (
              <p key={i} className="mb-4">{line}</p>
            ))
          }
        </div>
        <h2 className="text-3xl text-slate-600 font-semibold mt-14 mb-4 ">{t("shows.show.1.title")}</h2>
        {!showVideos && (
          <div className="flex flex-col justify-center">
            <button
              type="button"
              className="px-2 py-1 bg-rose-600 text-white text-sm font-semibold rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              onClick={() => setShowVideos(true)}>
              Externe Inhalte von YouTube laden
            </button>
            <p className="text-xs text-center text-gray-500 mb-4">
              Aus Datenschutzgründen werden externe Inhalte von YouTube erst nach ausdrücklicher Zustimmung geladen.
            </p>
          </div>
        )}

        {showVideos && (
          <div className="relative w-full pb-[56.25%]" >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/bxjc9KebWuM?si=qfprod5Z-6Il_iIS"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen />
          </div>
        )}
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

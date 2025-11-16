import { useState } from "react";

export default function Shows() {

  const [showVideos, setShowVideos] = useState(false);



  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 id="shows" className="text-5xl font-oswald text-rose-800 font-bold mb-8">Shows</h1>
        <h2 className="text-3xl text-slate-600 font-semibold mb-4">Morgen ohne Sorgen</h2>
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
        <p className="text-lg pt-5">
          „Morgen ohne Sorgen“ – ein akrobatisches Morgenchaos.
          <br /><br />
          Der Wecker klingelt, die Augen sind schwer, und der Tag beginnt… doch nicht ganz so, wie man denkt.
          <br /><br />
          In „Morgen ohne Sorgen“ verwandelt sich der ganz normale Start in den Tag in eine mitreißende Akrobatikshow: Zwei verschlafene Körper erwachen, kämpfen sich aus dem Bett, ziehen sich halb im Handstand um – und zeigen dabei, dass man auch kopfüber in den Tag starten kann.
          <br /><br />
          Denn mal ehrlich: Wer braucht schon Kaffee, wenn man Akrobatik machen kann?
          <br /><br />
          Dauer: ~25 Minuten
        </p>
        <h2 className="text-3xl text-slate-600 font-semibold mb-4">All In</h2>
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
        <p className="text-lg pt-5">
          "All in" erzählt von dem Moment, in dem man loslässt – und dem Mut, sich fangen zu lassen.
          <br /><br />
          Zwei Menschen gehen aufs Ganze, stürzen, kippen, schweben. Und jedes Mal, wenn die Schwerkraft gewinnt, ist da eine Hand, die hält.
          <br /><br />
          In beeindruckenden Hebefiguren, riskanten Flügen und stillen Berührungen entsteht ein akrobatischer Dialog über Nähe, Scheitern und den Willen, immer wieder aufzustehen.
          <br /><br />
          Denn alles zu geben heißt auch, sich blind zu vertrauen.
          <br /><br />
          Dauer: ~8 Minuten
        </p>


      </div>
    </div >
  );
}

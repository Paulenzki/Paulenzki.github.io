
export default function Intro() {
  return (
    <div className="max-w-4xl py-10 mx-auto px-4 sm:px-6 lg:px-8">
      <h1 id="intro" className="text-5xl font-oswald text-rose-800 font-bold mb-8">Über uns</h1>
      <div className="flex items-center flex-wrap">
        <div className="lg:w-3/5 w-full">
          <p className="mb-4">
            Wir sind Paula und Lenz aus Regensburg – zwei Akrobatikabenteurer, die so lange über diverse Bühnen und durch die Akrobatikwelt geirrt, geflogen und gelegentlich elegant gestrauchelt sind, bis wir 2024 aufeinander gestolpert sind… und beschlossen haben, gemeinsam weiterzufliegen.
          </p>
          <p className="mb-4">
            Unsere gemeinsame Sprache ist Partnerakrobatik: Figuren, die aussehen, als hätten wir uns mit der Schwerkraft auf einen sehr kreativen Kompromiss geeinigt. Dazu ein Hauch Breakdance, etwas Handstandwahnsinn und viel Freude am gemeinsamen Hoch-, Runter- und Durcheinander.
          </p>
          <p className="mb-4">
            Wir glauben an Kunst, die im Moment entsteht – wenn Vertrauen, Timing und eine Prise „Ach, probieren wir’s einfach!“ sich zusammentun.
          </p>
          <p className="mb-4">
            Zwei Körper, ein gemeinsames Gleichgewicht – und die unerschütterliche Überzeugung, dass die Welt ein bisschen schöner wird, wenn jemand kurz in der Luft hängt.
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

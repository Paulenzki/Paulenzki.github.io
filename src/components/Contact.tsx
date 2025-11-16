import { Instagram, Mail, Youtube } from "react-feather";

export default function Contact() {
  return (
    <div className=" bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 id="contact" className="text-5xl font-oswald text-rose-800 font-bold mb-8">Kontakt</h1>
        <div className="flex flex-row flex-wrap justify-evenly items-start">
          <div>
            <p className="text-center text-sm font-semibold">
              Instagram
            </p>
            <a href="https://www.instagram.com/paulenzki_duo/"
              target="_blank" rel="noopener noreferrer"
              className="hover:text-gray-600 inline-flex items-center">
              <Instagram className="mr-2" size={32} />
              @paulenzki_duo
            </a>
          </div>
          <div>
            <p className="text-center text-sm font-semibold">
              YouTube
            </p>
            <a href="https://www.youtube.com/@paulenzki"
              target="_blank" rel="noopener noreferrer"
              className="hover:text-gray-600 inline-flex items-center">
              <Youtube className="mr-2" size={32} />
              @paulenzki
            </a>
          </div>
          <div>
            <p className="text-center text-sm font-semibold">
              E-Mail
            </p>
            <a href="mailto:info@paulenzki.de"
              className="hover:text-gray-600 inline-block">
              <Mail className="mr-2 inline" size={24} />
              info@paulenzki.de
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

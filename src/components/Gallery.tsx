
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "images/Flux2.jpg",
    "images/Selb2.jpg",
    "images/Selb3.jpg",
    "images/Flux3.jpg",
    "images/Flux1.jpg",
    "images/Selb1.jpg",
    "images/Shooting1.jpg",
    "images/Shooting3.jpg",
    "images/Shootin2.jpg",
    "images/Sport1.jpg",
    "images/Sport3.jpg",
    "images/Sport2.jpg",
  ];



  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 id="gallery" className="text-5xl font-oswald text-rose-800 font-bold mb-8">{t("gallery.header")}</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="max-w-6xl mx-auto mb-16"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="rounded-lg shadow-lg object-cover h-64 w-full"
              onClick={() => setSelectedImage(src)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/60  z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-h-[95vh] max-w-[95vw] lg:max-w-[80vh] lg:max-h-[80vh] object-contain rounded-lg"
            alt=""
          />
        </div>
      )}
    </div>
  );
}

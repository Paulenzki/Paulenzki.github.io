
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function Gallery() {

  const images = [
    "images/Flux2.png",
    "images/Selb2.png",
    "images/Selb3.jpg",
    "images/Flux3.jpg",
    "images/Flux1.png",
    "images/Selb1.png",
    "images/Shooting1.jpg",
    "images/Shooting3.jpg",
    "images/Shootin2.jpg",
    "images/Intro.jpg",
    "images/Sport1.jpg",
    "images/Sport3.jpg",
    "images/Sport2.jpg",
  ];



  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 id="gallery" className="text-5xl font-oswald text-rose-800 font-bold mb-8">Gallerie</h1>
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
            <img src={src} alt={`Gallery Image ${index + 1}`} className="rounded-lg shadow-lg object-cover h-64 w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

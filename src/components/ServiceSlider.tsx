import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Parallax,
  EffectCoverflow,
  Mousewheel,
} from "swiper/modules";

const slides = [
  {
    img: "/src/assets/images/ser1.webp",
    title: "Title One",
    subtitle: "Subtitle One",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: "/src/assets/images/ser2.webp",
    title: "Title Two",
    subtitle: "Subtitle Two",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: "/src/assets/images/ser3.webp",
    title: "Title Three",
    subtitle: "Subtitle Three",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: "/src/assets/images/ser4.webp",
    title: "Title Four",
    subtitle: "Subtitle Four",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: "/src/assets/images/ser5.webp",
    title: "Title Five",
    subtitle: "Subtitle Five",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: "/src/assets/images/ser6.webp",
    title: "Title Six",
    subtitle: "Subtitle Six",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const ServiceSlider: React.FC = () => {
  return (
    <section className="fish-swiper-section">
      <Swiper
        modules={[Autoplay, Parallax, EffectCoverflow, Mousewheel]}
        effect="coverflow"
        parallax={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        spaceBetween={50}
        speed={1200}
        mousewheel={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0, 
          depth: 250,
          scale: 0.95,
          slideShadows: false,
          modifier: 1.5,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="fish-swiper"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="cardPopout">
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
              <h4>{item.subtitle}</h4>
              <figcaption>
                <p>{item.text}</p>
              </figcaption>
              <a href="#">Continue Reading →</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServiceSlider;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


const logos = [
  { src: "/src/assets/images/sp1.svg", alt: "AMD" },
  { src: "/src/assets/images/sp2.svg", alt: "Nichia" },
  { src: "/src/assets/images/sp3.svg", alt: "Logitech" },
  { src: "/src/assets/images/sp4.svg", alt: "AMG" },
  { src: "/src/assets/images/sp5.svg", alt: "Cutco" },
  { src: "/src/assets/images/sp6.svg", alt: "Liugong" },
  { src: "/src/assets/images/sp7.svg", alt: "Logitech" },
  { src: "/src/assets/images/sp8.svg", alt: "AMG" },
  { src: "/src/assets/images/sp9.svg", alt: "Cutco" },
  { src: "/src/assets/images/sp10.svg", alt: "Liugong" },
];

const Logos = () => {
  return (
    <section className="trusted-section">
      <div className="trusted-title">
        <span className="line" />
        <p>Trusted by 3450+ happy customers from the whole world</p>
        <span className="line" />
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={6}
        spaceBetween={50}
        className="logos-container"
      >
        {logos.map((logo, i) => (
          <SwiperSlide key={i} className="brand-logo">
            <img src={logo.src} alt={logo.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Logos;

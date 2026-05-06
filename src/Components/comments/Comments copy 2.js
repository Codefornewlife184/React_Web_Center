/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Comments = () => {
    const swiperOptions = {
        modules: [Navigation, Autoplay],
        loop: true,
        spaceBetween: 30,
        navigation: true,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
        },
        speed: 500,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            }
        }
    };

  const testimonials = [
    {
      title: <>YENİDÜNYA<br />ENDÜSTRİYEL</>,
      text: "Hazırlanıyor",
      image: "assets/images/yorum/1.webp"
    },
    {
      title: <>SETA<br />LİFTİNG</>,
      text: "Hazırlanıyor",
      image: "assets/images/yorum/2.webp"
    },
    {
      title: <>BKB<br />AMBALAJ</>,
      text: "Hazırlanıyor",
      image: "assets/images/yorum/3.webp"
    },
    {
      title: <>İNDİZAYN<br />MATBAA</>,
      text: "Hazırlanıyor",
      image: "assets/images/yorum/4.webp"
    },
    {
      title: <>EMEL<br />BEAUTY</>,
      text: "Hazırlanıyor",
      image: "assets/images/yorum/6.webp"
    },
    {
      title: <>ŞEKİR<br />YAPI</>,
      text: "Hazırlanıyor",
      image: "assets/images/yorum/7.webp"
    },
    {
      title: <>ESMİ<br />WATER</>,
      text: "Hazırlanıyor",
      image: "assets/images/yorum/8.webp"
    },
    {
      title: <>PRUSA<br />TEKSTİL</>,
      text: "Hazırlanıyor",
      image: "assets/images/yorum/9.webp"
    },
    {
      title: <>KARDOĞAN<br />GROUP</>,
      text: "Hazırlanıyor",
      image: "assets/images/yorum/10.webp"
    },
    {
      title: <>DOĞU BATI<br />PROJE</>,
      text: "Hazırlanıyor",
      image: "assets/images/yorum/11.webp"
    },
    {
      title: <>MOCA<br />MERMER</>,
      text: "Hazırlanıyor",
      image: "assets/images/yorum/12.webp"
    },
    {
      title: <>EVER<br />PLASTICS</>,
      text: "Hazırlanıyor",
      image: "assets/images/yorum/5.webp"
    },
    {
      title: <>AYPİN<br />AUTOMAT</>,
      text: "Hazırlanıyor",
      image: "assets/images/yorum/13.webp"
    },
    {
      title: <>BADEMLİ<br />ANAOKULU</>,
      text: "Hazırlanıyor",
      image: "assets/images/yorum/14.webp"
    },
    {
      title: <>BKB<br />SOLAR</>,
      text: "Hazırlanıyor",
      image: "assets/images/yorum/15.webp"
    }
  ];

  return (
    <section className="service-twelev mt-0">
      <div 
        className="service-twelev__bg jarallax" 
        data-jarallax="" 
        data-speed="0.3" 
        data-imgposition="50% -100%"
        style={{backgroundImage: "url(assets/images/update-15-08-2024/background/service-12-bg.jpg)"}}
      />
      <div className="container">
        <div className="sec-title-twelev text-center">
          <div className="sec-title-twelev__tagline">
            <span className="sec-title-twelev__tagline__bar"></span>
            Yorumlar
          </div>
          <h2 className="sec-title-twelev__title">
            HİZMET SUNDUĞUMUZ <br />FİRMALARIN YORUMLARI
          </h2>
        </div>
        
        <Swiper className="service-twelev__carousel" {...swiperOptions}>
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="service-twelev__item">
              <h3 className="service-twelev__item__title">
                <a href="#">{item.title}</a>
              </h3>
              <p className="service-twelev__item__text">{item.text}</p>
              <div className="service-twelev__item__number">
                <div className="testi-block">
                  <div className="inner">
                    <div className="testimonial-twelev__item__quote">
                      <img src="assets/images/shapes/quote.webp" alt="Web Center" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-twelev__item__image">
                <img src={item.image} alt="Web Center" loading="lazy" />
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Comments;

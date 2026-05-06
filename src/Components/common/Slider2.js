/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
// SliderComponent.js
import React, { Suspense } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useTranslation } from "react-i18next";

const Slider2 = () => {
  const { t, i18n } = useTranslation();

  const options = {
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ]
  };

  // Her render'da çevirileri yeniden hesapla
  const getTranslation = (key) => {
    return t(key);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="slider-twelev" key={i18n.language}>
        <OwlCarousel 
          className="banner-carousel owl-theme" 
          {...options}
          key={`carousel-${i18n.language}`}
        >
          <div className="item">
            <div className="slider-twelev__item">
              <div className="slider-twelev__bg">
                <img 
                  src="assets/images/background/slider-1-1.webp" 
                  srcSet="
                    assets/images/background/slider-1-1-mobile.webp 768w,
                    assets/images/background/slider-1-1-tablet.webp 1024w,
                    assets/images/background/slider-1-1.webp 1920w
                  "
                  sizes="100vw"
                  alt="Slider Image"
                  loading="eager"
                  fetchPriority="high"
                  width="1920" 
                  height="1080"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="container">
                <div className="slider-twelev__content">
                  <h3 className="slider-twelev__title">
                    <div className="title-word">{getTranslation("İŞLETMENİZİ")}</div>
                    <div className="title-word">{getTranslation("DİJİTAL OLARAK")}</div>
                    <div className="title-word">{getTranslation("BÜYÜTMEK")}</div>
                    <div className="title-word">{getTranslation("İSTİYORSANIZ")}</div>
                  </h3>
                  <div className="slider-twelev__btn">
                    <a href="https://wa.me/905456136819" className="thm-btn-twelev">{getTranslation("HIZLI TEKLİF ALIN!")}</a>
                  </div>
                </div>
              </div>
              <div className="slider-twelev__layer">
                <div className="slider-twelev__layer__bg"
                  style={{ backgroundImage: 'url(assets/images/shapes/layer-bg.webp)' }}></div>
                <img src="assets/images/resources/layer-1.webp" alt="Web Center" />
                <div className="slider-twelev__shape-one">
                  <img src="assets/images/shapes/slider-1-shape-1.webp" alt="Web Center" loading="lazy" />
                </div>
                <div className="slider-twelev__shape-two">
                  <img src="assets/images/shapes/slider-1-shape-2.webp" alt="Web Center" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-twelev__item">
              <div className="slider-twelev__bg"
                style={{ backgroundImage: 'url(/assets/images/background/slider-1-2.webp)' }}></div>
              <div className="container">
                <div className="slider-twelev__content">
                  <h3 className="slider-twelev__title">
                    <div className="title-word">{getTranslation("İŞLETMENİZİ")}</div>
                    <div className="title-word">{getTranslation("DİJİTAL OLARAK")}</div>
                    <div className="title-word">{getTranslation("BÜYÜTMEK")}</div>
                    <div className="title-word">{getTranslation("İSTİYORSANIZ")}</div>
                  </h3>
                  <div className="slider-twelev__btn">
                    <a href="https://wa.me/905456136819" className="thm-btn-twelev">{getTranslation("HIZLI TEKLİF ALIN!")}</a>
                  </div>
                </div>
              </div>
              <div className="slider-twelev__layer">
                <div className="slider-twelev__layer__bg"
                  style={{ backgroundImage: 'url(/assets/images/shapes/layer-bg.webp)' }}></div>
                <img src="assets/images/resources/layer-1.webp" alt="Web Center" />
                <div className="slider-twelev__shape-one">
                  <img src="assets/images/shapes/slider-1-shape-1.webp" alt="Web Center" loading="lazy" />
                </div>
                <div className="slider-twelev__shape-two">
                  <img src="assets/images/shapes/slider-1-shape-2.webp" alt="Web Center" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>
    </Suspense>
  );
};

export default Slider2;

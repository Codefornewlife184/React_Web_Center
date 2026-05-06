/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Comments.css';
import { useTranslation } from 'react-i18next';

const Comments = () => {
    const { t } = useTranslation();

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
            title: t("YENİDÜNYA ENDÜSTRİYEL"),
            text: t("Hazırlanıyor"),
            image: "assets/images/yorum/1.webp"
        },
        {
            title: t("SETA LİFTİNG"),
            text: t("Hazırlanıyor"),
            image: "assets/images/yorum/2.webp"
        },
        {
            title: t("BKB AMBALAJ"),
            text: t("Hazırlanıyor"),
            image: "assets/images/yorum/3.webp"
        },
        {
            title: t("İNDİZAYN MATBAA"),
            text: t("Hazırlanıyor"),
            image: "assets/images/yorum/4.webp"
        },
        {
            title: t("EMEL BEAUTY"),
            text: t("Hazırlanıyor"),
            image: "assets/images/yorum/6.webp"
        },
        {
            title: t("ŞEKİR YAPI"),
            text: t("Hazırlanıyor"),
            image: "assets/images/yorum/7.webp"
        },
        {
            title: t("ESMİ WATER"),
            text: t("Hazırlanıyor"),
            image: "assets/images/yorum/8.webp"
        },
        {
            title: t("PRUSA TEKSTİL"),
            text: t("Hazırlanıyor"),
            image: "assets/images/yorum/9.webp"
        },
        {
            title: t("KARDOĞAN GROUP"),
            text: t("Hazırlanıyor"),
            image: "assets/images/yorum/10.webp"
        },
        {
            title: t("DOĞU BATI PROJE"),
            text: t("Hazırlanıyor"),
            image: "assets/images/yorum/11.webp"
        },
        {
            title: t("MOCA MERMER"),
            text: t("Hazırlanıyor"),
            image: "assets/images/yorum/12.webp"
        },
        {
            title: t("EVER PLASTICS"),
            text: t("Hazırlanıyor"),
            image: "assets/images/yorum/5.webp"
        },
        {
            title: t("AYPİN AUTOMAT"),
            text: t("Hazırlanıyor"),
            image: "assets/images/yorum/13.webp"
        },
        {
            title: t("BADEMLİ ANAOKULU"),
            text: t("Hazırlanıyor"),
            image: "assets/images/yorum/14.webp"
        },
        {
            title: t("TUĞÇELİK METAL"),
            text: t("Hazırlanıyor"),
            image: "assets/images/yorum/16.webp"
        },
        {
            title: t("BURSA BAKIR"),
            text: t("Hazırlanıyor"),
            image: "assets/images/yorum/17.webp"
        },
        {
            title: t("FASULYELİ LOKANTASI"),
            text: t("Hazırlanıyor"),
            image: "assets/images/yorum/18.webp"
        },
        {
            title: t("BKB SOLAR"),
            text: t("Hazırlanıyor"),
            image: "assets/images/yorum/15.webp"
        }
    ];

    return (
        <Suspense fallback={<div>Loading...</div>}>
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
                            {t("Yorumlar")}
                        </div>
                        <h2 className="sec-title-twelev__title">
                            {t("HİZMET SUNDUĞUMUZ FİRMALARIN YORUMLARI")}
                        </h2>
                    </div>
                    
                    <Swiper className="service-twelev__carousel" {...swiperOptions}>
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="service-twelev__item">
                                <h3 className="service-twelev__item__title">
                                    <a href="#"><span dangerouslySetInnerHTML={{ __html: item.title }} /></a>
                                </h3>
                                <p className="service-twelev__item__text">{item.text}</p>
                                <div className="service-twelev__item__number">
                                    <div className="testi-block">
                                        <div className="inner">
                                            <div className="testimonial-twelev__item__quote">
                                                <img src="assets/images/shapes/quote.webp" alt={t("Web Center")} loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-twelev__item__image">
                                    <img src={item.image} alt={t("Web Center")} loading="lazy" />
                                </div>
                            </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </Suspense>
    );
};

export default Comments;
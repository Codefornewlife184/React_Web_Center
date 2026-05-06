/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { t } from "i18next";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handlePrev = () => {
    handleSelect(activeIndex === 0 ? 5 : activeIndex - 1);
  };

  const handleNext = () => {
    handleSelect(activeIndex === 5 ? 0 : activeIndex + 1);
  };

  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  return (
    <>
      <Swiper
          className="margin-top-30 margin-bottom-30"
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          pagination={false}
        >
          <SwiperSlide>
            <div className="album-list-item">
              <Link
                className="ali-link"
                onClick={handleClick}
                as={Link}
                to="/Armur"
              >
                <div className="ali-img-wrap">
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/1.png"
                      alt="image"
                      title="image"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="">
              <Link
                className="ali-link"
                onClick={handleClick}
                as={Link}
                to="/Fonluk"
              >
                <div className="ali-img-wrap">
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/2.png"
                      alt="image"
                      title="image"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="album-list-item">
              <Link
                className="ali-link"
                onClick={handleClick}
                as={Link}
                to="/Brode"
              >
                <div className="ali-img-wrap">
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/3.png"
                      alt="image"
                      title="image"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
    </>
  );
}

export default ProductCarousel;

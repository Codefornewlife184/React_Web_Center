/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import ProductOne from "./ProductOne";
import data from "../../data/product.json";
import { Link } from "react-router-dom";

function Product() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  return (
    <>
      <section class="product-one section-space-two" id="shop">
          <div class="container">
            <div class="sec-title sec-title--center">
              <img
                src="assets/images/favicons/favicon-32x32.png"
                alt="featured products"
                class="sec-title__img"
              />
              <h6 class="sec-title__tagline">FAALİYETLERİMİZ</h6>
              <h2 class="sec-title__title">FAALİYETLERİMİZ</h2>
            </div>
            <div class="row gutter-y-30">
              {data.map((product, index) => (
                <div
                  key={index}
                  class="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay={`${index * 200}ms`}
                >
                  <div class="product__item">
                    <div class="product__item__image">
                      <img src={product.picture} alt={product.title} />
                    </div>
                    <div class="product__item__content">
                      <div class="boskery-ratings">
                          <span key={index} class="icon-star"></span>
                          <span key={index} class="icon-star"></span>
                          <span key={index} class="icon-star"></span>
                          <span key={index} class="icon-star"></span>
                          <span key={index} class="icon-star"></span>
                      </div>
                      <h4 class="product__item__title">
                        <Link as={Link} to={product.nav} onClick={scrollToTop}>{product.title}</Link>
                      </h4>
                      <div class="product__item__price"></div>
                      <Link as={Link} to={product.nav} class="boskery-btn product__item__link" onClick={scrollToTop}>
                        <span class="boskery-btn__hover"></span>
                        <span class="boskery-btn__hover"></span>
                        <span class="boskery-btn__hover"></span>
                        <span class="boskery-btn__hover"></span>
                        <span class="boskery-btn__hover"></span>
                        <span class="boskery-btn__hover"></span>
                        <span class="boskery-btn__text">{product.price}</span>
                        <i class="icon-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  );
}

export default Product;

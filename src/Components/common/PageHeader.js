/* eslint-disable no-unused-vars */
import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PageHeader = ({ 
  title, 
  breadcrumbItems = [], 
  backgroundImage = "assets/images/banner/12.webp" 
}) => {
  const { t } = useTranslation();
  const location = useLocation();

  // Sayfa yollarına göre başlık ve path eşleştirmesi
  const pageInfo = {
    "/about": { text: t("Hakkımızda"), path: "/about" },
    "/services": { text: t("HİZMETLERİMİZ"), path: "/services" },
    "/contact": { text: t("İLETİŞİM"), path: "/contact" },
    "/blog": { text: t("BLOG"), path: "/blog" },
    "/portfolio": { text: t("PORTFÖY"), path: "/portfolio" },
    "/pricing": { text: t("FİYATLAR"), path: "/pricing" },
    "/team": { text: t("Ekibimiz"), path: "/team" },
    "/faq": { text: t("SSS"), path: "/faq" },
  };

  // Mevcut sayfanın bilgilerini al
  const currentPage = pageInfo[location.pathname] || { text: title, path: location.pathname };

  return (
    <>
      <section className="page-header mt--120">
        <div
          className="contact-info__business-hours__bg"
          style={{
            backgroundImage: "url(assets/images/shapes/contact-bg-1-2.png)",
          }}
        ></div>
        <section className="page-banner mb-5">
          <div 
            className="image-layer" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div className="shape-2"></div>
          <div className="banner-inner">
            <div className="auto-container">
              <div className="inner-container clearfix">
                <h1>{t(title)}</h1>
                <div className="page-nav">
                  <ul className="bread-crumb clearfix">
                    <li><Link to="/">{t("Anasayfa")}</Link></li>
                    <li><Link to={currentPage.path}>{currentPage.text}</Link></li>
                    {breadcrumbItems.map((item, index) => (
                      <li key={index} className={index === breadcrumbItems.length - 1 ? 'active' : ''}>
                        {item.link ? (
                          <Link to={item.link}>{t(item.text)}</Link>
                        ) : (
                          t(item.text)
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default PageHeader;

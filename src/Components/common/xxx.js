/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className="side-menu__block">
        <div className="side-menu__block-overlay custom-cursor__overlay">
          <div className="cursor"></div>
          <div className="cursor-follower"></div>
        </div>
        <div className="side-menu__block-inner">
          <div className="side-menu__top justify-content-between">
            <Link to="/">
              <img src="/images/logo-mobile.webp" width="135" alt="Web Center" loading="lazy" />
            </Link>
            <button className="side-menu__toggler side-menu__close-btn" onClick={toggleMenu}>
              <img src="/images/icons/close-1-1.webp" alt="Close" loading="lazy" />
            </button>
          </div>

          <nav className="mobile-nav__container">
            {/* Mobile navigation content will be loaded via JS */}
          </nav>
          <div className="side-menu__sep"></div>
          <div className="side-menu__content">
            <p>
              <a href="mailto:info@webcenter.com.tr">info@webcenter.com.tr</a>
              <br />
              <a href="tel:905456136819">0545 613 6819</a>
            </p>
            <div className="side-menu__social">
              <a href="https://www.facebook.com/profile.php?id=61569515864445" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/webcenter.office/" target="_blank" rel="noopener noreferrer">
                <span className="fab fa-instagram"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className="main-header header-style-twelev">
        <div className="topbar-twelev">
          <div className="container">
            <div className="topbar-twelev__wrapper">
              <ul className="topbar-twelev__info">
                <li>
                  <span className="linoor-icon-three-email-1 justify-content-center"></span>
                  <a href="mailto:info@webcenter.com.tr">info@webcenter.com.tr</a>
                </li>
              </ul>
              <ul className="list-unstyled topbar-twelev__social">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61569515864445" target="_blank" rel="noopener noreferrer">
                    <span className="fab fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/webcenter.office/" target="_blank" rel="noopener noreferrer">
                    <span className="fab fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-style-twelev__main">
          <div className="logo-box">
            <div className="logo">
              <Link to="/">
                <img src="/assets/images/logo.webp" width="135" alt="Web Center" loading="lazy" />
              </Link>
            </div>
          </div>
          <div className="nav-outer clearfix">
            <div className="mobile-nav-toggler" onClick={toggleMenu}>
              <span className="icon flaticon-menu-2"></span>
              <span className="txt">Menu</span>
            </div>
            <nav className="main-menu navbar-expand-md navbar-light ms-auto">
              <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''} clearfix`} id="navbarSupportedContent">
                <ul className="navigation clearfix">
                  <li><Link to="/">Anasayfa</Link></li>
                  <li><Link to="/about">Hakkımızda</Link></li>
                  <li className="dropdown">
                    <Link to="/services">HİZMETLERİMİZ
                      <div className="dropdown-btn">
                        <span className="fa fa-angle-right"></span>
                      </div>
                    </Link>
                    <ul>
                      <li><Link to="/web-tasarim">WEB TASARIM</Link></li>
                      <li><Link to="/e-ticaret">E-TİCARET SİTELERİ</Link></li>
                      <li><Link to="/domain-hosting">DOMAIN & HOSTING</Link></li>
                      <li><Link to="/hosting">HOSTING PAKETLERİ</Link></li>
                      <li><Link to="/domain-ssl">SSL SERTİFİKASI</Link></li>
                      <li><Link to="/kurumsal-e-posta">KURUMSAL E-POSTA</Link></li>
                      <li><Link to="/seo-optimizasyon">SEO</Link></li>
                      <li><Link to="/logo-tasarimi">LOGO ÇALIŞMASI</Link></li>
                      <li><Link to="/isletme-profili">İŞLETME PROFİLİ</Link></li>
                      <li><Link to="/google-maps">HARİTA KAYIT</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/projects">PROJELERİMİZ</Link></li>
                  <li><Link to="/contact">İLETİŞİM</Link></li>
                </ul>
              </div>
            </nav>
            <div className="header-style-twelev__btn clearfix">
              <button onClick={() => changeLanguage('tr')} className="cart-toggler">
                <span>TR</span>
              </button>
              <button onClick={() => changeLanguage('en')} className="cart-toggler">
                <span>EN</span>
              </button>
              <a className="header-style-twelev__call" href="tel:+905456136819">
                <i className="flaticon-call"></i>
              </a>
            </div>
            <a href="https://wa.me/905456136819" className="thm-btn-twelev" target="_blank" rel="noopener noreferrer">
              HIZLI TEKLİF ALIN!
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

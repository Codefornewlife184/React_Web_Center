/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";


const Footer = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body scroll
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleLinkClick = (path) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    navigate(path);
    if (isMenuOpen) {
      toggleMenu();
    }
  };
  const phoneNumber = "905465341963"; // Hedef telefon numarası

  const openWhatsApp = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      t("Merhaba, size bir mesaj gönderiyorum!")
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const images = [
    {
      small: "assets/images/footer/1.png",
      big: "assets/images/1.png",
    },
    {
      small: "assets/images/footer/2.png",
      big: "assets/images/2.png",
    },
    {
      small: "assets/images/footer/3.png",
      big: "assets/images/3.png",
    },
    {
      small: "assets/images/footer/4.png",
      big: "assets/images/4.png",
    },
    {
      small: "assets/images/footer/5.png",
      big: "assets/images/5.png",
    },
    {
      small: "assets/images/footer/6.png",
      big: "assets/images/6.png",
    },
  ];

  return (
    <>
      <section className="footer-twelev">
        <div className="footer-twelev__bg" style={{ backgroundImage: "url(assets/images/banner/12.webp)" }}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-twelev__widget text-white">
                <div className="logo-box">
                  <div className="logo">
                    <Link to="/">
                      <img src="assets/images/logo-footer.webp" width="135" alt="Web Center" loading="lazy" />
                    </Link>
                  </div>
                </div>
                <p className="footer-twelev__text">
                  {t("İş dünyasındaki harika şeyler asla tek bir kişi tarafından yapılmaz. Güçlü bir ekibe ihtiyaç vardır.")}
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-twelev__widget text-white">
                <h6 className="footer-twelev__title" style={{ color: "#10adad" }}>
                  {t("Kurumsal")}
                </h6>
                <ul>
                  <li><Link to="/" onClick={() => handleLinkClick('/')}>{t("Anasayfa")}</Link></li>
                  <li><Link to="/about" onClick={() => handleLinkClick('/about')}>{t("Hakkımızda")}</Link></li>
                  <li><Link to="/projects" onClick={() => handleLinkClick('/projects')}>{t("Projelerimiz")}</Link></li>
                  <li><Link to="/question" onClick={() => handleLinkClick('/question')}>{t("Sıkça Sorulan Sorular")}</Link></li>
                  <li><Link to="/contact" onClick={() => handleLinkClick('/contact')}>{t("İletişim")}</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-twelev__widget text-white">
                <h6 className="footer-twelev__title" style={{ color: "#10adad" }}>
                  {t("HİZMETLERİMİZ")}
                </h6>
                <ul>
                  <li><Link to="/web-design" onClick={() => handleLinkClick('/web-tasarim')}>{t("Web Tasarım")}</Link></li>
                  <li><Link to="/e-ticaret" onClick={() => handleLinkClick('/e-ticaret')}>{t("E-Ticaret Siteleri")}</Link></li>
                  <li><Link to="/domain-hosting" onClick={() => handleLinkClick('/domain-hosting')}>{t("Domain & Hosting")}</Link></li>
                  <li><Link to="/hosting" onClick={() => handleLinkClick('/hosting')}>{t("Hosting Paketleri")}</Link></li>
                  <li><Link to="/domain-ssl" onClick={() => handleLinkClick('/domain-ssl')}>{t("SSL Sertifikası")}</Link></li>
                  <li><Link to="/kurumsal-e-posta" onClick={() => handleLinkClick('/kurumsal-e-posta')}>{t("Kurumsal E-Posta")}</Link></li>
                  <li><Link to="/seo-optimizasyon" onClick={() => handleLinkClick('/seo-optimizasyon')}>{t("Seo")}</Link></li>
                  <li><Link to="/logo-tasarimi" onClick={() => handleLinkClick('/logo-tasarimi')}>{t("Logo Çalışması")}</Link></li>
                  <li><Link to="/isletme-profili" onClick={() => handleLinkClick('/isletme-profili')}>{t("İşletme Profili")}</Link></li>
                  <li><Link to="/google-maps" onClick={() => handleLinkClick('/google-maps')}>{t("Harita Kayıt")}</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-twelev__widget text-white">
                <h6 className="footer-twelev__title" style={{ color: "#10adad" }}>
                  {t("İLETİŞİM")}
                </h6>
                <div className="footer-twelev__info">
                  <p className="footer-twelev__text">{t("Çamlıca Mah. Nilüfer / BURSA")}</p>
                  <ul>
                    <li>
                      <span className="linoor-icon-three-telephone-1"></span>
                      <a href="tel:905456136819">(0545) 613-6819</a>
                    </li>
                    <li>
                      <span className="linoor-icon-three-email-1"></span>
                      <a href="mailto:info@webcenter.com.tr">info@webcenter.com.tr</a>
                    </li>
                  </ul>
                  <div className="footer-twelev__social">
                    <a href="https://www.facebook.com/profile.php?id=61569515864445" target="_blank" rel="noopener noreferrer">
                      <span className="fab fa-facebook-f"></span>
                    </a>
                    <a href="https://www.instagram.com/webcenter.office/" target="_blank" rel="noopener noreferrer">
                      <span className="fab fa-instagram"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-twelev__copyright">{t("© 2024 WEB CENTER Tüm Hakları Saklıdır.")}</div>
      </section>

      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-angle-up"></i>
        <svg className="whatsapp-button__circle" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </a>
      <a href="https://wa.me/905456136819" className="whatsapp-button" target="_blank" rel="noopener noreferrer" alt="Whatsapp" aria-label="Whatsapp">
        <i className="fab fa-whatsapp"></i>
        <svg className="whatsapp-button__circle" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </a>
    </>
  );
};

export default Footer;

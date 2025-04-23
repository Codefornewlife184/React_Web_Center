import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <section className="about-twelev mt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-5">
              <div className="about-section-three__image">
                <img src="assets/images/about/1.webp" alt={t("HAKKIMIZDA")} loading="lazy" />
              </div>
            </div>
            <div className="col-md-12 col-lg-7 wow fadeInRight" data-wow-delay="200ms">
              <div className="about-twelev__content">
                <div className="sec-title-twelev">
                  <div className="sec-title-twelev__tagline" style={{ color: '#10adad' }}>
                    <span className="sec-title-twelev__tagline__bar"></span>
                    {t("HAKKIMIZDA")}
                  </div>
                  <h2 className="sec-title-twelev__title">{t("Web Center: DİJİTAL Dünyaya Açılan Kapınız")}</h2>
                </div>
                <p className="about-twelev__content__text">
                  <strong style={{ color: '#10adad' }}>{t("Web Center")}</strong> {t("olarak, işletmelerin dijital varlıklarını güçlendirmek ve etkili bir çevrimiçi görünürlük kazanmalarını sağlamak için hizmet veriyoruz. Hedefimiz, sadece bir web sitesi oluşturmak değil; markanızın dijital dünyadaki potansiyelini en üst düzeye çıkaracak çözümler sunmaktır.")}<br /><br />

                  {t("Kuruluşumuzdan bu yana yenilikçi, estetik ve kullanıcı odaklı web tasarımlarıyla müşterilerimizin ihtiyaçlarını karşılıyoruz. Sadece tasarım hizmeti sunmakla kalmıyor, aynı zamanda SEO, kullanıcı deneyimi optimizasyonu ile web sitenizin gerçek bir başarı hikayesine dönüşmesine yardımcı oluyoruz.")}<br /><br />

                  <strong style={{ color: '#10adad' }}>{t("Web Center")}</strong> {t("olarak, her projemizde müşterilerimizle yakın iş birliği yapmayı önemsiyor ve firmanıza özel çözümler sunuyoruz. Dijital dönüşüm yolculuğunuzda size rehberlik etmek ve işletmenizin başarılarına katkıda bulunmak için buradayız.")} <br /><br />
                  <strong style={{ color: '#10adad' }}>{t("Web Center")}</strong> {t("ile geleceğinizi bugünden inşa edin!")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
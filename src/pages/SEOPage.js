import React from "react";
import { Helmet } from 'react-helmet-async';
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import SEO from "../Components/services/SEO";

function SEOPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>SEO Optimizasyonu - Web Center | Bursa Arama Motoru Optimizasyonu</title>
        <meta name="description" content="Bursa'da profesyonel SEO hizmetleri. Google'da üst sıralarda yer alın. Anahtar kelime analizi, teknik SEO ve içerik optimizasyonu ile organik trafiğinizi artırın." />
        <meta name="keywords" content="bursa seo, arama motoru optimizasyonu, google seo, organik trafik, anahtar kelime analizi, teknik seo" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webcenter.com.tr/seo-optimizasyon" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SEO Optimizasyonu - Web Center" />
        <meta property="og:description" content="Bursa'da profesyonel SEO hizmetleri. Google'da üst sıralarda yer alın ve organik trafiğinizi artırın." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://webcenter.com.tr/seo-optimizasyon" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SEO Optimizasyonu",
            "description": "Arama motoru optimizasyonu ve dijital pazarlama hizmetleri",
            "provider": {
              "@type": "Organization",
              "name": "Web Center",
              "url": "https://webcenter.com.tr"
            },
            "serviceType": "SEO Services",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "SEO Hizmetleri",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Teknik SEO"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "İçerik Optimizasyonu"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <PageHeader title={t("SEO OPTİMİZASYONU")} />
      <SEO/>
    </>
  );
}

export default SEOPage;
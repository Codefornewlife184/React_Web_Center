import React from "react";
import { Helmet } from 'react-helmet-async';
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import GoogleMaps from "../Components/services/GoogleMaps";

function GoogleMapsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Google Harita Kaydı - Web Center | Google Maps İşletme Kaydı</title>
        <meta name="description" content="Google Haritalar'da işletmenizi kaydedin ve müşterilerinizin sizi kolayca bulmasını sağlayın. Profesyonel Google Maps işletme kaydı hizmetleri." />
        <meta name="keywords" content="google harita kaydı, google maps, işletme kaydı, yerel arama, google my business, harita optimizasyonu" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webcenter.com.tr/google-harita-kaydi" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Google Harita Kaydı - Web Center" />
        <meta property="og:description" content="Google Haritalar'da işletmenizi kaydedin ve yerel müşterilerinizin sizi kolayca bulmasını sağlayın." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://webcenter.com.tr/google-harita-kaydi" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Google Harita Kaydı - Web Center" />
        <meta name="twitter:description" content="Google Haritalar'da işletmenizi kaydedin ve yerel müşterilerinizin sizi kolayca bulmasını sağlayın." />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Google Harita Kaydı Hizmetleri",
            "description": "Google Maps ve Google My Business işletme kaydı hizmetleri",
            "provider": {
              "@type": "Organization",
              "name": "Web Center",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bursa",
                "addressRegion": "Nilüfer",
                "addressCountry": "TR"
              },
              "telephone": "+90-545-613-6819",
              "url": "https://webcenter.com.tr"
            },
            "serviceType": "Google Maps Registration Services",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Google Harita Kaydı Paketleri",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Google My Business Kurulumu"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Google Haritalar Optimizasyonu"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <PageHeader title={t("GOOGLE HARİTA KAYDI")} />
      <GoogleMaps/>
    </>
  );
}

export default GoogleMapsPage;
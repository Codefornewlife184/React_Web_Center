import React from "react";
import { Helmet } from 'react-helmet-async';
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import BusinessProfile from "../Components/services/BusinessProfile";

function BusinessProfilePage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>İşletme Profili - Web Center | Google My Business Optimizasyonu</title>
        <meta name="description" content="Profesyonel işletme profili oluşturma ve Google My Business optimizasyonu. Yerel SEO ile müşterilerinizin sizi kolayca bulmasını sağlayın." />
        <meta name="keywords" content="işletme profili, google my business, yerel seo, işletme kaydı, google haritalar" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webcenter.com.tr/isletme-profili" />
        
        {/* Open Graph */}
        <meta property="og:title" content="İşletme Profili - Web Center" />
        <meta property="og:description" content="Profesyonel işletme profili oluşturma ve Google My Business optimizasyonu hizmetleri." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://webcenter.com.tr/isletme-profili" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="İşletme Profili - Web Center" />
        <meta name="twitter:description" content="Profesyonel işletme profili oluşturma ve Google My Business optimizasyonu hizmetleri." />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "İşletme Profili Hizmetleri",
            "description": "Google My Business ve yerel SEO optimizasyonu hizmetleri",
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
            "serviceType": "Business Profile Services",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "İşletme Profili Paketleri",
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
                    "name": "Yerel SEO Optimizasyonu"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <PageHeader title={t("İŞLETME PROFİLİ")} />
      <BusinessProfile/>
    </>
  );
}

export default BusinessProfilePage;
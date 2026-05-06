import React from "react";
import { Helmet } from 'react-helmet-async';
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import ECommerce from "../Components/services/ECommerce";

function ECommercePage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>E-Ticaret Sitesi Tasarımı - Web Center | Bursa Online Mağaza Çözümleri</title>
        <meta name="description" content="Bursa'da profesyonel e-ticaret sitesi tasarımı. Online mağaza, ödeme sistemleri ve stok yönetimi ile satışlarınızı artırın. E-ticaret çözümleri için Web Center." />
        <meta name="keywords" content="bursa e-ticaret sitesi, online mağaza tasarımı, e-ticaret çözümleri, online satış sitesi, ödeme sistemleri" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webcenter.com.tr/e-ticaret" />
        
        {/* Open Graph */}
        <meta property="og:title" content="E-Ticaret Sitesi Tasarımı - Web Center" />
        <meta property="og:description" content="Bursa'da profesyonel e-ticaret sitesi tasarımı. Online mağaza çözümleri ile satışlarınızı artırın." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://webcenter.com.tr/e-ticaret" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="E-Ticaret Sitesi Tasarımı - Web Center" />
        <meta name="twitter:description" content="Bursa'da profesyonel e-ticaret sitesi tasarımı. Online mağaza çözümleri ile satışlarınızı artırın." />
        
        {/* Schema.org E-commerce Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "E-Ticaret Sitesi Tasarımı",
            "description": "Profesyonel e-ticaret sitesi tasarımı ve online mağaza çözümleri",
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
            "serviceType": "E-commerce Development",
            "areaServed": "Bursa",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "E-Ticaret Paketleri",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Online Mağaza Tasarımı"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ödeme Sistemi Entegrasyonu"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Stok Yönetim Sistemi"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <PageHeader title={t("E-TİCARET SİTELERİ")} />
      <ECommerce/>
    </>
  );
}

export default ECommercePage;
import React from "react";
import { Helmet } from 'react-helmet-async';
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import WebDesign from "../Components/services/WebDesign";

function WebDesignPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Web Tasarım Hizmetleri - Web Center | Bursa Profesyonel Web Sitesi Tasarımı</title>
        <meta name="description" content="Bursa'da profesyonel web tasarım hizmetleri. Modern, responsive ve SEO uyumlu web siteleri. Kurumsal web tasarım çözümleri için Web Center'ı tercih edin." />
        <meta name="keywords" content="bursa web tasarım, profesyonel web sitesi, responsive tasarım, kurumsal web tasarım, modern web sitesi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webcenter.com.tr/web-tasarim" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Web Tasarım Hizmetleri - Web Center" />
        <meta property="og:description" content="Bursa'da profesyonel web tasarım hizmetleri. Modern, responsive ve SEO uyumlu web siteleri." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://webcenter.com.tr/web-tasarim" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Tasarım Hizmetleri - Web Center" />
        <meta name="twitter:description" content="Bursa'da profesyonel web tasarım hizmetleri. Modern, responsive ve SEO uyumlu web siteleri." />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Web Tasarım Hizmetleri",
            "description": "Profesyonel web tasarım ve geliştirme hizmetleri",
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
            "serviceType": "Web Design",
            "areaServed": "Bursa",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Tasarım Paketleri",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Responsive Web Tasarım"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Kurumsal Web Sitesi"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <PageHeader title={t("WEB TASARIM")} />
      <WebDesign/>
    </>
  );
}

export default WebDesignPage;

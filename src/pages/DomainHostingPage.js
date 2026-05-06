import React from "react";
import { Helmet } from 'react-helmet-async';
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import DomainHosting from "../Components/services/DomainHosting";

function DomainHostingPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Domain ve Hosting Hizmetleri - Web Center | Bursa Alan Adı ve Barındırma</title>
        <meta name="description" content="Bursa'da güvenilir domain ve hosting hizmetleri. Alan adı tescili, web hosting, SSL sertifikası ve e-posta hizmetleri. Uygun fiyatlarla Web Center'dan." />
        <meta name="keywords" content="bursa domain hosting, alan adı tescili, web hosting, ssl sertifikası, e-posta hosting, güvenilir hosting" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webcenter.com.tr/domain-hosting" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Domain ve Hosting Hizmetleri - Web Center" />
        <meta property="og:description" content="Bursa'da güvenilir domain ve hosting hizmetleri. Alan adı tescili ve web barındırma çözümleri." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://webcenter.com.tr/domain-hosting" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Domain ve Hosting Hizmetleri - Web Center" />
        <meta name="twitter:description" content="Bursa'da güvenilir domain ve hosting hizmetleri. Alan adı tescili ve web barındırma çözümleri." />
        
        {/* Schema.org Hosting Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Domain ve Hosting Hizmetleri",
            "description": "Alan adı tescili, web hosting ve barındırma hizmetleri",
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
            "serviceType": "Web Hosting",
            "areaServed": "Turkey",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Hosting Paketleri",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Domain Tescili"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Hosting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SSL Sertifikası"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <PageHeader title={t("DOMAIN & HOSTING")} />
      <DomainHosting/>
    </>
  );
}

export default DomainHostingPage;
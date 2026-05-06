import React from "react";
import { Helmet } from 'react-helmet-async';
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import DomainSSL from "../Components/services/DomainSSL";

function DomainSSLPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>SSL Sertifikası - Web Center | Güvenli Web Sitesi Sertifikaları</title>
        <meta name="description" content="Profesyonel SSL sertifikası hizmetleri ile web sitenizi güvende tutun. Ücretsiz ve ücretli SSL sertifikaları, HTTPS güvenliği ve güvenilir şifreleme." />
        <meta name="keywords" content="ssl sertifikası, https güvenliği, web sitesi güvenliği, ssl kurulumu, güvenli sertifika" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webcenter.com.tr/domain-ssl" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SSL Sertifikası - Web Center" />
        <meta property="og:description" content="Profesyonel SSL sertifikası hizmetleri ile web sitenizi güvende tutun." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://webcenter.com.tr/domain-ssl" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="SSL Sertifikası - Web Center" />
        <meta name="twitter:description" content="Profesyonel SSL sertifikası hizmetleri ile web sitenizi güvende tutun." />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SSL Sertifikası Hizmetleri",
            "description": "Web sitesi güvenliği için SSL sertifikası kurulumu ve yönetimi",
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
            "serviceType": "SSL Certificate Services",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "SSL Sertifika Paketleri",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ücretsiz SSL Sertifikası"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Premium SSL Sertifikası"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <PageHeader title={t("SSL SERTİFİKASI")} />
      <DomainSSL/>
    </>
  );
}

export default DomainSSLPage;
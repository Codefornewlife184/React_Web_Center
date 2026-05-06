import React from "react";
import { Helmet } from 'react-helmet-async';
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import CorporateEmail from "../Components/services/CorporateEmail";

function CorporateEmailPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Kurumsal E-posta - Web Center | Profesyonel E-posta Çözümleri</title>
        <meta name="description" content="Profesyonel kurumsal e-posta hizmetleri. Kendi domain adınızla e-posta hesapları, güvenli e-posta sunucuları ve 7/24 teknik destek." />
        <meta name="keywords" content="kurumsal e-posta, profesyonel e-posta, domain e-posta, e-posta hosting, güvenli e-posta" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webcenter.com.tr/kurumsal-e-posta" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Kurumsal E-posta - Web Center" />
        <meta property="og:description" content="Profesyonel kurumsal e-posta hizmetleri ile işletmenizin iletişimini güçlendirin." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://webcenter.com.tr/kurumsal-e-posta" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Kurumsal E-posta - Web Center" />
        <meta name="twitter:description" content="Profesyonel kurumsal e-posta hizmetleri ile işletmenizin iletişimini güçlendirin." />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Kurumsal E-posta Hizmetleri",
            "description": "Profesyonel e-posta çözümleri ve kurumsal e-posta yönetimi",
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
            "serviceType": "Corporate Email Services",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "E-posta Paketleri",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Temel E-posta Paketi"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Premium E-posta Paketi"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <PageHeader title={t("KURUMSAL E-POSTA")} />
      <CorporateEmail/>
    </>
  );
}

export default CorporateEmailPage;
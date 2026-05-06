import React from "react";
import { Helmet } from 'react-helmet-async';
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import LogoDesign from "../Components/services/LogoDesign";

function LogoDesignPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Logo Tasarımı - Web Center | Profesyonel Logo Çalışmaları</title>
        <meta name="description" content="Profesyonel logo tasarımı hizmetleri. Kurumsal kimlik, marka logosu ve yaratıcı logo tasarımları ile markanızı öne çıkarın." />
        <meta name="keywords" content="logo tasarımı, kurumsal logo, marka logosu, logo çalışması, grafik tasarım, kurumsal kimlik" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webcenter.com.tr/logo-tasarimi" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Logo Tasarımı - Web Center" />
        <meta property="og:description" content="Profesyonel logo tasarımı hizmetleri ile markanızı öne çıkarın." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://webcenter.com.tr/logo-tasarimi" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Logo Tasarımı - Web Center" />
        <meta name="twitter:description" content="Profesyonel logo tasarımı hizmetleri ile markanızı öne çıkarın." />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Logo Tasarımı Hizmetleri",
            "description": "Profesyonel logo tasarımı ve kurumsal kimlik çalışmaları",
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
            "serviceType": "Logo Design Services",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Logo Tasarım Paketleri",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Temel Logo Tasarımı"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Kurumsal Kimlik Paketi"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <PageHeader title={t("LOGO ÇALIŞMASI")} />
      <LogoDesign/>
    </>
  );
}

export default LogoDesignPage;
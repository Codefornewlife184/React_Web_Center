import React from "react";
import { Helmet } from 'react-helmet-async';
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Hosting from "../Components/services/Hosting";

function HostingPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Hosting Paketleri - Web Center | Bursa Web Barındırma Hizmetleri</title>
        <meta name="description" content="Bursa'da güvenilir web hosting paketleri. SSD hosting, unlimited hosting ve WordPress hosting seçenekleri. Hızlı ve güvenli barındırma hizmetleri." />
        <meta name="keywords" content="bursa hosting, web barındırma, ssd hosting, wordpress hosting, unlimited hosting, güvenli hosting" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webcenter.com.tr/hosting" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hosting Paketleri - Web Center" />
        <meta property="og:description" content="Bursa'da güvenilir web hosting paketleri. SSD hosting ve WordPress hosting seçenekleri." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://webcenter.com.tr/hosting" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Web Hosting Paketleri",
            "description": "Güvenilir ve hızlı web barındırma hizmetleri",
            "provider": {
              "@type": "Organization",
              "name": "Web Center",
              "url": "https://webcenter.com.tr"
            },
            "serviceType": "Web Hosting"
          })}
        </script>
      </Helmet>
      
      <PageHeader title={t("HOSTING PAKETLERİ")} />
      <Hosting/>
    </>
  );
}

export default HostingPage;
import React from "react";
import { Helmet } from 'react-helmet-async';
import Contact from "../Components/contact/Contact";

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>İletişim - Web Center | Bursa Web Tasarım İletişim Bilgileri</title>
        <meta name="description" content="Web Center ile iletişime geçin. Bursa Nilüfer'de bulunan ofisimizden web tasarım ve dijital pazarlama hizmetleri hakkında bilgi alın. Ücretsiz teklif!" />
        <meta name="keywords" content="web center iletişim, bursa web tasarım iletişim, web sitesi teklifi, dijital pazarlama danışmanlığı" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webcenter.com.tr/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="İletişim - Web Center" />
        <meta property="og:description" content="Web Center ile iletişime geçin. Profesyonel web tasarım hizmetleri için ücretsiz teklif alın." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webcenter.com.tr/contact" />
        
        {/* Schema.org Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Web Center",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Çamlıca Mah.",
              "addressLocality": "Nilüfer",
              "addressRegion": "Bursa",
              "addressCountry": "TR"
            },
            "telephone": "+90-545-613-6819",
            "email": "info@webcenter.com.tr",
            "url": "https://webcenter.com.tr",
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "$$"
          })}
        </script>
      </Helmet>
      
      <Contact />
    </>
  );
}

export default ContactPage;

import React from "react";
import { Helmet } from 'react-helmet-async';
import Slider2 from "../Components/common/Slider2";
import About from "../Components/about/About";
import Projects from "../Components/project/projects";
import ThreeBox from "../Components/common/ThreeBox";
import Comments from "../Components/comments/Comments";
import Question from "../Components/question/Question";
import Contactus from "../Components/contact/Contactus";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Web Center - Profesyonel Web Tasarım ve Dijital Çözümler | Bursa</title>
        <meta name="description" content="Web Center olarak Bursa'da profesyonel web tasarım, e-ticaret siteleri, SEO optimizasyonu ve dijital pazarlama hizmetleri sunuyoruz. Ücretsiz teklif alın!" />
        <meta name="keywords" content="web tasarım bursa, web sitesi yapımı, e-ticaret sitesi, seo optimizasyonu, dijital pazarlama, web center bursa" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webcenter.com.tr/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Web Center - Profesyonel Web Tasarım ve Dijital Çözümler" />
        <meta property="og:description" content="Bursa'da profesyonel web tasarım, e-ticaret siteleri ve dijital pazarlama hizmetleri. Modern, responsive ve SEO uyumlu web siteleri." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webcenter.com.tr/" />
        <meta property="og:image" content="https://webcenter.com.tr/assets/images/og-image.jpg" />
        <meta property="og:site_name" content="Web Center" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Center - Profesyonel Web Tasarım ve Dijital Çözümler" />
        <meta name="twitter:description" content="Bursa'da profesyonel web tasarım, e-ticaret siteleri ve dijital pazarlama hizmetleri." />
        <meta name="twitter:image" content="https://webcenter.com.tr/assets/images/twitter-image.jpg" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Web Center",
            "url": "https://webcenter.com.tr",
            "logo": "https://webcenter.com.tr/assets/images/logo.webp",
            "description": "Bursa'da profesyonel web tasarım ve dijital çözümler sunan teknoloji şirketi",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Çamlıca Mah.",
              "addressLocality": "Nilüfer",
              "addressRegion": "Bursa",
              "addressCountry": "TR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+90-545-613-6819",
              "contactType": "customer service",
              "email": "info@webcenter.com.tr"
            },
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61569515864445",
              "https://www.instagram.com/webcenter.office/"
            ],
            "services": [
              "Web Tasarım",
              "E-Ticaret Siteleri",
              "SEO Optimizasyonu",
              "Dijital Pazarlama",
              "Logo Tasarımı",
              "Hosting Hizmetleri"
            ]
          })}
        </script>
      </Helmet>
      
      <Slider2 />
      <ThreeBox/>
      <About />
      <Projects/>
      <Question/>
      <Contactus />
    </>
  );
}

export default HomePage;

import React from "react";
import { Helmet } from 'react-helmet-async';
import About from "../Components/about/About";

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Hakkımızda - Web Center | Bursa Web Tasarım Şirketi</title>
        <meta name="description" content="Web Center olarak 2024'ten beri Bursa'da profesyonel web tasarım ve dijital çözümler sunuyoruz. Deneyimli ekibimiz ve kaliteli hizmetlerimizle tanışın." />
        <meta name="keywords" content="web center hakkında, bursa web tasarım şirketi, web tasarım ekibi, dijital ajans bursa" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webcenter.com.tr/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hakkımızda - Web Center" />
        <meta property="og:description" content="Web Center olarak Bursa'da profesyonel web tasarım ve dijital çözümler sunuyoruz. Deneyimli ekibimizle tanışın." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webcenter.com.tr/about" />
        <meta property="og:image" content="https://webcenter.com.tr/assets/images/about-og.jpg" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hakkımızda - Web Center" />
        <meta name="twitter:description" content="Bursa'da profesyonel web tasarım ve dijital çözümler sunan deneyimli ekibimizle tanışın." />
      </Helmet>
      
      <About />
    </>
  );
}

export default AboutPage;
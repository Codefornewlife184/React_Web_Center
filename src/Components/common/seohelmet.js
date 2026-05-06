import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SEOHelmet = ({ 
  title, 
  description, 
  keywords, 
  url, 
  type = "website",
  image = "https://webcenter.com.tr/assets/images/logo/logo.webp",
  author = "Web Center"
}) => {
  const { t } = useTranslation();
  const location = useLocation();
  
  // Varsayılan SEO değerleri
  const defaultTitle = "Web Center - Profesyonel Web Tasarım, SEO ve E-ticaret Hizmetleri";
  const defaultDescription = "Web Center olarak profesyonel web tasarım, SEO optimizasyonu, e-ticaret çözümleri ve dijital pazarlama hizmetleri sunuyoruz. Modern ve responsive tasarımlarla işletmenizi dijital dünyaya taşıyın.";
  const defaultKeywords = "web tasarım, kurumsal web tasarım, SEO, e-ticaret, dijital pazarlama, responsive tasarım, web sitesi, Web Center, hosting, domain, ssl sertifikası";
  const baseUrl = "https://webcenter.com.tr";
  
  // Sayfa bazlı SEO ayarları
  const getPageSEO = () => {
    const path = location.pathname;
    
    switch(path) {
      case '/':
        return {
          title: defaultTitle,
          description: defaultDescription,
          keywords: defaultKeywords
        };
      case '/about':
        return {
          title: "Hakkımızda - Web Center | Profesyonel Web Tasarım Ajansı",
          description: "Web Center olarak 2015'ten beri profesyonel web tasarım, SEO ve dijital pazarlama hizmetleri sunuyoruz. Deneyimli ekibimizle işletmenizi dijital dünyada öne çıkarıyoruz.",
          keywords: "web center hakkında, web tasarım ajansı, dijital ajans, web tasarım firması, SEO uzmanı"
        };
      case '/contact':
        return {
          title: "İletişim - Web Center | Ücretsiz Teklif Alın",
          description: "Web Center ile iletişime geçin. Profesyonel web tasarım, SEO ve e-ticaret hizmetleri için ücretsiz teklif alın. 7/24 destek hizmeti.",
          keywords: "web center iletişim, web tasarım teklif, SEO teklif, e-ticaret teklif, web sitesi fiyat"
        };
      case '/projects':
        return {
          title: "Projelerimiz - Web Center | Başarılı Web Tasarım Örnekleri",
          description: "Web Center'ın başarıyla tamamladığı web tasarım, e-ticaret ve SEO projelerini inceleyin. Referanslarımız ve müşteri memnuniyeti.",
          keywords: "web tasarım projeleri, e-ticaret siteleri, SEO başarı hikayeleri, web center referanslar"
        };
      case '/web-tasarim':
        return {
          title: "Web Tasarım Hizmetleri - Web Center | Modern ve Responsive Tasarım",
          description: "Profesyonel web tasarım hizmetleri ile modern, responsive ve SEO uyumlu web siteleri. Kurumsal kimliğinizi yansıtan özgün tasarımlar.",
          keywords: "web tasarım, responsive tasarım, kurumsal web sitesi, modern web tasarım, web sitesi yapımı"
        };
      case '/e-ticaret':
        return {
          title: "E-Ticaret Web Sitesi - Web Center | Online Mağaza Çözümleri",
          description: "Profesyonel e-ticaret web siteleri ile online satışlarınızı artırın. Güvenli ödeme sistemleri, stok yönetimi ve SEO uyumlu e-ticaret çözümleri.",
          keywords: "e-ticaret sitesi, online mağaza, e-ticaret tasarım, online satış, e-ticaret çözümleri"
        };
      case '/seo-optimizasyon':
        return {
          title: "SEO Hizmetleri - Web Center | Google'da Üst Sıralarda Yer Alın",
          description: "Profesyonel SEO hizmetleri ile Google'da üst sıralarda yer alın. Anahtar kelime analizi, içerik optimizasyonu ve teknik SEO çalışmaları.",
          keywords: "SEO hizmetleri, Google SEO, anahtar kelime optimizasyonu, site hızlandırma, SEO uzmanı"
        };
      case '/domain-hosting':
        return {
          title: "Domain ve Hosting Hizmetleri - Web Center | Güvenilir Barındırma",
          description: "Güvenilir domain ve hosting hizmetleri. Hızlı SSD hosting, ücretsiz SSL sertifikası ve 7/24 teknik destek ile web sitenizi güvende tutun.",
          keywords: "domain, hosting, SSD hosting, SSL sertifikası, web hosting, domain kayıt"
        };
      default:
        return {
          title: title || defaultTitle,
          description: description || defaultDescription,
          keywords: keywords || defaultKeywords
        };
    }
  };
  
  const pageSEO = getPageSEO();
  const finalTitle = title || pageSEO.title;
  const finalDescription = description || pageSEO.description;
  const finalKeywords = keywords || pageSEO.keywords;
  const finalUrl = url || `${baseUrl}${location.pathname}`;
  
  return (
    <Helmet>
      {/* Temel Meta Etiketleri */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Turkish" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalUrl} />
      
      {/* Open Graph Meta Etiketleri */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Web Center" />
      <meta property="og:locale" content="tr_TR" />
      
      {/* Twitter Card Meta Etiketleri */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@webcenter" />
      
      {/* Viewport ve Responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Web Center",
          "url": "https://webcenter.com.tr",
          "logo": "https://webcenter.com.tr/assets/images/logo/logo.webp",
          "description": finalDescription,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "TR",
            "addressLocality": "İstanbul"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+90-545-613-6819",
            "contactType": "Customer Service"
          },
          "sameAs": [
            "https://www.facebook.com/webcenter",
            "https://www.instagram.com/webcenter",
            "https://www.linkedin.com/company/webcenter"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHelmet;
import React from "react";
import { Helmet } from 'react-helmet-async';
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Projects from "../Components/project/projects";
// import Spacer2 from "../Components/common/Spacer2";

function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Projelerimiz - Web Center | Bursa Web Tasarım Projeleri ve Referanslar</title>
        <meta name="description" content="Web Center'ın başarılı web tasarım projelerini inceleyin. Bursa'da gerçekleştirdiğimiz kurumsal web siteleri, e-ticaret projeleri ve dijital çözümler." />
        <meta name="keywords" content="web tasarım projeleri, bursa web sitesi örnekleri, kurumsal web tasarım referansları, e-ticaret projeleri" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webcenter.com.tr/projects" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Projelerimiz - Web Center" />
        <meta property="og:description" content="Web Center'ın başarılı web tasarım projelerini ve referanslarını inceleyin." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webcenter.com.tr/projects" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projelerimiz - Web Center" />
        <meta name="twitter:description" content="Web Center'ın başarılı web tasarım projelerini ve referanslarını inceleyin." />
        
        {/* Schema.org Portfolio */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Web Center Projeleri",
            "description": "Web Center'ın gerçekleştirdiği web tasarım projeleri ve referansları",
            "url": "https://webcenter.com.tr/projects",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Web Tasarım Projeleri",
              "description": "Başarılı web tasarım projeleri koleksiyonu"
            },
            "provider": {
              "@type": "Organization",
              "name": "Web Center",
              "url": "https://webcenter.com.tr"
            }
          })}
        </script>
      </Helmet>
      
      <PageHeader title={t("PROJELERİMİZ")} />
      <Projects />
    </>
  );
}

export default ProjectsPage;

import React from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
	const { t } = useTranslation();
	
	// Projeleri bir dizi olarak tanımlayalım
	const Projects = [
		
		{
			id: 17,
			title: "SEYMEN KİMYA",
			description: t("Endüstriyel Ted. Firması İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/19.webp",
			url: "https://seymenkimya.com/"
		},
		{
			id: 16,
			title: "BKB STORE",
			description: t("Ambalaj Firması İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/20.webp",
			url: "https://bkbstore.com/"
		},
		{
			id: 1,
			title: "YENİDÜNYA END.",
			description: t("Endüstriyel Ted. Firması İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/1.webp",
			url: "https://yenidunyaendustriyel.com/"
		},
		{
			id: 2,
			title: "SETA LIFTING",
			description: t("İş Makineleri Firması İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/2.webp",
			url: "https://setalifting.com/"
		},
		{
			id: 3,
			title: "ŞEKİR YAPI",
			description: t("PVC Cam Balkon Firması İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/3.webp",
			url: "https://www.sekiryapi.com.tr/"
		},
		{
			id: 4,
			title: "BKB AMBALAJ",
			description: t("Ambalaj Firması İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/4.webp",
			url: "https://bkbambalaj.com/"
		},
		{
			id: 5,
			title: "İNDİZAYN MATBAA",
			description: t("Matbaa Firması İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/5.webp",
			url: "https://www.indizayn.com.tr/"
		},
		{
			id: 6,
			title: "PRUSA TEKSTİL",
			description: t("Perde Firması İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/6.webp",
			url: "https://www.efendioglutekstil.com/"
		},
		{
			id: 8,
			title: "EMEL BEAUTY",
			description: t("Güzellik Merkezi İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/8.webp",
			url: "https://www.emelbeauty.com.tr/"
		},
		{
			id: 9,
			title: "AYPİN OTOMAT",
			description: t("Otomat Firması İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/14.webp",
			url: "https://aypinotomat.com/"
		},
		{
			id: 10,
			title: "DOĞU BATI PROJE",
			description: t("Mimari Projeler İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/10.webp",
			url: "https://dogubatiproje.com/"
		},
		{
			id: 11,
			title: "BADEMLİ ANAOKULU",
			description: t("Anaokulu İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/11.webp",
			url: "https://bademlianaokulu.com/"
		},
		{
			id: 12,
			title: "MOCA MERMER",
			description: t("Taş Ocağı Firması İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/12.webp",
			url: "https://mocastone.com.tr/"
		},
		{
			id: 13,
			title: "BURSA BAKIR",
			description: t("Bursa Bakır Firması İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/17.webp",
			url: "https://bursabakir.com/"
		},
		{
			id: 14,
			title: "TUĞÇELİK METAL",
			description: t("Metal Firması İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/16.webp",
			url: "https://tugcelikmetal.com/"
		},
		{
			id: 15,
			title: "FASULYELİ",
			description: t("Lokanta Firması İçin Hazırlanan Sitemiz"),
			image: "assets/images/products/18.webp",
			url: "https://fasulyeli.com/"
		}
	];

	return (
		<section className="news-section mb-0">
			<div className="auto-container">
				<div className="sec-title-twelev text-center">
					<div className="sec-title-twelev__tagline" style={{ color: "#10adad" }}>
						<span className="sec-title-twelev__tagline__bar"></span>{t("PROJELERİMİZ")}
					</div>
					<h2 className="sec-title-twelev__title">{t("PROJELERİMİZ")}</h2>
				</div>
				<div className="row clearfix">
					{Projects.map((project) => (
						<div 
							key={project.id} 
							className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" 
							data-wow-delay="0ms"
							data-wow-duration="1500ms"
						>
							<div className="inner-box">
								<div className="image-box">
									<a href={project.url} target="_blank" rel="noopener noreferrer">
										<img src={project.image} alt={project.title} />
									</a>
								</div>
								<div className="lower-box mt-3">
									<h5>
										<a href={project.url} target="_blank" rel="noopener noreferrer">
											{project.title}
										</a>
									</h5>
									<div className="text">{project.description}</div>
									<div className="more-box">
										<a 
											className="theme-btn btn-style-one" 
											href={project.url} 
											target="_blank" 
											rel="noopener noreferrer"
										>
											<i className="btn-curve"></i>
											<span className="btn-title">{t("Detaylar")}</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
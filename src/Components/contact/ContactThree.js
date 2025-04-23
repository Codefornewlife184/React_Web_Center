import React from "react";

const ContactThree = () => {
  return (
    <>
      <section className="contact-info-two">
			<div className="auto-container">
				<div className="row">
					<div className="col-md-12 col-lg-4">
						<div className="contact-info-two__card wow fadeInUp" data-wow-duration="1500ms">
							<i className="fa fa-map-marker-alt"></i>
							<a href="#">Çamlıca Mah. Nilüfer / BURSA</a>
						</div>
					</div>
					<div className="col-md-12 col-lg-4">
						<div className="contact-info-two__card wow fadeInUp" data-wow-duration="1500ms"
							data-wow-delay="300ms">
							<i className="fa fa-envelope"></i>
							<a href="mailto:info@webcenter.com.tr">info@webcenter.com.tr</a>
						</div>
					</div>
					<div className="col-md-12 col-lg-4">
						<div className="contact-info-two__card wow fadeInUp" data-wow-delay="600ms"
							data-wow-duration="1500ms">
							<i className="fa fa-phone"></i>
							<a href="tel:+905456136819">+90 (545) 613- 6819</a>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  );
};

export default ContactThree;

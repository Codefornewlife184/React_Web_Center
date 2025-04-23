import React from "react";

const ContactMap = () => {
  return (
    <>
      <div className="map-box">
        <iframe 
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.60894490095!2d28.978266068533713!3d40.19551544444903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca16917ec4360f%3A0x8887f4c3c2a94edb!2s%C3%87aml%C4%B1ca%20Mahallesi%20Pazar%20Yeri!5e0!3m2!1sen!2str!4v1732633479497!5m2!1sen!2str"
          style={{ border: 0 }}
          aria-hidden="false"
          tabIndex="0"
          title="Web Center Konum"
        />
      </div>
    </>
  );
};

export default ContactMap;

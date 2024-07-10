import React from "react";

const MapComponent = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54380.92362800986!2d74.31068242167967!3d31.584320100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191be37671dcbf%3A0x786a0e2a0b53d6ef!2sShalamar%20Garden!5e0!3m2!1sen!2s!4v1720596165963!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: "0" }} 
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;

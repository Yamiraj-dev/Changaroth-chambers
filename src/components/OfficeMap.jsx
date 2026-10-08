import React from "react";

const SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d142329.97257184665!2d114.84970663938361!3d4.863816286173731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f54f195b8f11%3A0x3be1e5072f9f9d9e!2sChangAroth%20Chambers%20Brunei%20Darussalam%2C%20Advocates%20%26%20Solicitors!5e0!3m2!1sen!2sbn!4v1791427913460!5m2!1sen!2sbn";

export default function OfficeMap() {
  return (
    <iframe
      src={SRC}
      title="ChangAroth Chambers location"
      className="w-full h-56 sm:h-full min-h-[14rem] border border-gold/20"
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
}
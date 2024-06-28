import React from "react";
import ContactAreaInfoItem from "../ContactAreaInfoItem";
import "./index.scss";

function ContactArea() {
  return (
    <div className="contact-area">
      <div className="contact-area__container">
        <div className="contact-area__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189.98115748951474!2d49.81680731167746!3d40.371228196147406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc3d9cbd689%3A0xad559a40d9b254af!2sIstambul%20Restaurant!5e0!3m2!1sen!2saz!4v1701640601434!5m2!1sen!2saz"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-area__bottom">
          <div className="contact-area__bottom__left">
            <ContactAreaInfoItem
              icon="fa-solid fa-house"
              h="California, United States"
              p="Santa monica bullevard"
            />
            <ContactAreaInfoItem
              icon="fa-solid fa-phone"
              h="00 (440) 9865 562"
              p="Mon to Fri 9am to 6 pm"
            />
            <ContactAreaInfoItem
              icon="fa-solid fa-envelope"
              h="support@colorlib.com"
              p="Send us your query anytime!"
            />
          </div>
          <div className="contact-area__bottom__center">
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter email address" />
            <input type="text" placeholder="Enter subject" />
          </div>
          <div className="contact-area__bottom__right">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Message"
            ></textarea>
          </div>
          <div className="contact-area__bottom__btn">
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactArea;
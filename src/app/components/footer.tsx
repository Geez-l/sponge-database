"use client";
import React from "react";
import '../css/footer.css';
import Image from "next/image";

/*Footer for the sponge website */
const Footer = () => (
  <div className="footer-container">
    <Image
     src="/assets/footer/footer-logos.svg"
     alt="Footer Logo"
     width={100}
     height={40}
     className="footer-logos" />
    <div className="footer-text">
      <p className="footer-copyright">
        © 2025 Philippine Genome Center and UP Marine Science Institute. All
        rights reserved.
      </p>
      <div className="footer-body">
        <p>SAMPLE COUNT: 50</p>
        <p>IMAGE COUNT: 100</p>
        <p>DATABASE LAST UPDATED: 01-08-2025 00:00</p>
      </div>
    </div>
  </div>
);

export default Footer;

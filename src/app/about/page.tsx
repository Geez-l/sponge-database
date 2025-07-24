import React from 'react';
import '../css/about.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/variable.css';

export default function AboutPage() {
  return (
    <div className='page-wrapper'>
    <div className="faq-div">
      <section className="faq-title">
        <h1>About Us</h1>
      </section>

      {/* Content block lower on the page */}
      <div className="max-w-4xl px-4 py-16 mt-12">
        <p className="text-gray-700 text-lg leading-relaxed">
          The Philippine Sponge Guide is a gateway to exploring Philippine sponges through a user-friendly database. This database is designed to keep track of sponge records and organize the classification, characteristics, and metadata from the UP Marine Science Institute. 
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget auctor libero. Donec vestibulum purus sit amet mattis egestas. Vestibulum sagittis tortor ut mauris tempor tincidunt. Praesent malesuada augue rhoncus semper hendrerit. 
          Curabitur aliquam porttitor nisl eget bibendum. Mauris ultricies luctus leo, consequat consectetur purus maximus sit amet. 
          Duis vulputate enim sed dui porta, at tincidunt nulla feugiat. Donec bibendum, orci non faucibus iaculis, lacus ligula consectetur libero, non blandit eros tortor vel augue. Mauris viverra viverra maximus. 
          Sed vel velit sit amet risus vestibulum interdum.
        </p>
      </div>
      
    </div>
    <div className='footer-container'>
        <img src={'/assets/footer/footer-logos.svg'} className='footer-logos'></img>
        <div className='footer-text'>

          <p className='footer-copyright'>© 2025 Philippine Genome Center and UP Marine Science Institute. All rights reserved.</p>
          <div className='footer-body'>
            <p>SAMPLE COUNT: 50 </p>
            <p>IMAGE COUNT: 100 </p>
            <p>DATABASE LAST UPDATED: 01-08-2025 00:00</p>
          </div>
        </div>
      </div>
      </div>
  );
};
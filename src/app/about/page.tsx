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
          The Philippine Sponge Guide represents ongoing and continuing efforts to document sponge biodiversity in the archipelago. It is a collaborative effort among dedicated researchers and supporting institutions. This initiative is made possible through the  Marine Science Institute of the University of the Philippines Diliman with support from the Department of Science and Technology – Philippine Council for Agriculture, Aquatic, and Natural Resources Research and Development (DOST-PCAARRD) through the Coastal Acidification and Mesophotic Coral Ecosystems Programs.
        </p>
          Database design and implementation by the Philippine Genome Center Diliman Core Facility for Bioinformatics and the Marine Molecular Laboratory of the Marine Science Institute, University of the Philippines Diliman.
                    <br />
          <br />
          (logos)
          <br />
          <br />
          <span style={{ fontWeight: 'bold' }}>Photographers and field collectors</span>        
          <br />
          • Cecilia Conaco
          <br />
          • Patrick Cabaitan
          <br />
          • Marielle Ann Carungay
          <br />
          • Gabriella Juliane Maala
          <br />
          • Vanessa Joy Diamante
          <br />
          • Francis Gideon Tagnong
      </div>
    </div><div className='footer-container'>

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
'use client';
import React from 'react';
import '../css/faq.css';
import Footer from '../components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/variable.css';


const FAQ = () => {
  return (
    <div className="faq-div">
      <section className="faq-title">
        <h1>Frequently Asked Questions</h1>
      </section>

      <main className="faq-content">
        <div className="faq-item">
          <div className="question-box">
            <h4 className="question">
              <span className='title-bar'>|</span>
              What are OTU IDs? How were they determined for each sponge?
            </h4>
          </div>
          <div className="answer">
            <p>
              Every photographed sponge was assigned a specific Operational Taxonomic Unit (OTU) identification by the UP Marine Science Institute 
              based on distinct morphological characteristics, 
              including functional form, growth form, color, and surface texture.

            </p>
            <p>
              Putative identifications were based entirely on morphological features observed in the field and laboratory. 
              For some collected specimens, molecular analysis and microscopic skeletal examination were also conducted. 
              This included analyzing the arrangement of organic fibers and spicules; 
              microscopic skeletal elements composed of silica or calcium carbonate. 
              To confirm the identity of each species, spicules and fibers were directly examined for in which spicules and tissue sections were measured 
              and photographed using a microscope equipped with a mounted camera.
            </p>
            <p>
              Please note that multiple OTU IDs may correspond to the same putative species name, 
              as variations in morphology may exist within a species. 
              All morphological characteristics, along with the associated photographs, 
              are shown on the corresponding OTU information page.
            </p>
          </div>
        </div>
        <div className="faq-item">
          <div className="question-box">
            <h4 className="question">
              <span className='title-bar'>|</span>
              How can I search for an image of a sponge? 
            </h4>
          </div>
          <div className="answer">
            <p>Images in the Philippine Sponge Database may be searched using the attributes below:</p>
            <ul>
              <li>Operational taxonomic unit identification (OTU ID)</li>
              <li>Location</li>
              <li>Color</li>
              <li>Functional form (Schonberg, 2021)</li>
              <li>Putative identification</li>
            </ul>
          </div>
        </div>

        <div className="faq-item">
          <div className="question-box">
            <h4 className="question">
              <span className='title-bar'>|</span>
              What other types of information are in the database?
            </h4>
          </div>
          <div className="answer">
            <p>
              In addition to identifying Operational Taxonomic Units (OTUs) based on the morphological characteristics of sponges, 
              we have documented the following information for each observation:
            </p>

            <ul>
              <li>Location where the sponge was observed or collected</li>
              <li>Date the sponge was observed and/or collected</li>
              <li>Depth at which the sponge was observed or collected</li>
              <li>Sample code, if a physical specimen was collected</li>
              <li>Functional form, classified according to Schönberg (2021)</li>
              <li>Color of the sponge as observed <em>in situ</em></li>
              <li>Detailed morphological descriptions, including growth form, surface texture, oscula shape and distribution, and ostia characteristics</li>
              <li>Microscopic imagery, such as images of spicules and tissue sections, if available</li>
              <li>DNA barcode sequences, if molecular data were obtained</li>
              <li>Putative identification for certain specimens, when possible, according 
                to <a className='source-link' href="https://link.springer.com/book/10.1007/978-1-4615-0747-5" target="_blank" rel="noopener noreferrer">Systema Porifera (Hooper and van Soest, 2002) </a>and 
                the <a className='source-link' href="https://www.marinespecies.org/porifera/" target="_blank" rel="noopener noreferrer">World Register of Marine Species</a>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="faq-item">
          <div className="question-box">
            <h4 className="question">
              <span className='title-bar'>|</span>
              What is the difference between the functional form and growth form?
            </h4>
          </div>
          <div className="answer">
            <p>
              The functional form was assigned based on the 
              classification system by <a className='source-link' href=" https://www.sciencedirect.com/science/article/pii/S1470160X21004714" target="_blank" rel="noopener noreferrer">Schönberg (2021)</a>. 
              The growth form is based on the descriptions of the researchers at UP MSI based on the observed morphology. 
            </p>
          </div>
        </div>

        <div className="faq-item">
          <div className="question-box">
            <h4 className="question">
              <span className='title-bar'>|</span>
              Where were the images taken?
            </h4>
          </div>
          <div className="answer">
            <p>
             The images were taken from various locations across the Philippines. 
             These include the municipalities of San Esteban in Ilocos Sur, Badoc and Currimao in Ilocos Norte, Bolinao in Pangasinan, Bauan in Batangas, Anda in Bohol, and Apo Reef Natural Park in Occidental Mindoro. 
             Each image includes the site name for reference.
            </p>
          </div>
        </div>

        <div className='references'>
          <h4><span className='title-bar'>|</span>References</h4>
          <p>
            de Voogd, N.J.; Alvarez, B.; Boury-Esnault, N.; Cárdenas, P.; Díaz, M.-C.; Dohrmann, M.; Downey, R.; Goodwin, C.; Hajdu, E.; Hooper, J.N.A.; 
            Kelly, M.; Klautau, M.; Lim, S.C.; Manconi, R.; Morrow, C.; Pinheiro, U.; Pisera, A.B.; Ríos, P.; Rützler, K.; Schönberg, C.; Turner, T.; Vacelet, J.; 
            van Soest, R.W.M.; Xavier, J. (2025). World Porifera Database. Accessed at https://www.marinespecies.org/porifera on 2025-07-24. doi:10.14284/359

          </p>
          <p>
            Hooper, J. and Van Soest, R. (2002) Systema Porifera. 
            A Guide to the Classification of Sponges. Springer, New York. 
            http://dx.doi.org/10.1007/978-1-4615-0747-5_1
          </p>
          <p>
            Schonberg, C. 2021. No taxonomy needed: Sponge functional morphologies inform about environmental conditions. 
            Ecological Indicators. 129. 107806. 10.1016/j.ecolind.2021.107806.
          </p>
        </div>
        
      </main>

      <Footer />
      
    </div>
  );
};

export default FAQ;

'use client';
import React from 'react';
import '../css/faq.css';


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
              What are OTUs?
            </h4>
          </div>
          <div className="answer">
            The operational taxonomic units (OTUs) serve as a temporary classification system for the sponge samples in the dataset, assigned by the UP Marine Science Institute. These units are based on the morphological characteristics of the sponges. 
          </div>
        </div>
        <div className="faq-item">
          <div className="question-box">
            <h4 className="question">
              Do the samples have an assigned species or classification? 
            </h4>
          </div>
          <div className="answer">
            <p>
              The samples have not been officially classified yet, however putative IDs have been assigned to some, based on morphology.
            </p>
          </div>
        </div>

        <div className="faq-item">
          <div className="question-box">
            <h4 className="question">
              How are the OTUs arranged? 
            </h4>
          </div>
          <div className="answer">
            <p>
              Queries can be made based on color, functional form, putative ID, and sample location. The result page of each OTU also contains additional information about the sample.
            </p>
          </div>
          
        </div>

        <div className="faq-item">
          <div className="question-box">
            <h4 className="question">
              What is the difference between the functional form and growth form?
            </h4>
          </div>
          <div className="answer">
            <p>
              The functional form was assigned based on the classification system by 
              <a className='source-link' href=" https://www.sciencedirect.com/science/article/pii/S1470160X21004714" target="_blank" rel="noopener noreferrer">
                 Schönberg (2021)
              </a>. 
              The growth form is based on the descriptions of the researchers at UP MSI based on the observed morphology. 
            </p>
          </div>
        </div>
        
      </main>

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

export default FAQ;

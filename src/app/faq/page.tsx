'use client';
import React from 'react';
import '../css/faq.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/variable.css';


const FAQ = () => {
  return (
    <div>
      <section className="faq-title">
        <h1>Frequently Asked Questionss</h1>
      </section>

      <main className="faq-content">
        <div className="faq-item">
          <div className="question-box">
            <h4 className="question">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </h4>
          </div>
          <div className="answer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Use the dropdown filters on the home page to search by color and functional form.
            Use the dropdown filters on the home page to search by color and functional form. Use the dropdown filters on the home page to search by color and functional form.
          </div>
        </div>

        <div className="faq-item">
          <div className="question-box">
            <h4 className="question">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </h4>
          </div>
          <div className="answer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;

import React from 'react';
import '../css/faq.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/variable.css';

export default function AboutPage() {
  return (
    <div>
      <section className="faq-title">
        <h1>About Us</h1>
      </section>

      {/* Content block lower on the page */}
      <div className="max-w-4xl mx-auto px-4 py-16 mt-12">
        <p className="text-gray-700 text-lg leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
{'}'}
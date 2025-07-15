import React from 'react';

const FAQ = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-content">
        <h3>What is this database?</h3>
        <p>This is a sponge database containing information about different types of sponges.</p>
        
        <h3>How do I search for sponges?</h3>
        <p>Use the dropdown filters on the home page to search by color and functional form.</p>
        
        <h3>What information is available?</h3>
        <p>Each sponge entry includes details about color, functional form, growth form, surface texture, and more.</p>
      </div>
    </div>
  );
};

export default FAQ;

import React from 'react';
import '../css/faq.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/variable.css';

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="bg-teal-500 py-16">
        <h1 className="text-white text-4xl font-bold text-center">
          About Us
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        {/* Section 1 */}
        <div className="grid grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Our Mission
            </h2>
          </div>
          <div className="text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              fermentum sem non velit viverra, ac facilisis elit tincidunt.
              Integer dapibus, metus a sagittis posuere, risus justo posuere
              enim, eget posuere leo enim ac lacus.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Our Vision
            </h2>
          </div>
          <div className="text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ultrices tincidunt justo, in rutrum lacus. Suspendisse potenti.
              Aliquam erat volutpat. Morbi lacinia risus a mauris feugiat, ut
              tempor nunc sollicitudin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
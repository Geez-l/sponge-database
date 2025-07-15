'use client';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


import '../css/home.css';
import '../css/variable.css';

import { useSpongeFilters } from '../hooks/useSpongeFilters';
import { useRouter } from 'next/navigation';


/* HOME resources
1) Dropdowns: https://react-bootstrap.netlify.app/docs/components/dropdowns/
2) Cards [texts below the home]: https://react-bootstrap.netlify.app/docs/components/cards
 */
const Home = () => {
  const router = useRouter();
  const {
    selectedColor,
    selectedFunctionalForm,
    colors,
    functionalForms,
    handleColorSelect,
    handleFunctionalFormSelect,
    handleReset,
    handleSubmit,
  } = useSpongeFilters();

  const handleSubmitAndNavigate = () => {
    handleSubmit();
    router.push('/result');
  };

  return (
    <div>
      <main className="home-content">
        {/* banner image for bg */}
          <div className="home-bg">
            <div className="home-text"></div>
          </div>
        <Card className="card">
          <div className="search-container">

            {/* Color Dropdown */}
            <Dropdown className="dropDown1">
              <Dropdown.Toggle variant="success" id="dropdown-color">
                {selectedColor}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {colors.map((color: string, index: number) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => handleColorSelect(color)}
                    active={selectedColor === color}
                  >
                    {color}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            {/* Functional Form Dropdown */}
            <Dropdown className="dropDown2">
              <Dropdown.Toggle variant="success" id="dropdown-form">
                {selectedFunctionalForm}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {functionalForms.map((form: string, index: number) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => handleFunctionalFormSelect(form)}
                    active={selectedFunctionalForm === form}
                  >
                    {form}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            {/* Buttons */}
            <div className="resetButton">
              <button className="btn btn-outline-danger" onClick={handleReset}>
                Reset
              </button>
            </div>
            <div className="submitButton">
              <button className="btn btn-success" onClick={handleSubmitAndNavigate}>
                Submit
              </button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Home;

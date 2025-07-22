'use client';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';


import './css/home.css';
import './css/variable.css';

import { useSpongeFilters } from './hooks/useSpongeFilters';
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

import HomeCards from './components/homeCards'; 


/* HOME resources
1) Dropdowns: https://react-bootstrap.netlify.app/docs/components/dropdowns/
2) Cards [texts below the home]: https://react-bootstrap.netlify.app/docs/components/cards
 */
const Home = () => {
  const router = useRouter();
  const {
    selectedColor,
    selectedFunctionalForm,
    selectedPutative,
    selectedLocation,
    colors,
    functionalForms,
    putative,
    location,
    handleColorSelect,
    handleFunctionalFormSelect,
    handlePutativeSelect,
    handleLocationSelect,
    handleReset,
    handleSubmit,
  } = useSpongeFilters();

  const handleSubmitAndNavigate = () => {
    handleSubmit();
    router.push('/result');
  };

  const handleSearch = () => {
    handleSearch();
    router.push('/result');
  };

  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <div>
      <main className="home-content">
        {/* banner image for bg */}
          <div className="home-bg">
            <div className="home-text"></div>
        <Card className="sponge-card">
          <div className="search-container">

            {/* Search Form */}
            <form
              className="search-bar-wrapper"
              onSubmit={e => {
                e.preventDefault();
                handleSubmitAndNavigate();
              }}
            >
              <div className="search-bar-left-icon">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Enter keyword"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </form>

            {/* Advanced Search Label */}
            <div className="advancedSearch">
              <h1>OR SEARCH BY</h1>
            </div>

            {/* COLOR */}
            <Row className="w-100 mb-2">
              <Col md={4} className="mb-2">
                <Dropdown className="dropDown1">
                  <Dropdown.Toggle variant="success" id="dropdown-color">
                    {selectedColor}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {colors.map((color, index) => (
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
              </Col>

              {/* Functional Form */}
              <Col md={4} className="mb-2">
                <Dropdown className="dropDown2">
                  <Dropdown.Toggle variant="success" id="dropdown-form">
                    {selectedFunctionalForm}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {functionalForms.map((form, index) => (
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
              </Col>

            </Row>

            {/* Second Row of Dropdowns */}
            <Row className="w-100 mb-4">
              <Col md={4} className="mb-2">
                <Dropdown className="dropDown4">
                  <Dropdown.Toggle variant="success" id="dropdown-putative">
                    {putative}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {putative.map((putative, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => handlePutativeSelect(putative)}
                        active={selectedPutative === putative}
                      >
                        {putative}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>

              <Col md={4} className="mb-2">
                <Dropdown className="dropDown6">
                  <Dropdown.Toggle variant="success" id="dropdown-location">
                    {selectedLocation}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {location.map((loc, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => handleLocationSelect(loc)}
                        active={selectedLocation === loc}
                      >
                        {loc}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>

            {/* Submit and Reset Buttons */}
            <Row className="submit-button">
              <Col md={4} className="mb-2">
                <div className="resetButton">
                  <button className="btn btn-outline-danger" onClick={handleReset}>
                    Reset
                  </button>
                </div>
              </Col>

              <Col md={4} className="mb-2">
                <div className="submitButton">
                  <button className="btn btn-success" onClick={handleSubmitAndNavigate}>
                    Submit
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </Card>
        <div className='banner-msg'>
          <h1>DIVE IN AND DISCOVER</h1>
          <h2> The gateway to the Philippine Marine Sponges</h2>
          <h3>hello world</h3>
        </div>
      </div>
      </main>
      <HomeCards />
    </div>
    
  );
};

export default Home;

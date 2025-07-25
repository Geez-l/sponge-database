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


// Make values sentence case
function toSentenceCase(text: string): string {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}


const Home = () => {
  const router = useRouter();
  const {
    searchTerm,
    setSearchTerm,
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
    // handleSubmit, // to be updated w/ search
    handleSubmitAndNavigate,
    handleFetchGlobal,
  } = useSpongeFilters();

  // const [searchTerm, setSearchTerm] = React.useState('');



  return (
    <div>
      <main className="home-content">
        <div className="home-bg">
          <div className="home-text"></div>
          <Card className="sponge-card">
            <div className="search-container">

              {/* Search Form */}
              <form
                className="search-bar-wrapper"
                onSubmit={(e) => {
                  e.preventDefault();
                  // handleFetchGlobal();
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
                <h4>or search by</h4>
              </div>

              {/* First Row of Dropdowns */}
              <Row className="w-100 mb-2">
                <Col md={4}>
                  <Dropdown className="dropDown1">
                    <Dropdown.Toggle variant="success">
                      {selectedColor || 'Color'}
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

                <Col md={4}>
                  <Dropdown className="dropDown2">
                    <Dropdown.Toggle variant="success">
                      {selectedFunctionalForm || 'Functional Form'}
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
                <Col md={4}>
                  <Dropdown className="dropDown4">
                    <Dropdown.Toggle variant="success">
                      {selectedPutative || 'Putative ID'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {putative.map((p, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={() => handlePutativeSelect(toSentenceCase(p))}
                          active={selectedPutative === toSentenceCase(p)}
                        >
                          {toSentenceCase(p)}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col md={4}>
                  <Dropdown className="dropDown6">
                    <Dropdown.Toggle variant="success">
                      {selectedLocation || 'Location'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {location.map((loc, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={() => handleLocationSelect(toSentenceCase(loc))}
                          active={selectedLocation === toSentenceCase(loc)}
                        >
                          {toSentenceCase(loc)}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>

              {/* Submit & Reset */}
              <Row className="submit-and-reset">
                <Col md={4}>
                  <button className="btn btn-outline-danger" onClick={handleReset}>
                    Reset
                  </button>
                </Col>
                <Col md={4}>
                  <button className="btn btn-success custom-submit" onClick={handleSubmitAndNavigate}>
                    Submit
                  </button>
                </Col>
              </Row>

            </div>
          </Card>

          <div className='banner-msg'>
            <h1>DIVE IN AND <span className='highlight'>DISCOVER</span></h1>
            <h2>The gateway to the Philippine marine sponges</h2>
          </div>
        </div>
      </main>

      <HomeCards />

      <div className='footer-container'>
        <img src={'/assets/footer/footer-logos.svg'} className='footer-logos' />
        <div className='footer-text'>
          <p className='footer-copyright'>
            © 2025 Philippine Genome Center and UP Marine Science Institute. All rights reserved.
          </p>
          <div className='footer-body'>
            <p>SAMPLE COUNT: 50</p>
            <p>IMAGE COUNT: 100</p>
            <p>DATABASE LAST UPDATED: 01-08-2025 00:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

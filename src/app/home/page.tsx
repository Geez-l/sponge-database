'use client';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';


import '../css/home.css';
import '../css/variable.css';

import { useSpongeFilters } from '../hooks/useSpongeFilters';
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';



/* HOME resources
1) Dropdowns: https://react-bootstrap.netlify.app/docs/components/dropdowns/
2) Cards [texts below the home]: https://react-bootstrap.netlify.app/docs/components/cards
 */
const Home = () => {
  const router = useRouter();
  const {
    selectedColor,
    selectedFunctionalForm,
    selectedClassification,
    selectedGrowth,
    selectedSurface,
    selectedLocation,
    colors,
    functionalForms,
    classification,
    growth,
    surface,
    location,
    handleColorSelect,
    handleFunctionalFormSelect,
    handleClassificationSelect,
    handleGrowthSelect,
    handleSurfaceSelect,
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

            <form
              className="search-bar-wrapper"
              onSubmit={e => {
                e.preventDefault();
                
              }}
            >
              <div className="search-bar search-bar-left-icon">
             
                
                <input
                  type="text"
                  placeholder="Enter keyword"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
               
              </div>
            </form>

            <div className='advancedSearch'>
              <h1>OR SEARCH BY</h1>
            </div>

            {/* Color Dropdown */}
            <Row className='w-100 mb-2'>
              <Col md={4} className='mb-2'>
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
            </Col>
           

            <Col md={4} className='mb-2'>
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
            </Col>

            <Col md={4} className='mb-2'>
            {/* Putative classification */}
            <Dropdown className='dropDown3'>
              <Dropdown.Toggle variant='success' id='dropdown-classification'>
                {selectedClassification}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {classification.map((classification: string, index: number) => (
                  <Dropdown.Item
                  key={index}
                  onClick={() => handleClassificationSelect(classification)}
                  active={selectedClassification === classification}
                  >
                    {classification}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            </Col>
            </Row>

            <Row className='w-100 mb-4'>
              <Col md={4} className='mb-2'>
              <Dropdown className='dropDown4'>
              <Dropdown.Toggle variant='success' id='dropdown-growth'>
                {selectedGrowth}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {growth.map((growth: string, index: number) => (
                  <Dropdown.Item
                  key={index}
                  onClick={() => handleGrowthSelect(growth)}
                  active={selectedGrowth === growth}
                  >
                    {growth}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
              </Col>

              <Col md={4} className='mb-2'>
              <Dropdown className='dropDown5'>
              <Dropdown.Toggle variant='success' id='dropdown-surface'>
                {selectedSurface}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {surface.map((surface: string, index: number) => (
                  <Dropdown.Item
                  key={index}
                  onClick={() => handleSurfaceSelect(surface)}
                  active={selectedSurface === surface}
                  >
                    {surface}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
              </Col>

              <Col md={4} className='mb-2'>
              <Dropdown className='dropDown6'>
              <Dropdown.Toggle variant='success' id='dropdown-surface'>
                {selectedLocation}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {location.map((location: string, index: number) => (
                  <Dropdown.Item
                  key={index}
                  onClick={() => handleLocationSelect(location)}
                  active={selectedLocation === location}
                  >
                    {location}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
              </Col>

            </Row>


         <Row className='submit-button'>
          <Col md={4} className='mb-2'>
             {/* Buttons */}
             <div className="resetButton">
              <button className="btn btn-outline-danger" onClick={handleReset}>
                Reset
              </button>
            </div>
          </Col>

          <Col md={4} className='mb-2'>
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
        </div>
        </div>

      </main>
      

      <div className='home-bottom'>
        <Card>
          <div className='search-db-text'>
            <h1> How to Search Our Database</h1>
            <h3>text text text</h3>
          </div>
        </Card>
      </div>
      {/* Add another card here */}
      {/* Follow the logic in dropdowns, 1 row that encloses columns
      row{col col col } */}
    </div>
    
  );
};

export default Home;

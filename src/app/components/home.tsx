'use client';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

// CSS imports
import '../css/home.css';
import '../css/variable.css';


// Dropdown options
// const dropdownColor = ['Filter 1', 'Filter 2', 'Filter 3', 'Filter 4'];
// const dropdownLocation = ['Location 1', 'Location 2', 'Location 3', 'Location 4'];
// const dropdownFunctional_form = ['String A', 'String B'];

const Home = () => {
  return (
    <div>
      <main className='home-content'>
        <div>
          <div className='home-bg'>
            <div className='home-text'></div>
          </div>
        </div>
        <Card className='card'>
        <div className='search-container'>

          {/* Color Dropdown */}
         <Dropdown className='dropDown1'>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Color Dropdown
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>A</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>B</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>C</Dropdown.Item>

            </Dropdown.Menu>
         </Dropdown>

            {/* Functional Form Dropdown */}
            <Dropdown className='dropDown2'>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Functional Form Dropdown
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>A</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>B</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>C</Dropdown.Item>

            </Dropdown.Menu>
         </Dropdown>

          {/* Buttons */}
          <div className='resetButton'>
            <button className='btn btn-outline-danger'>Reset</button>
          </div>
          <div className='submitButton'>
            <button className='btn btn-success'>Submit</button>
          </div>
        </div>
        </Card>
      </main>
    </div>
  );
};

export default Home;

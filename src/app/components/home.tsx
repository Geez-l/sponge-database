import React from 'react';
// import { Button } from 'react-bootstrap';
// import { Dropdown } from 'react-bootstrap';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// CSS imports
import '../css/home.css';
import '../css/variable.css';

// Page imports

// Image imports
// import Blank from '../assets/blank.jpg';

// to update
const dropdownColor = ['Filter 1', 'Filter 2', 'Filter 3', 'Filter 4'];
const dropdownLocation = ['Location 1', 'Location 2', 'Location 3', 'Location 4'];
const dropdownFunctional_form = ['String A', 'String B'];

const Home = () => {
    return (
        <div>
            <main className='home-content'>
                <div>
                    <div className='home-bg'>
                        <div className='home-text'>
                        </div>
                    </div>
                </div>
                <div className='search-container'>
                    <div className='button-color'>
                        <select className='dropdown'>
                            <option>Color</option>
                            {dropdownColor.map((item, idx) => (
                                <option key={item} value={idx}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className='button-location'>
                        <select className='dropdown'>
                            <option>Location</option>
                            {dropdownLocation.map((item, idx) => (
                                <option key={item} value={idx}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className='button-functional-form'>
                        <select className='dropdown'>
                            <option>Functional Form</option>
                            {dropdownFunctional_form.map((item, idx) => (
                                <option key={item} value={idx}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className='resetButton'>
                        <button className='btn btn-outline-danger'>Reset</button>
                    </div>
                    <div className='submitButton'>
                        <button className='btn btn-success'>Submit</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
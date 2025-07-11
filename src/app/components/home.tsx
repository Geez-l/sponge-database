import React from 'react';
import { Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
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
const dropdownLocation = ['Location 1', 'Location 2', 'Location 3', 'Location 4']
const dropdownFunctional_form = ['String A', 'String B']

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
                    {dropdownLabels.map((label, idx) => (
                        <div className={`button${idx + 1}`} key={label}>
                            <Dropdown>
                                <Dropdown.Toggle variant='success' id={`dropdown-basic-${idx}`}>
                                    {label}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                                    <Dropdown.Item href='#/action-2'>Action</Dropdown.Item>
                                    <Dropdown.Item href='#/action-3'>Action</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    ))}
                    <div className='resetButton'>
                        <Button variant='outline-danger'>Reset</Button>
                    </div>
                    <div className='submitButton'>
                        <Button variant='success'>Submit</Button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
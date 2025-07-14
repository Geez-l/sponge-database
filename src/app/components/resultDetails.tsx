'use client';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Tabs, Tab } from 'react-bootstrap';


const ResultDetails = () => {
    return (
        <Tabs
            defaultActiveKey='details'
            id='details-tab'
            className='det-tab'
            >
            <Tab eventKey='details' title='Details'>
            Content
            </Tab>

            <Tab eventKey='images' title='Images'>
            Images
            </Tab>
        </Tabs>

    );
};

export default ResultDetails;
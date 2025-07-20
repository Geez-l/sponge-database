'use client';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Tabs, Tab } from 'react-bootstrap';

import '../css/resultDetails.css'

const ResultDetails = () => {
    return (
        
        <div>
            <main className="resultDetails-content">
                <div className="header-bg">
                <Card className="header-card">
                    <h1>OTU 32</h1>
                    <h5>1 sample count</h5>
                    <h5>Batangas</h5>
                </Card>
                    
                </div>
            
        
                <div className="body">
                    <Tabs defaultActiveKey='details' id='details-tab' className='det-tab'>
                        <Tab eventKey='details' title='Details'>
                            Content
                        </Tab>

                        <Tab eventKey='images' title='Images'>
                            Images
                        </Tab>
                    </Tabs>
                </div>
            </main>
        </div>
    );
};

export default ResultDetails;
'use client';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import { useParams } from 'next/navigation';
import { Table } from 'react-bootstrap';

import '../../css/resultDetails.css';

const ResultDetails = () => {
    const { otu_id } = useParams();
    const [images, setImages] = useState<{ name: string; url: string }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchImages() {
            try {
                const res = await fetch(`http://localhost:5000/api/images?otu_id=${otu_id}`);
                const data = await res.json();
                setImages(data.data || []);
            } catch (err) {
                console.error('Error fetching images:', err);
            } finally {
                setLoading(false);
            }
        }

        if (otu_id) {
            fetchImages();
        }
    }, [otu_id]);

    return (
        <div>
            <main className="resultDetails-content">
                <div className="header-bg">
                    <Card className="header-card">
                        <h1>OTU {otu_id}</h1>
                        <h5>1 sample count</h5>
                        <h5>Batangas</h5>
                    </Card>
                </div>

                <div className="body">
                    <Tabs defaultActiveKey="details" id="details-tab" className="det-tab">
                        <Tab eventKey="details" title="Details">
                            <div className='description-wrapper'>
                                <div className='desc-img'>
                                    <h1>image</h1>
                                </div>
                                <div className='details-wrapper'>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Features</th>
                                                <th>  </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Functional Form</td>
                                                <td>FF placeholder</td>
                                            </tr>
                                            <tr>
                                                <td>Growth Form</td>
                                                <td>GF placeholder</td>
                                            </tr>
                                            <tr>
                                                <td>Color</td>
                                                <td>c placeholder</td>
                                            </tr>
                                            <tr>
                                                <td>Surface Texture</td>
                                                <td>st placeholder</td>
                                            </tr>
                                            <tr>
                                                <td>Oscule Shape</td>
                                                <td>os placeholder</td>
                                            </tr>
                                            <tr>
                                                <td>Oscule Distribution</td>
                                                <td>od placeholder</td>
                                            </tr>
                                            <tr>
                                                <td>Ostia</td>
                                                <td>o placeholder</td>
                                            </tr>
                                            <tr>
                                                <td>Putative ID</td>
                                                <td>pid placeholder</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            
                        </Tab>

                        <Tab eventKey="images" title="Images">
                            <div className='samples-wrapper'>
                                <div className='sample-image'>
                                {loading ? (
                                    <p>Loading images...</p>
                                ) : images.length > 0 ? (
                                    <div className="image-grid">
                                        {images.map((img) => (
                                            <img key={img.name} src={img.url} alt={img.name} className="otu-img" />
                                        ))}
                                    </div>
                                ) : (
                                    <p>No images found</p>
                                )}
                                </div>

                                <div className='sample-details'>
                                    <h3>details details</h3>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </main>
        
        <div className='footer-container'>
            <img src={'/assets/footer/footer-logos.svg'} className='footer-logos'></img>
            <div className='footer-text'>
          
                <p className='footer-copyright'>© 2025 Philippine Genome Center and UP Marine Science Institute. All rights reserved.</p>
                <div className='footer-body'>
                    <p>SAMPLE COUNT: 50 </p> 
                    <p>IMAGE COUNT: 100 </p>
                    <p>DATABASE LAST UPDATED: 01-08-2025 00:00</p>
                </div>         
            </div>
        </div>
        </div>
    );
};

export default ResultDetails;

'use client';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab, Table } from 'react-bootstrap';
import { useSearchParams } from 'next/navigation';

import '../../css/resultDetails.css';

interface Sponge {
    otu_id: number;
    color: string;
    functional_form: string;
    growth_form: string;
    surface_texture: string;
    location_name?: string;
    date_collected?: string;
    putative_id: string;
}

const ResultDetails = () => {
    const searchParams = useSearchParams();
    const [sponge, setSponge] = useState<Sponge | null>(null);
    const [images, setImages] = useState<{ name: string; url: string }[]>([]);
    const [loading, setLoading] = useState(true);

    const otu_id = searchParams.get('otu_id') || 'Not Available';
    const location = searchParams.get('location') || 'Not Available';

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

        if (otu_id !== 'Not Available') {
            fetchImages();
        }
    }, [otu_id]);

    useEffect(() => {
        async function fetchSpongeDetails() {
            try {
                const res = await fetch(`http://localhost:5000/api/samples?otu_id=${otu_id}`);
                const data = await res.json();
                const spongeData = data.data?.[0]; 
                setSponge(spongeData || null);
            } catch (err) {
                console.error('Error fetching sponge details:', err);
            }
        }

        if (otu_id !== 'Not Available') {
            fetchSpongeDetails();
        }
    }, [otu_id]);

    return (
        <div>
            <main className="resultDetails-content">
                <div className="header-bg">
                    <Card className="header-card">
                        {sponge ? (
                            <>
                                <h1>OTU {sponge.otu_id}</h1>
                                <h5>1 sample count</h5>
                                <h5 className = 'loc-element'>{sponge.location_name || 'Location not available'}</h5>
                            </>
                        ) : (
                            <div className='OTU-NA'>
                                <h1>OTU Not Available</h1>
                                <h5>X sample count</h5>
                                <h5 className='loc-element'>Location</h5>
                            </div>
                            
                        )}
                    </Card>
                </div>

                <div className="body">
                    <Tabs defaultActiveKey="details" id="details-tab" className="det-tab">
                        <Tab eventKey="details" title="Details">
                            <div className="description-wrapper">
                                <div className="desc-image">
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
                                <div className="details-wrapper">
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Features</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='table-label'>Functional Form</td>
                                                <td>{sponge?.functional_form || 'N/A'}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-label'>Growth Form</td>
                                                <td>{sponge?.growth_form || 'N/A'}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-label'>Color</td>
                                                <td>{sponge?.color || 'N/A'}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-label'>Surface Texture</td>
                                                <td>{sponge?.surface_texture || 'N/A'}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-label'>Oscule Shape</td>
                                                <td>osc shape</td>
                                            </tr>
                                            <tr>
                                                <td className='table-label'>Oscule Distribution</td>
                                                <td>osc distrib</td>
                                            </tr>
                                            <tr>
                                                <td className='table-label'>Ostia</td>
                                                <td>ostia</td>
                                            </tr>
                                            <tr>
                                                <td className='table-label'>Putative ID</td>
                                                <td>{sponge?.putative_id || 'N/A'}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-label'>test field</td>
                                                <td>Curabitur sit amet lacus in augue elementum vestibulum. Duis vitae risus consequat, accumsan nisi at, venenatis diam. Vestibulum a neque vitae augue fermentum posuere a sed sem.</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Tab>

                        <Tab eventKey="images" title="Images">
                            <div className="samples-wrapper">
                                <div className="sample-image">
                                    {loading ? (
                                        <p>Loading images...</p>
                                    ) : images.length > 0 ? (
                                        <div className="image-grid">
                                            {images.map((img) => (
                                                <img key={img.name} src={img.url} alt={img.name} className="sample-img" />
                                            ))}
                                        </div>
                                    ) : (
                                        <p>No images found</p>
                                    )}
                                </div>

                                <div className='s-details-wrapper'>
                                    <div className='sample-details-heading'>
                                        <p>P0XXXXX</p>
                                        <p>dd-mm-yyyy</p>
                                    </div>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td>Site</td>
                                                <td>collection site</td>
                                            </tr>
                                            <tr>
                                                <td>Actual Depth</td>
                                                <td>XX m</td>
                                            </tr>
                                            <tr>
                                                <td>Dive Number</td>
                                                <td>X</td>
                                            </tr>
                                            <tr>
                                                <td>Diver</td>
                                                <td>Firstname Lastname</td>
                                            </tr>

                                            <tr>
                                                <td>Sample Code</td>
                                                <td>code</td>
                                            </tr>

                                            <tr>
                                                <td>Barcode Sequence</td>
                                                <td>seq</td>
                                            </tr>

                                        </tbody>
                                    </Table>

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

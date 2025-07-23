'use client';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import { useParams } from 'next/navigation';

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
                            Content
                        </Tab>

                        <Tab eventKey="images" title="Images">
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
                        </Tab>
                    </Tabs>
                </div>
            </main>
        </div>
    );
};

export default ResultDetails;
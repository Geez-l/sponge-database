'use client';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';
import { useRouter, useSearchParams } from 'next/navigation';
import '../css/result.css';

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

function toSentenceCase(text: string): string {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export default function ResultPage() {
  const searchParams = useSearchParams();
  const searchParam = searchParams.get('search') || '';
  const [sponges, setSponges] = useState<Sponge[]>([]);
  const [searchTerm, setSearchTerm] = useState(searchParam);
  const router = useRouter();

  const color = searchParams.get('color') || 'Not Available';
  const functionalForm = searchParams.get('functional_form') || 'Not available';
  const putativeID = searchParams.get('putative_id') || 'Not available';
  const location = searchParams.get('location') || 'Not available';

  // Fetch data based on either search or filters
  useEffect(() => {
    const fetchSponges = async () => {
      const search = searchParams.get('search');

      if (search) {
        try {
          const url = `http://localhost:5000/api/samples/search?search=${encodeURIComponent(search)}`;
          const res = await fetch(url);
          const data = await res.json();
          setSponges(data.data || []);
        } catch (err) {
          console.error('Global search error:', err);
        }
      } else {
        const params = new URLSearchParams();
        if (color !== 'Not Available') params.append('color', color);
        if (functionalForm !== 'Not available') params.append('functional_form', functionalForm);
        if (putativeID !== 'Not available') params.append('putative_id', putativeID);
        if (location !== 'Not available') params.append('location', location);

        try {
          const response = await fetch(`http://localhost:5000/api/samples?${params}`);
          const data = await response.json();
          setSponges(data.data || []);
        } catch (err) {
          console.error('Filtered fetch error:', err);
        }
      }
    };

    fetchSponges();
  }, [searchParams]);

  // Handle search input submit in results page
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    if (!trimmed) return;

    router.push(`/result?search=${encodeURIComponent(trimmed.toLowerCase())}`);
  };

  const filteredSponges = sponges.filter(sponge =>
    Object.values(sponge).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <main className='result-header'>
        <div className='header-sample'>
          <h1>OTU List</h1>
          <div className="container-fluid d-flex justify-content-end">
            <form className="search-bar-wrapper" onSubmit={handleSearchSubmit}>
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
          </div>
        </div>
        <div className='filters-container'>
          <p className='text-sm-start'><strong>Selected Filters:</strong></p>
          <span className='individual-filter'>Color = {color}</span>
          <span className='individual-filter'>Functional Form = {functionalForm}</span>
          <span className='individual-filter'>Putative ID = {toSentenceCase(putativeID)}</span>
          <span className='individual-filter'>Location = {toSentenceCase(location)}</span>
        </div>
      </main>

      <main className='result-table'>
        <div className='res-tab'>
          <h5>Results</h5>
        </div>
        <div className='result-container'>
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr className="table-primary">
                <th>OTU No.</th>
                <th>Color</th>
                <th>Functional Form</th>
                <th>Growth Form</th>
                <th>Surface Texture</th>
                <th>Sample Location</th>
                <th>Putative ID</th>
                <th>Date Collected</th>
              </tr>
            </thead>
            <tbody>
              {filteredSponges.length > 0 ? (
                filteredSponges.map((sponge, index) => (
                  <tr key={index}
                    style={{ cursor: 'pointer' }}
                    onClick={() => router.push(`/resultDetails/${sponge.otu_id}`)}
                  >
                    <td>{sponge.otu_id}</td>
                    <td>{sponge.color}</td>
                    <td>{sponge.functional_form}</td>
                    <td>{sponge.growth_form}</td>
                    <td>{sponge.surface_texture}</td>
                    <td>{toSentenceCase(sponge.location_name || 'N/A')}</td>
                    <td className='italic-putative'>{toSentenceCase(sponge.putative_id?.trim() || 'N/A')}</td>
                    <td>{sponge.date_collected && !isNaN(new Date(sponge.date_collected).getTime())
                      ? new Date(sponge.date_collected).toLocaleDateString()
                      : sponge.date_collected || 'Not Available'}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} style={{ textAlign: 'center' }}>
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </main>

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
}

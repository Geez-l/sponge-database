'use client';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useSpongeFilters } from '../hooks/useSpongeFilters';

import '../css/result.css'


interface Sponge {
  otu_id: string;
  color: string;
  functional_form: string;
  growth_form: string;
  surface_texture: string;
  location_name?: string;
  date_collected?: string;
  putative_id: string;
}

const mockData: Sponge[] = [
  {
    otu_id: "1",
    color: "Red",
    functional_form: "A",
    growth_form: "B",
    surface_texture: "Smooth",
    location_name: "Bohol",
    date_collected: "2023-03-15",
    putative_id: '2'
  },
  {
    otu_id: "2",
    color: "Blue",
    functional_form: "C",
    growth_form: "D",
    surface_texture: "Rough",
    location_name: "Palawan",
    date_collected: "2023-03-18",
    putative_id: "1"
  },
];

export default function ResultPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  // const { handleSubmit } = useSpongeFilters();

  const selectedColor = 'All';
  const selectedFunctionalForm = 'All';
  const sponges: Sponge[] = mockData;

  // const handleSubmitAndNavigate = () => {
  //   handleSubmit();
  //   router.push('/result');
  // };

  return (
    <div>
      <main className='result-header mt-5 pt-5'>
        <div className='header-sample pt-5'>
          {/* <p className="text-center">OTU List</p> */}
          <h1>
            <span className='otu'>OTU</span> <span className='list'>List</span>
          </h1>
          <div className="container-fluid d-flex justify-content-end ">
            <form
              className="search-bar-wrapper"
              onSubmit={e => {
                e.preventDefault();
                // handleSubmitAndNavigate();
              }}
            >
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
        <div className='top-container mt-1 '>
          <p className='text-sm-start'><strong>Selected Filters:</strong></p> Color = {selectedColor}, Functional Form = {selectedFunctionalForm}
        </div>
      </main>
      <main className='result-table mt-5 pt-5'>
        <div className='res-tab mt-5 pt-5'>
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
              {sponges.length > 0 ? (
                sponges.map((sponge, index) => (
                  <tr key={index}
                  style={{cursor:'pointer'}}
                  onClick={() => router.push(`/resultDetails`)}
                  >
                    <td>{sponge.otu_id}</td>
                    <td>{sponge.color}</td>
                    <td>{sponge.functional_form}</td>
                    <td>{sponge.growth_form}</td>
                    <td>{sponge.surface_texture}</td>
                    <td>{sponge.location_name || 'N/A'}</td>
                    <td>{sponge.putative_id}</td>
                    <td>{sponge.date_collected ? new Date(sponge.date_collected).toLocaleDateString() : 'N/A'}</td>
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
    </div>
  );
}

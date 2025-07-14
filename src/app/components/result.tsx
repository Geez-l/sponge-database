'use client';
import React from 'react';
import { Table } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Sponge {
  otu_id: string;
  color: string;
  functional_form: string;
  growth_form: string;
  surface_texture: string;
  location_name?: string;
  date_collected?: string;
}

interface ResultProps {
  selectedColor: string;
  selectedFunctionalForm: string;
  sponges: Sponge[];
}

const Result: React.FC<ResultProps> = ({ selectedColor, selectedFunctionalForm, sponges }) => {
  return (
    <div>
      {/* Criteria Summary */}
      <main className='result-header'>
        <div className='top-container'>
          <strong>Selected Filters:</strong> Color = {selectedColor}, Functional Form = {selectedFunctionalForm}
        </div>
      </main>

    

      {/* Results Table */}
      <main className='result-table'>
        <div className='res-tab'>
          <h5>Results</h5>
        </div>
        <div className='result-container'>
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr>
                <th>OTU No.</th>
                <th>Color</th>
                <th>Functional Form</th>
                <th>Growth Form</th>
                <th>Surface Texture</th>
                <th>Sample Location</th>
                <th>Date Collected</th>
              </tr>
            </thead>
            <tbody>
              {sponges.length > 0 ? (
                sponges.map((sponge, index) => (
                  <tr key={index}>
                    <td>{sponge.otu_id}</td>
                    <td>{sponge.color}</td>
                    <td>{sponge.functional_form}</td>
                    <td>{sponge.growth_form}</td>
                    <td>{sponge.surface_texture}</td>
                    <td>{sponge.location_name || 'N/A'}</td>
                    <td>{sponge.date_collected ? new Date(sponge.date_collected).toLocaleDateString() : 'N/A'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center' }}>No results found</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default Result;

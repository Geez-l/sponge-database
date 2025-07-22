import { useState, useEffect } from 'react';

// not used - to be del soon
export function useSpongeFilters() {
  const [selectedColor, setSelectedColor] = useState('Color Dropdown');
  const [selectedFunctionalForm, setSelectedFunctionalForm] = useState('Functional Form Dropdown');
  const [selectedClassification, setSelectedClassification] = useState('Classification')
  const [sponges, setSponges] = useState([]);
  const [colors, setColors] = useState([]);
  const [functionalForms, setFunctionalForms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchColors = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/colors');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setColors(data);
    } catch (error) {
      console.error('Error fetching colors:', error);

      // Set fallback data when backend is not available
      setColors(['Black', 'Grey', 'Blue-Green', 'Red-Brown']);
      setError('Backend server not available. Using sample data.');
    }
  };

  const fetchFunctionalForms = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/functional-forms');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setFunctionalForms(data);
    } catch (error) {
      console.error('Error fetching functional forms:', error);

      // Set fallback data when backend is not available
      setFunctionalForms(['Massive', 'Encrusting', 'Branching', 'Cup-shaped']);
      setError('Backend server not available. Using sample data.');
    }
  };

  useEffect(() => {
    fetchColors();
    fetchFunctionalForms();
  }, []);

  const fetchSponges = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (selectedColor !== 'Color Dropdown') {
        params.append('color', selectedColor);
      }
      if (selectedFunctionalForm !== 'Functional Form Dropdown') {
        params.append('functional_form', selectedFunctionalForm);
      }
      const response = await fetch(`http://localhost:3001/api/sponges?${params}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSponges(data);
    } catch (error) {
      console.error('Error fetching sponges:', error);
      setError('Backend server not available. Please start the server to see real data.');
      
      // Set sample data for demonstration
      setSponges([
        {
          otu_id: 1,
          color: selectedColor !== 'Color Dropdown' ? selectedColor : 'Sample Color',
          functional_form: selectedFunctionalForm !== 'Functional Form Dropdown' ? selectedFunctionalForm : 'Sample Form',
          growth_form: 'Sample Growth Form',
          surface_texture: 'Sample Texture',
          location_name: 'Sample Location',
          date_collected: '2024-01-01'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleFunctionalFormSelect = (form) => {
    setSelectedFunctionalForm(form);
  };

  const handleClassification = (classification) => {
    setSelectedClassification(classification);
  };
  

  const handleReset = () => {
    setSelectedColor('Color Dropdown');
    setSelectedFunctionalForm('Functional Form Dropdown');
    setSponges([]);
    setError(null);
  };

  const handleSubmit = () => {
    fetchSponges();
  };

  return {
    selectedColor,
    selectedFunctionalForm,
    sponges,
    colors,
    functionalForms,
    loading,
    error,
    handleColorSelect,
    handleFunctionalFormSelect,
    handleReset,
    handleSubmit,
  };
} 
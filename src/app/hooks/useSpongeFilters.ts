import { useState, useEffect } from 'react';

export function useSpongeFilters() {
  const [selectedColor, setSelectedColor] = useState('Color');
  const [selectedFunctionalForm, setSelectedFunctionalForm] = useState('Functional Form');
  const [selectedPutative, setSelectedPutative] = useState('Putative');
  const [selectedLocation, setSelectedLocation] = useState('Location');
  const [sponges, setSponges] = useState<any[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [functionalForms, setFunctionalForms] = useState<string[]>([]);
  const [putative, setPutative] = useState<string[]>([]);
  const [location, setLocation] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchColors = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/colors');
      const data = await response.json();
      setColors(data);
    } catch (error) {
      console.error('Error fetching colors:', error);
    }
  };

  const fetchFunctionalForms = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/functional-forms');
      const data = await response.json();
      setFunctionalForms(data);
    } catch (error) {
      console.error('Error fetching functional forms:', error);
    }
  };

  const fetchPutative = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/putative');
      const data = await response.json();
      setPutative(data);
    } catch (error) {
      console.error('Error fetching putative:', error);
    }
  };

  const fetchLocation = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/location');
      const data = await response.json();
      setLocation(data);
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  useEffect(() => {
    fetchColors();
    fetchFunctionalForms();
    fetchPutative();
    fetchLocation();
  }, []);

  const fetchSponges = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (selectedColor !== 'Color') {
        params.append('color', selectedColor);
      }
      if (selectedFunctionalForm !== 'Functional Form') {
        params.append('functional_form', selectedFunctionalForm);
      }
      if (selectedPutative !== 'Putative') {
        params.append('putative_id', selectedPutative);
      }
      if (selectedLocation !== 'Location') {
        params.append('location', selectedLocation);
      }
      const response = await fetch(`http://localhost:3001/api/samples?${params}`);
      const data = await response.json();
      setSponges(data.data || []);
    } catch (error) {
      console.error('Error fetching sponges:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleFunctionalFormSelect = (form: string) => {
    setSelectedFunctionalForm(form);
  };

  const handlePutativeSelect = (putative: string) => {
    setSelectedPutative(putative);
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
  };

  const handleReset = () => {
    setSelectedColor('Color');
    setSelectedFunctionalForm('Functional Form');
    setSelectedPutative('Putative');
    setSelectedLocation('Location');
    setSponges([]);
  };

  const handleSubmit = () => {
    fetchSponges();
  };

  return {
    selectedColor,
    selectedFunctionalForm,
    selectedPutative,
    selectedLocation,
    sponges,
    colors,
    functionalForms,
    putative,
    location,
    loading,
    handleColorSelect,
    handleFunctionalFormSelect,
    handlePutativeSelect,
    handleLocationSelect,
    handleReset,
    handleSubmit,
  };
}

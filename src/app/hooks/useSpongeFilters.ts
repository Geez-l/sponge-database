import { useState, useEffect } from 'react';

export function useSpongeFilters() {
  const [selectedColor, setSelectedColor] = useState('Color');
  const [selectedFunctionalForm, setSelectedFunctionalForm] = useState('Functional Form');
  const [selectedClassification, setSelectedClassification] = useState('Classification');
  const [selectedGrowth, setSelectedGrowth] = useState('Growth');
  const [selectedSurface, setSelectedSurface] = useState('Surface');
  const [selectedLocation, setSelectedLocation] = useState('Location');
  const [sponges, setSponges] = useState<any[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [functionalForms, setFunctionalForms] = useState<string[]>([]);
  const [classification, setClassification] = useState<string[]>([]);
  const [growth, setGrowth] = useState<string[]>([]);
  const [surface, setSurface] = useState<string[]>([]);
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

  const fetchClassification = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/classification');
      const data = await response.json();
      setClassification(data);
    } catch (error) {
      console.error('Error fetching putative classification:', error);
    }
  };

  const fetchGrowth = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/growth');
      const data = await response.json();
      setGrowth(data);
    } catch (error) {
      console.error('Error fetching growth forms:', error);
    }
  };

  const fetchSurface = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/surface');
      const data = await response.json();
      setSurface(data);
    } catch (error) {
      console.error('Error fetching surface texture:', error);
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
    fetchClassification();
    fetchGrowth();
    fetchSurface();
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
      if (selectedClassification!== 'Putative Classification') {
        params.append('classification', selectedClassification);
      }
      if (selectedGrowth!== 'Growth Form') {
        params.append('growth', selectedGrowth);
      }
      if (selectedSurface!== 'Surface Texture') {
        params.append('surface', selectedSurface);
      }
      if (selectedLocation!== 'Location') {
        params.append('location', selectedLocation);
      }
      const response = await fetch(`http://localhost:3001/api/sponges?${params}`);
      const data = await response.json();
      setSponges(data);
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

  const handleClassificationSelect = (classification: string) => {
    setSelectedClassification(classification);
  };

  const handleGrowthSelect =  (growth: string) => {
    setSelectedGrowth(growth);
  };

  const handleSurfaceSelect =  (surface: string) => {
    setSelectedSurface(surface);
  };

  const handleLocationSelect =  (location: string) => {
    setSelectedLocation(location);
  };

  const handleReset = () => {
    setSelectedColor('Color');
    setSelectedFunctionalForm('Functional Form');
    setSelectedClassification('Putative Classification');
    setSelectedGrowth('Growth Form');
    setSelectedSurface('Surface Texture');
    setSelectedLocation('Location');
    setSponges([]);
  };

  const handleSubmit = () => {
    fetchSponges();
  };

  return {
    selectedColor,
    selectedFunctionalForm,
    selectedClassification,
    selectedGrowth,
    selectedSurface,
    selectedLocation,
    sponges,
    colors,
    functionalForms,
    classification,
    growth,
    surface,
    location,
    loading,
    handleColorSelect,
    handleFunctionalFormSelect,
    handleClassificationSelect,
    handleGrowthSelect,
    handleSurfaceSelect,
    handleLocationSelect,
    handleReset,
    handleSubmit,
  };
}

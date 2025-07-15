import { useState, useEffect } from 'react';

export function useSpongeFilters() {
  const [selectedColor, setSelectedColor] = useState('Color Dropdown');
  const [selectedFunctionalForm, setSelectedFunctionalForm] = useState('Functional Form Dropdown');
  const [sponges, setSponges] = useState<any[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [functionalForms, setFunctionalForms] = useState<string[]>([]);
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

  useEffect(() => {
    fetchColors();
    fetchFunctionalForms();
  }, []);

  const fetchSponges = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (selectedColor !== 'Color Dropdown') {
        params.append('color', selectedColor);
      }
      if (selectedFunctionalForm !== 'Functional Form Dropdown') {
        params.append('functional_form', selectedFunctionalForm);
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

  const handleReset = () => {
    setSelectedColor('Color Dropdown');
    setSelectedFunctionalForm('Functional Form Dropdown');
    setSponges([]);
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
    handleColorSelect,
    handleFunctionalFormSelect,
    handleReset,
    handleSubmit,
  };
}

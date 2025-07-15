'use client';
import { useState } from 'react';
import Navigation from './components/navigation';
import { useSpongeFilters } from './hooks/useSpongeFilters';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [currentPage, setCurrentPage] = useState('home');
  const {
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
  } = useSpongeFilters();

  const router = useRouter();

  const renderPage = () => {
    switch(currentPage) {
      case 'home': 
        return <Home />;
      case 'result': 
        return (
          <Result 
            selectedColor={selectedColor} 
            selectedFunctionalForm={selectedFunctionalForm} 
            sponges={sponges || []} 
          />
        );
      case 'faq': 
        return <FAQ />;
      case 'about': 
        return <About />;
      default: 
        return <Home />;
    }
  };

  return (
    <div>
      <Navigation/>
      {renderPage()}
    </div>
  );
}



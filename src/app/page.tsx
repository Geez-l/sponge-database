'use client';
import { useState } from 'react';
import Navigation from './components/navigation';
import Home from './components/home';
import Result from './components/result';
import FAQ from './components/faq';
import About from './components/about';
import { useSpongeFilters } from './hooks/useSpongeFilters';

export default function Page() {
  const [currentPage, setCurrentPage] = useState('home');
  const {
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
  } = useSpongeFilters();

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
      <Navigation onPageChange={setCurrentPage} />
      {renderPage()}
    </div>
  );
}



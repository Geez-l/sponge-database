"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// railway
const API_BASE_URL = "https://sponge-database-production.up.railway.app/api";

export function useSpongeFilters() {
  const [selectedColor, setSelectedColor] = useState("Color");
  const [selectedFunctionalForm, setSelectedFunctionalForm] = useState("Functional Form");
  const [selectedPutative, setSelectedPutative] = useState("Putative ID");
  const [selectedLocation, setSelectedLocation] = useState("Location");

  const [sponges, setSponges] = useState<any[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [functionalForms, setFunctionalForms] = useState<string[]>([]);
  const [putative, setPutative] = useState<string[]>([]);
  const [location, setLocation] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showWarning, setShowWarning] = useState(false); //for modal
  const router = useRouter();

  // http request to fetch colors
  const fetchColors = async () => {
    try {
      // const response = await fetch("http://localhost:5000/api/colors");
      const response = await fetch(`${API_BASE_URL}/colors`);
      const data = await response.json();
      setColors(data.data);
    } catch (error) {
      console.error("Error fetching colors:", error);
    }
  };

  // http request to fetch functional forms
  const fetchFunctionalForms = async () => {
    try {
      // const response = await fetch("http://localhost:5000/api/functional_form");
      const response = await fetch(`${API_BASE_URL}/functional_form`);
      const data = await response.json();
      setFunctionalForms(data.data);
    } catch (error) {
      console.error("Error fetching functional forms:", error);
    }
  };

  // http request to fetch putative ids
  const fetchPutative = async () => {
    try {
      // const response = await fetch("http://localhost:5000/api/putative_id");
      const response = await fetch(`${API_BASE_URL}/putative_id`);
      const data = await response.json();
      setPutative(data.data);
    } catch (error) {
      console.error("Error fetching putative_id:", error);
    }
  };

  // http request to fetch location
  const fetchLocation = async () => {
    try {
      // const response = await fetch("http://localhost:5000/api/location");
      const response = await fetch(`${API_BASE_URL}/location`);
      const data = await response.json();
      setLocation(data.data);
    } catch (error) {
      console.error("Error fetching location:", error);
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
      if (selectedColor !== "Color") {
        params.append("color", selectedColor);
      }
      if (selectedFunctionalForm !== "Functional Form") {
        params.append("functional_form", selectedFunctionalForm);
      }
      if (selectedPutative !== "Putative ID") {
        params.append("putative_id", selectedPutative);
      }
      if (selectedLocation !== "Location") {
        params.append("location", selectedLocation);
      }
      // const response = await fetch(// `http://localhost:5000/api/samples?${params}`);
      const response = await fetch(`${API_BASE_URL}/samples?${params}`);
      const data = await response.json();
      setSponges(data.data || []);
    } catch (error) {
      console.error("Error fetching sponges:", error);
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
    setSelectedColor("Color");
    setSelectedFunctionalForm("Functional Form");
    setSelectedPutative("Putative ID");
    setSelectedLocation("Location");
    setSponges([]);
  };

  const handleSubmit = () => {
    fetchSponges();
  };

  const handleSubmitAndNavigate = () => {
    const trimmedSearch = searchTerm.trim();
    const params = new URLSearchParams();
    const noDrodpdownsSelected =
      selectedColor === "Color" &&
      selectedFunctionalForm === "Functional Form" &&
      selectedPutative === "Putative ID" &&
      selectedLocation === "Location";
    
    
    if (noDrodpdownsSelected && trimmedSearch === "") {
      setShowWarning(true);
      return;
    }

    if (searchTerm && searchTerm.trim().toLowerCase() !== "") {
      params.append("search", searchTerm.trim().toLowerCase());
    }

    if (selectedColor && selectedColor !== "Color") {
      params.append("color", selectedColor.trim().toLowerCase());
    }

    if (
      selectedFunctionalForm &&
      selectedFunctionalForm !== "Functional Form"
    ) {
      params.append(
        "functional_form",
        selectedFunctionalForm.trim().toLowerCase()
      );
    }

    if (selectedPutative && selectedPutative !== "Putative ID") {
      params.append("putative_id", selectedPutative.trim().toLowerCase());
    }

    if (selectedLocation && selectedLocation !== "Location") {
      params.append("location", selectedLocation.trim().toLowerCase());
    }

    console.log("Navigating to:", `/result?${params.toString()}`);
    router.push(`/result?${params.toString()}`);
  };

  /*for popup modal */
  const handleConfirmUnfiltered = () => {
    setShowWarning(false);
    router.push("/result");
  };

  const handleCancelUnfiltered = () => setShowWarning(false);

  {
    /*Global search in the home search bar */
  }
  const handleFetchGlobal = async () => {
    const trimmedSearch = searchTerm.trim();
    if (!trimmedSearch) {
      handleSubmitAndNavigate();
      return;
    }

    const params = new URLSearchParams();
    params.append("search", trimmedSearch.toLowerCase());

    router.push(`/result?${params.toString()}`);
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
    searchTerm,
    showWarning, 
    setSearchTerm,
    handleColorSelect,
    handleFunctionalFormSelect,
    handlePutativeSelect,
    handleLocationSelect,
    handleReset,
    handleSubmit,
    handleSubmitAndNavigate,
    handleFetchGlobal,
    handleConfirmUnfiltered,
    handleCancelUnfiltered,
    setSelectedColor,
  };
}

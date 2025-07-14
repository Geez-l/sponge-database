'use client';
import React, { useState, useEffect } from "react";
import { Link, Route, Router, Routes } from 'react-router-dom';

// MAIN PAGES
import Home from './components/home';
import Result from './components/result';
import ResultDetails from './components/resultDetails';
import Navigation from './components/navigation';

export default function Page() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
       <div>
        <Navigation/>
        <Home/>
       </div>
    );
};



'use client';

import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

// MAIN PAGES
import Home from './components/home';

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
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </Router>
    );
}

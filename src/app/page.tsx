'use client';
import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

// MAIN PAGES
import Home from './components/home';
import Result from './components/result';
import ResultDetails from './components/resultDetails';

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

            {/* Navs to sample list */}
            <Routes>
                <Route path='/' element={<Result selectedColor={""} selectedFunctionalForm={""} sponges={[]}/>} />
            </Routes>

            <Routes>
                <Route path='/' element={<ResultDetails/>} />
            </Routes>

            {/* <Routes>
                <Route path='/' element={<FAQs/>} />
            </Routes> */}

              {/* <Routes>
                <Route path='/' element={<About us/>} />
            </Routes> */}
        </Router>
    );
}

import React, { useState, useEffect } from "react";

// import './App.css'

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

// import 'bootstrap-icons/font/bootstrap-icons.css';

// MAIN PAGES
import Home from './components/home';
// import result from './components/result';

const App = () => {
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
};

export default App;
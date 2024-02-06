import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Logon from './pages/logon';
import Register from './pages/register';
import Profile from './pages/profile';
import NewIncidents from './pages/NewIncidents';

export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Logon/>} />
                <Route path="/Register" element={<Register/>} />

                <Route path="/profile" element={<Profile/>} />
                <Route path="/incidents/new" element={<NewIncidents/>} />
                
            </Routes>
        </Router>
    );
}
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProviderList from './components/ProviderList';
import ProviderDetail from './components/ProviderDetail';
import AppointmentForm from './components/AppointmentForm';
import ResourceList from './components/ResourceList';
import ReviewForm from './components/ReviewForm';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Healthcare Appointment and Resource Manager</h1>
                </header>
                <Routes>
                    <Route path="/providers/:id" element={<ProviderDetail />} />
                    <Route path="/providers" element={<ProviderList />} />
                    <Route path="/appointments" element={<AppointmentForm />} />
                    <Route path="/resources" element={<ResourceList />} />
                    <Route path="/reviews" element={<ReviewForm />} />
                    <Route path="/" element={<ProviderList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
